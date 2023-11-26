import { createClient } from "@supabase/supabase-js";
import { log } from "console";
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


const generateUniqueId = () => {
	return uuidv4();
};

async function pdfFileUpload_supa(file: File, path: string, id: string) {
	if (file.size === 0) {
		console.error('No file selected');
		return;
	}
	const seed = uuidv4();
	const { data, error } = await supabase
		.storage
		.from('puplic')
		.upload(`id + "/" + seed`, file, {
			cacheControl: '3600',
			upsert: false
		});
	return true;
}



export const uploadFiles = (files: File[], id: string, type: string) => {
	const filePromises = files.map(async (file) => {
		const seed = uuidv4();
		const { data, error } = await supabase.storage
			.from('public') // Replace with your actual storage bucket name
			.upload(id + "/" + seed, file);

		if (error) {
			console.error('Error uploading file:', error.message);
		}
		if (!data) { console.log("error uploading in supabase"); return; }


		return data
	});
}


async function getFiles(id: string, type: string) {
	const { data, error } = await supabase.storage.from(type).list(id + "/", {
		limit: 100,
		offset: 0,
		sortBy: { column: "name", order: "asc" }
	});

	if (data !== null) {

	}
	return data;

}

async function getEmbedingSearch(data: string) {
	const { data: documents } = await supabase.rpc("match_documents", {
		query_embeding: data,
		match_threshold: 0.5,
		match_count: 10
	})

}
