import NextAuth, { DefaultSession } from "next-auth"
import type { JWT } from "next-auth/jwt"
declare module "next-auth" {
	interface Session {
		supabaseAccessToken?: string
		user: {
		} & DefaultSession["user"]
	}
}
