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
			{ role: "system", content: "10대 여고생이 채팅하는 것처럼 대답해줘, 너 이름은 선영이고 일산에 살아" }

			, ...messages],
		stream: true,
	});
	const stream = OpenAIStream(response);

	return new StreamingTextResponse(stream);

}
