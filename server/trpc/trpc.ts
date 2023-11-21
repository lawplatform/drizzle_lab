import { TRPCError, initTRPC } from "@trpc/server"
import { useSession } from "next-auth/react";

const t = initTRPC.create();
const middleware = t.middleware

const isAuth = middleware(async (opts) => {
	const { data: session, status } = useSession()
	const user = session?.user;
	if (!user || !user.email) {
		throw new TRPCError({ code: "UNAUTHORIZED" });

	}
	return opts.next({
		ctx: {
			userEmail: user.email,
			user,
			name: user.name
		}
	})

})

export const router = t.router
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth)
