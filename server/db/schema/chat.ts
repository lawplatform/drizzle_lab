import {
	timestamp,
	pgTable,
	text,
	primaryKey,
	integer,
	uuid
} from "drizzle-orm/pg-core"
import type { AdapterAccount } from '@auth/core/adapters'
import { relations, sql } from "drizzle-orm";
import { user } from "./user";

export const chatMssages = pgTable("chat_message", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`), username: text("name"),
	userid: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	content: text("content")


}, (table) => {
	return {
		pk: primaryKey({ columns: [table.id, table.userid] }),
	}
}
)

export const roomParticipant = pgTable("room_participant", {
	roomId: uuid("room_id").notNull().references(() => chatRoom.id, { onDelete: "cascade" }),
	userId: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),

}, (table) => {
	return {
		pk: primaryKey({ columns: [table.roomId, table.userId] }),
	}
}
)


export const chatRoom = pgTable("chat_room", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`), username: text("name"),
	name: text("name"),
	userid: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	content: text("content")

})

