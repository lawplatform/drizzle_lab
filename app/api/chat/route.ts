import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY || "";
export const runtime = 'edge'



export async function POST(request: Request) {
	const { messages } = await request.json();
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
	});
	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [
			{ role: "system", content: "You are a helpful assistant" }

			, ...messages],
		stream: true,
	});
	const stream = OpenAIStream(response);

	return new StreamingTextResponse(stream);

}
