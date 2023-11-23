import { relations } from 'drizzle-orm';
import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const langChainDocs = pgTable('LangChainDocs', {
	id: varchar('id').primaryKey(),
	createdAt: text('createdAt'),
	name: text('name'),
	nameSpace: text('nameSpace'),
});

export const langChainDocRelations = relations(langChainDocs, ({ many }) => ({
	docs: many(docs),
}));

export const docs = pgTable('Docs', {
	id: varchar('id').primaryKey(),
	createdAt: text('createdAt'),
	metadata: text('metadata'),
	pageContent: text('pageContent'),
	name: text('name'),
	langChainDocsId: text('langChainDocsId'),
});

export const docsRelations = relations(docs, ({ one }) => ({
	langChainDocs: one(langChainDocs, {
		fields: [docs.langChainDocsId],
		references: [langChainDocs.id],
	}),
}));

