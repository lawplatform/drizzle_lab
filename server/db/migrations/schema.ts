import { pgTable, foreignKey, pgEnum, text, uuid, timestamp, unique, primaryKey, integer } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const keyStatus = pgEnum("key_status", ['expired', 'invalid', 'valid', 'default'])
export const keyType = pgEnum("key_type", ['stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf'])
export const factorType = pgEnum("factor_type", ['webauthn', 'totp'])
export const factorStatus = pgEnum("factor_status", ['verified', 'unverified'])
export const aalLevel = pgEnum("aal_level", ['aal3', 'aal2', 'aal1'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['plain', 's256'])
export const status = pgEnum("status", ['SUCCESS', 'FAILDE', 'PROCESSING', 'PENDING'])


export const session = pgTable("session", {
	sessionToken: text("sessionToken").primaryKey().notNull(),
	useId: uuid("useId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
});

export const stripe = pgTable("stripe", {
	userId: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	stripeCustomerId: text("stripe_customer_id"),
	stripeSubscriptionId: text("stripe_subscription_id"),
	stripePriceId: text("stripe_price_id").notNull(),
	stripeCurrentPeriodEnd: timestamp("stripe_current_period_end", { mode: 'string' }),
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