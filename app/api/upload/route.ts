import { useUploadThing } from "@/server/uploadthings/client";
import { NextResponse } from "next/server";

export async function GET() {
	const { startUpload } = useUploadThing('pdfUploader');
	const blobData = ['Hello, this is the content of the file.'];
	const blob = new Blob(blobData, { type: 'text/plain' });
	const fileName = 'newFile.txt';
	const newFile = new File([blob], fileName, { type: 'text/plain' });
	startUpload([newFile]);
	console.log(newFile);



	return NextResponse.json({ "newFile": newFile.name })


}

export function POST({ request, ...props }) {
	// Handle POST requests
	return new Response('Hello World!');
}


