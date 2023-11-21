import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import { getServerSession } from "next-auth";

async function initSupabase() {
	try {
		// Get the server session
		const session = await getServerSession();

		// Check if the session exists and has an access token
		if (session && session.supabaseAccessToken) {
			// Extract the access token and email from the session
			const { supabaseAccessToken, email } = session;

			// Initialize Supabase client with the access token and email
			const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
			const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "";

			const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
				//@ts-ignore
				headers: {
					Authorization: `Bearer ${supabaseAccessToken}`,
				},
			});

			return supabase;
		} else {
			throw new Error("Session or access token not found");
		}
	} catch (error) {
		console.error("Error initializing Supabase:", error);
		throw error;
	}
}

export default initSupabase;
