ALTER TABLE "user"."account" SET SCHEMA public;
--> statement-breakpoint
ALTER TABLE "user"."session" SET SCHEMA public;
--> statement-breakpoint
ALTER TABLE "user"."user" SET SCHEMA public;
--> statement-breakpoint
ALTER TABLE "user"."verificationToken" SET SCHEMA public;
--> statement-breakpoint
DROP SCHEMA "user";
