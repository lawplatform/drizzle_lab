import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from 'uuid'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey, {
	db: {
		schema: "public",
	},
	auth: {
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	},
	global: {},
});

export default supabase;




