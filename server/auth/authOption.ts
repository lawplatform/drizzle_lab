import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "../db"

export const authOptions: NextAuthOptions = {
	adapter: DrizzleAdapter(db),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
	],
	session: {
		strategy: 'jwt',
	},

	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, user, token }) {
			if (session?.user) {
				session.user.id = token.sub;
			}
			return session
		},
	},
	async jwt({ user, token, account }) {
		if (user) {
			token.uid = user.id;
		}
		return token;
	},
}
