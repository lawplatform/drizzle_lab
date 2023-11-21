import { supabase } from "../provider/supabase"

export default async function GetDataFromSupabase() {
	const { data: msg } = await supabase.from('msg').select('*')
	return (
		<div>{JSON.stringify(msg)} </div>
	)
}
