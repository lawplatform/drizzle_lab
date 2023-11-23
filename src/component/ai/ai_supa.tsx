import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY || "";
const supabase_ai = createClient(supabaseUrl, supabaseKey, {
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

export default supabase_ai;




//simple chat 
async function chatCompletion() {
	const completion = await openai.chat.completions.create({
		messages: [{ role: "system", content: "You are a helpful assistant." }],
		model: "gpt-3.5-turbo",
	});

	console.log(completion.choices[0]);
}


async function generateEmbedings() {
	const documents = ["a is man", "b is apple"];

	for (const document of documents) {
		const input = document.replace(/\n/g, ' ')
		const embeddingRespones = await openai.embeddings.create({
			model: "text-embedding-ada-002",
			input
		});
		const [{ embedding }] = embeddingRespones.data;
		await supabase_ai.from('documents').insert({
			content: document,
			embedding
		})
	}
}

async function sendToGpt(msg: [{ sender: string, message: string }]) {
	let apiMsgs = msg.map((msg) => {
		let role = "";
		if (msg.sender === "user") {
			role = "assistant";
		} else {
			role = "user";
		}
		return { role: role, content: msg.message }

	});
	const systemMessage = {
		role: "system",
		content: "미술관 안내원 처럼 셜명해"
	}

	const apiRequestBody = {
		"model": "gpt-3.5-turbo",
		"messages": [...apiMsgs]
	}
	await fetch("https//api.openai.com/v1/chat/completions", {
		method: "POST",
		headers: {
			"Authorization": "Bearer " + process.env.OPENAI_API_KEY,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(apiRequestBody)
	}).then((data) => {
		//data.choices[0].message.content
		//setmesegs([...old,{message:data.choices[0].message.content,sender:"ai"}])
	});
}
