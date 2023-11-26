import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!process.env.NEON_DATABASE_URL) {
	throw new Error("NEON DATABASE_URL is missing");
}

if (!process.env.SUPA_DATABASE_URL) {
	throw new Error("SUPA DATABASE_URL is missing");
}

export default {
	schema: ["./server/db/schema/index.ts"],
	out: "./server/db/migrations",
	driver: "pg",
	verbose: true,
	dbCredentials: {
		connectionString: process.env.NEON_DATABASE_URL,
	},
} satisfies Config;
