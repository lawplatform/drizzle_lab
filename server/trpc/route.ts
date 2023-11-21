import { db } from '../db';
import { file } from '../db/schema/file';
import { publicProcedure, router } from './trpc';
import { z } from 'zod'
import { eq, lt, gte, ne } from 'drizzle-orm';
export const appRouter = router({
	//router 선언
	getTodos: publicProcedure.query(async () => {
		return [1, 2, 3, 4, 5];
	}),
	addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
		//await db.insert(user).values({ email: opts.input });
	}),
	getFiles: publicProcedure.input(z.string()).query(async (opts) => {
		const result = db.select().from(file).where(eq(file.userid, opts));
		return result

	}),
	getOwnFiles: privateProcedure.query(({ ctx }) => {
		return result

	}),

});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
