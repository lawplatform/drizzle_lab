import { pgTable, pgEnum, serial, text, integer, timestamp, varchar, foreignKey, unique, uuid, primaryKey } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const userSystemEnum = pgEnum("user_system_enum", ['user', 'system'])
export const status = pgEnum("status", ['SUCCESS', 'FAILDE', 'PROCESSING', 'PENDING'])


export const aiDocuments = pgTable("ai_documents", {
	id: serial("id").primaryKey().notNull(),
	content: text("content").notNull(),
	// TODO: failed to parse database type 'vector(3)'
	embedding: unknown("embedding"),
	token: integer("token"),
});

export const aiChats = pgTable("ai_chats", {
	id: serial("id").primaryKey().notNull(),
	pdfName: text("pdf_name").notNull(),
	pdfUrl: text("pdf_url").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	userId: varchar("user_id", { length: 256 }).notNull(),
	fileKey: text("file_key").notNull(),
});

export const aiMessages = pgTable("ai_messages", {
	id: serial("id").primaryKey().notNull(),
	chatId: integer("chat_id").notNull().references(() => aiChats.id),
	content: text("content").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	role: userSystemEnum("role").notNull(),
});

export const user = pgTable("user", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name"),
	email: text("email").notNull(),
	emailVerified: timestamp("emailVerified", { mode: 'string' }),
	image: text("image"),
},
(table) => {
	return {
		userEmailUnique: unique("user_email_unique").on(table.email),
	}
});

export const session = pgTable("session", {
	sessionToken: text("sessionToken").primaryKey().notNull(),
	useId: uuid("useId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
});

export const file = pgTable("file", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name"),
	status: status("status").default('PENDING'),
	url: text("url"),
	key: text("key"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	userId: uuid("user_id").notNull().references(() => user.id, { onDelete: "cascade" } ),
});

export const verificationToken = pgTable("verificationToken", {
	identifier: text("identifier").notNull(),
	token: text("token").notNull(),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
},
(table) => {
	return {
		verificationtokenIdentifierToken: primaryKey({ columns: [table.identifier, table.token], name: "verificationtoken_identifier_token"})
	}
});

export const account = pgTable("account", {
	userId: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	type: text("type").notNull(),
	provider: text("provider").notNull(),
	providerAccountId: text("providerAccountId").notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text("scope"),
	idToken: text("id_token"),
	sessionState: text("session_state"),
},
(table) => {
	return {
		accountProviderProvideraccountid: primaryKey({ columns: [table.provider, table.providerAccountId], name: "account_provider_provideraccountid"})
	}
});