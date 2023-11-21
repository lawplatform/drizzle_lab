import { trpc } from "@/server/trpc/client";

export default function Home() {
	const addTodo = trpc.addTodo.useMutation({
		onSettled: () => {
		}
	})
	return (
		<div>{JSON.stringify(addTodo.data)}</div>
	)

}
