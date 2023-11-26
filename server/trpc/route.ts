import { db } from '../db';
import { file } from '../db/schema/file';
import { privateProcedure, publicProcedure, router } from './index';
import { z } from 'zod'
import { eq, and, gte, ne } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';




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


	getFile: privateProcedure.input(z.object({ key: z.string() })).mutation(async ({ ctx, input }) => {
		const { userId } = ctx
		const result = await db.query.file.findFirst({
			where: and(eq(file.userId, userId), eq(file.id, input.key)),
		})
		if (!result) {
			throw new TRPCError({ code: "UNAUTHORIZED" });
		}

		return result
	}),




	deleteFile: privateProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
		await db.delete(file).where(eq(file.id, input.id)).returning();

		return true;

	}),
	getOwnFiles: privateProcedure.query(({ ctx }) => {
		const { userId } = ctx
		const result = db.select().from(file).where(eq(file.userid, userId));
		return result;
	}),

	getOwnFilebyId: privateProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
		const { userId } = ctx
		const result = await db.select().from(file).where(and(eq(file.id, input.id), eq(file.userid, ctx.userId)))
		//const result = db.select().from(file);

		return result;

	}),

});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
