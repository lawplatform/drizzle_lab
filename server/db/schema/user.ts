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

export const user = pgTable("user", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	name: text("name"),
	email: text("email").unique().notNull(),
	emailVerified: timestamp("emailVerified", { mode: "date" }),
	image: text("image"),
})



export const accounts = pgTable("account", {
	userId: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
	type: text("type").$type<AdapterAccount["type"]>().notNull(),
	provider: text("provider").notNull(),
	providerAccountId: text("providerAccountId").notNull(),
	refresh_token: text("refresh_token"),
	access_token: text("access_token"),
	expires_at: integer("expires_at"),
	token_type: text("token_type"),
	scope: text("scope"),
	id_token: text("id_token"),
	session_state: text("session_state"),
},
	(account) => ({
		compoundKey: primaryKey(account.provider, account.providerAccountId),
	})
)

export const sessions = pgTable("session", {
	sessionToken: text("sessionToken").notNull().primaryKey(),
	userId: uuid("useId").notNull().references(() => user.id, { onDelete: "cascade" }),
	expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
	"verificationToken",
	{
		identifier: text("identifier").notNull(),
		token: text("token").notNull(),
		expires: timestamp("expires", { mode: "date" }).notNull(),
	},
	(vt) => ({
		compoundKey: primaryKey(vt.identifier, vt.token),
	})
)
