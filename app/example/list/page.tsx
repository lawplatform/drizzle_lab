import { trpc } from "@/server/trpc/client";

export default function Home() {
	const addTodo = trpc.addTodo.useMutation({
		onSettled: () => {
			getTodo.refetch()
		}
	})
	return (
		<div>{JSON.stringify(getTodo.data)}</div>
	)

}
