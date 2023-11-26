ALTER TABLE "chats" RENAME TO "ai_chats";--> statement-breakpoint
ALTER TABLE "ai_messages" DROP CONSTRAINT "ai_messages_chat_id_chats_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ai_messages" ADD CONSTRAINT "ai_messages_chat_id_ai_chats_id_fk" FOREIGN KEY ("chat_id") REFERENCES "ai_chats"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
