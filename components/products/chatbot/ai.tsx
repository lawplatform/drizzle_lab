import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai';





const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey, {
	db: {
		schema: "ai",
	},
	auth: {
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true,
	},
	global: {},
});

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});



const chatCompletion = await openai.chat.completions.create({
	model: "gpt-3.5-turbo",
	messages: [{ "role": "user", "content": "Hello!" }],
});





async function generateEmbeddings() {


	//const documents = await getDocuments() // Your custom function to load docs

	// Assuming each document is a string
	//for (const document of documents) {
	// OpenAI recommends replacing newlines with spaces for best results
	//const input = document.replace(/\n/g, ' ')

	//const embeddingResponse = await openai.createEmbedding({
	//		model: 'text-embedding-ada-002',
	//	input,
	//	})



	//const [{ embedding }] = embeddingResponse.data.data

	// In production we should handle possible errors
	//	await supabaseClient.from('documents').insert({
	//	content: document,
	//embedding,
	//	})
}
}

