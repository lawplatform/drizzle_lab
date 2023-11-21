CREATE SCHEMA "user";
--> statement-breakpoint
DROP TABLE "Docs";--> statement-breakpoint
DROP TABLE "LangChainDocs";--> statement-breakpoint
ALTER TABLE "session" SET SCHEMA "user";
--> statement-breakpoint
ALTER TABLE "user" SET SCHEMA "user";
--> statement-breakpoint
ALTER TABLE "verificationToken" SET SCHEMA "user";
--> statement-breakpoint
ALTER TABLE "account" SET SCHEMA "user";
