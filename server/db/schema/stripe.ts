import { pgTable, serial, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { user } from "./user";
import { relations } from "drizzle-orm";

export const stripe = pgTable("stripe", {
	userid: uuid("userId").notNull().references(() => user.id, { onDelete: "cascade" }),

	stripeCustomerId: text("stripe_customer_id"),
	stripeSubscriptionId: text("stripe_subscription_id"),
	stripePriceId: text("stripe_price_id").notNull(),
	stripeCurrentPeriodEnd: timestamp("stripe_current_period_end"),
});
export const usersRelations = relations(user, ({ one }) => ({
	stripe: one(stripe)
}));


export const userSubscriptions = pgTable("user_subscriptions", {
	id: serial("id").primaryKey(),
	userId: varchar("user_id", { length: 256 }).notNull().unique(),
	stripeCustomerId: varchar("stripe_customer_id", { length: 256 })
		.notNull()
		.unique(),
	stripeSubscriptionId: varchar("stripe_subscription_id", {
		length: 256,
	}).unique(),
	stripePriceId: varchar("stripe_price_id", { length: 256 }),
	stripeCurrentPeriodEnd: timestamp("stripe_current_period_ended_at"),
})
