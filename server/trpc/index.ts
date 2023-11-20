import { db } from '../db';
import { user } from '../db/migrations/schema';
import { publicProcedure, router } from './trpc';
import { z } from 'zod'
export const appRouter = router({
	//router 선언
	getTodos: publicProcedure.query(async () => {
		return [1, 2, 3, 4, 5];
	}),
	addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
		await db.insert(user).values({ email: opts.input });
	})
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
