"use client"
import { trpc } from "@/server/trpc/client";

export default function Page() {
	const files = trpc.getTodos.useQuery();
	return (
		<main className="mx-auto max-w-6xl md:p-10">
			{JSON.stringify(files)}
		</main>
	)
}
