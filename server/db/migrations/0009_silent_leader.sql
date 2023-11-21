ALTER TABLE "account" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "session" RENAME COLUMN "user_id" TO "useId";--> statement-breakpoint
ALTER TABLE "stripe" RENAME COLUMN "user_id" TO "userId";--> statement-breakpoint
ALTER TABLE "account" DROP CONSTRAINT "account_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "session" DROP CONSTRAINT "session_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "stripe" DROP CONSTRAINT "stripe_user_id_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_useId_user_id_fk" FOREIGN KEY ("useId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stripe" ADD CONSTRAINT "stripe_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
