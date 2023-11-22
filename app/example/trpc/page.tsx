"use client"
import { trpc } from "@/server/trpc/client";
//try to get data theri own session id
export default function Home() {
	const { data: files } = trpc.getOwnFiles.useQuery();
	return (

		<div>
			{files && files.map(file => <h1>{file.name}</h1>)}
			<h1>get! their own Id </h1>
		</div>

	)

}
