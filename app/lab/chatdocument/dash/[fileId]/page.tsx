"use client"
import { uuidSchema } from "@/lib/validator/validator";
import { trpc } from "@/server/trpc/client";
import { useRouter } from 'next/navigation'

//set private room page 
export default function Page({ params }: { params: { fileId: string } }) {

	return (
		<div className='flex h-[calc(100vh-3.5rem)] flex-1 flex-col justify-between'>
			<div className='max-w-8xl mx-auto w-full grow lg:flex xl:px-2'>
				{/* Left sidebar & main wrapper */}
				<div className='flex-1 xl:flex'>
					<div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
						{/* Main area */}
						pdf
					</div>
				</div>

				<div className='flex-[0.75] shrink-0 border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0'>
					chat
				</div>
			</div>
		</div>

	)
}
/*
	const router = useRouter();
	try {
	
		const uuid = uuidSchema.parse(params.fileId);
		const { data: files } = trpc.getOwnFilebyId.useQuery({ id: params.fileId });
		if (files?.length == 0) {
			//file not found
			router.push("/lab/chatdocument/dash"); //or notfound();
		}
	    
		return (
			<div>
				{files && files.map((file) => <h1>{file.name}</h1>)}
				<h1>get! their own Id </h1> //input main section ! 
			</div>
		);
	
	} catch (error) {
		console.log("na");
		router.push("/lab/chatdocument/dash");
	
	}
	
	
*/

