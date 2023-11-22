import { db } from '../db';
import { file } from '../db/schema/file';
import { privateProcedure, publicProcedure, router } from './trpc';
import { z } from 'zod'
import { eq, lt, gte, ne } from 'drizzle-orm';
export const appRouter = router({
	getTodos: publicProcedure.query(async () => {
		const result = db.select().from(file);
		return result;
		//return [1, 2, 3, 4, 5, 10];
	}),
	addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
		//await db.insert(user).values({ email: opts.input });
	}),
	getFiles: publicProcedure.input(z.string()).query(async (opts) => {
		if (!opts) return
		//const result = db.select().from(file).where(eq(file.userid, opts.input));
		const result = db.select().from(file);
		return result

	}),
	getOwnFiles: privateProcedure.query(({ ctx }) => {
		const { userId } = ctx


		const result = db.select().from(file).where(eq(file.userid, userId));
		return result;
	}),

});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
