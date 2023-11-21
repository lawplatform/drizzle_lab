import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
	db: {
		schema: "public",
	},
	auth: {
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	},
	global: {
	},
});

export default supabase;
