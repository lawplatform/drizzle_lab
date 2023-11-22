"use client"

import { trpc } from "@/server/trpc/client"

export default function Home() {
	const { data: todo } = trpc.getOwnFiles.useQuery();
	return (
		<div>{todo && todo.map(todo => <h1>{todo.name}</h1>)}</div>
	)
}
