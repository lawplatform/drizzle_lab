import {
	timestamp,
	pgTable,
	text,
	primaryKey,
	integer,
	uuid,
	pgEnum
} from "drizzle-orm/pg-core"
import { relations, sql } from "drizzle-orm";
import { user } from "./user";


export const statusEnum = pgEnum('status', ['PENDING', 'PROCESSING', 'FAILDE', 'SUCCESS']);


export const usersFileRelations = relations(user, ({ many }) => ({
	file: many(file)
}));

export const file = pgTable("file", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	name: text("name"),
	uploadStatus: statusEnum("status").default('PENDING'),
	url: text("url"),
	key: text("key"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at"),
	userid: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),


})



