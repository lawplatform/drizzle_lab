import { relations } from 'drizzle-orm';
import {
	integer,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { vector } from '../types/vector';

export const userSystemEnum = pgEnum("user_system_enum", ["system", "user"]);

export const aiChats = pgTable("ai_chats", {
	id: serial("id").primaryKey(),
	pdfName: text("pdf_name").notNull(),
	pdfUrl: text("pdf_url").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	userId: varchar("user_id", { length: 256 }).notNull(),
	fileKey: text("file_key").notNull(),
});

export type DrizzleChat = typeof aiChats.$inferSelect;

export const aiMessages = pgTable("ai_messages", {
	id: serial("id").primaryKey(),
	chatId: integer("chat_id")
		.references(() => aiChats.id)
		.notNull(),
	content: text("content").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	role: userSystemEnum("role").notNull(),
});


export const aiDocuments = pgTable("ai_documents", {
	id: serial("id").primaryKey(),
	content: text("content").notNull(),
	embedding: vector('embedding', { dimension: 3 }),
	token: integer("token"),
}
)
