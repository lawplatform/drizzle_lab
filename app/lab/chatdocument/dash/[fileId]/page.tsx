"use client"
import { uuidSchema } from "@/lib/validator/validator";
import { trpc } from "@/server/trpc/client";
import { useRouter } from 'next/navigation'

//set private room page 
export default function Page({ params }: { params: { fileId: string } }) {
	const router = useRouter();
	try {
		const uuid = uuidSchema.parse(params.fileId);
		const { data: files } = trpc.getFile.useQuery({ id: params.fileId });

		if (files?.length == 0) {
			//file not found
			router.push("/lab/chatdocument/dash");
		}

		return (
			<div>
				{files && files.map((file) => <h1>{file.name}</h1>)}
				<h1>get! their own Id </h1>
			</div>
		);

	} catch (error) {
		console.log("na");
		router.push("/lab/chatdocument/dash");

	}




}
