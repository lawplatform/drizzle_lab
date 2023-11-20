import { pgTable, foreignKey, pgEnum, text, timestamp, varchar, primaryKey, integer } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])


export const session = pgTable("session", {
	sessionToken: text("sessionToken").primaryKey().notNull(),
	userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
});

export const user = pgTable("user", {
	id: text("id").primaryKey().notNull().default(sql`gen_random_uuid()`),
	name: text("name"),
	email: text("email").notNull(),
	emailVerified: timestamp("emailVerified", { mode: 'string' }),
	image: text("image"),
});

export const docs = pgTable("Docs", {
	id: varchar("id").primaryKey().notNull(),
	createdAt: text("createdAt"),
	metadata: text("metadata"),
	pageContent: text("pageContent"),
	name: text("name"),
	langChainDocsId: text("langChainDocsId"),
});

export const langChainDocs = pgTable("LangChainDocs", {
	id: varchar("id").primaryKey().notNull(),
	createdAt: text("createdAt"),
	name: text("name"),
	nameSpace: text("nameSpace"),
});

export const verificationToken = pgTable("verificationToken", {
	identifier: text("identifier").notNull(),
	token: text("token").notNull(),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
},
	(table) => {
		return {
			verificationtokenIdentifierToken: primaryKey({ columns: [table.identifier, table.token], name: "verificationtoken_identifier_token" })
		}
	});

export const account = pgTable("account", {
	userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" }),
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
			accountProviderProvideraccountid: primaryKey({ columns: [table.provider, table.providerAccountId], name: "account_provider_provideraccountid" })
		}
	});
