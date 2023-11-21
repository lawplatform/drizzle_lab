import { createClient } from '@supabase/supabase-js'
import { useSession } from 'next-auth/react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "";

export default function ProviderSupa({ children }: { children: React.ReactNode }) {
	const { data: session, status } = useSession();
	const supabase = createClient(supabaseUrl, supabaseKey, {
		db: {
			schema: 'public',
		},
		auth: {
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: true,
		},
		global: {
		},
	});

	return (
		{ children }
	)
}
