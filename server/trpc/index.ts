import { TRPCError, initTRPC } from "@trpc/server"
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { authOptions } from "../auth/authOption";

const t = initTRPC.create();
const middleware = t.middleware

const isAuth = middleware(async (opts) => {
	const session = await getServerSession(authOptions);
	const id = JSON.parse(JSON.stringify(session, null, 2));

	if (!id.user.id) {
		throw new TRPCError({ code: "UNAUTHORIZED" });

	}


	return opts.next({
		ctx: {
			userId: id.user.id
		}
	}
	)

})

export const router = t.router
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth)
