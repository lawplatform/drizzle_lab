import OpenAI from "openai";
import { oneLine, stripIndent } from 'common-tags';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});


async function findSeacrh(input: string) {
	if (input && input.trim()) {

	}
}

async function generateEmbeding(document: string) {
	try {
		const input = document.replace(/\n/g, ' ');
		const result = await openai.embeddings.create({
			model: "text-embedding-ada-002",
			input
		});
		const embedding = result.data[0].embedding
		const token = result.usage.total_tokens;

		return { embedding, token }
	} catch {
		console.log("erro white embedding")
	}
}

async function generateEmbedings(documents: string[]) {
	//const documents = ["a is man", "b is apple"];

	for (const document of documents) {
		const input = document.replace(/\n/g, ' ')
		const embeddingRespones = await openai.embeddings.create({
			model: "text-embedding-ada-002",
			input
		});
		const [{ embedding }] = embeddingRespones.data;

	}

	const token = embeddingRespones

}

function generatePrompt(contextText: string, searchText: string, query: string) {
	const prompt = stripIndent`${oneLine`
    You are a very enthusiastic Supabase representative who loves
    to help people! Given the following sections from the Supabase
    documentation, answer the question using only that information,
    outputted in markdown format. If you are unsure and the answer
    is not explicitly written in the documentation, say
    "Sorry, I don't know how to help with that."`}

    Context sections:
    ${contextText}

    Question: """
    ${query}
    """

    Answer as markdown (including related code snippets if available):
  `

	const completionResponse = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 512, // Choose the max allowed tokens in completion
		temperature: 0, // Set to 0 for deterministic results
	})

}
