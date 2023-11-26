import { drizzle as drizzle_supa } from 'drizzle-orm/postgres-js';
import { drizzle as drizzle_neon } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from './schema';
dotenv.config({ path: '.env.local' });


neonConfig.fetchConnectionCache = true;

if (!process.env.NEON_DATABASE_URL) {
	throw new Error("database url not found");
}

const sql = neon(process.env.NEON_DATABASE_URL);



//supabase
if (!process.env.SUPA_DATABASE_URL) {
	console.log('no database URL');
}
//const supa_client = postgres(process.env.SUPA_DATABASE_URL as string, { max: 1, prepare: false });
const neon_client = neon(process.env.NEON_DATABASE_URL || "")


//export const db = drizzle_supa(supa_client,{schema});
export const db = drizzle_neon(neon_client, { schema });

