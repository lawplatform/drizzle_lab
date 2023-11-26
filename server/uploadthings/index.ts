import { authOptions } from "@/server/auth/authOption";
import { getServerSession } from "next-auth/next";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { db } from "../db";
import { Newfile, file as F } from "../db/schema/file";
import { useSession } from "next-auth/react";
import { z } from "zod";


const f = createUploadthing();
export const ourFileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	pdfUploader: f({ pdf: { maxFileSize: "4MB" } }).middleware(async ({ req, input }) => {
		const session = await getServerSession(authOptions);
		const id = session!.user.id
		if (!id) { throw new Error("UNAUTHORIZED : ID not found"); }

		return { userId: id };
	}).onUploadComplete(async ({ metadata, file }) => {

		const createdFile = await db.insert(F).values({
			key: file.key,
			name: file.name,
			userId: metadata.userId,
			url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
			uploadStatus: 'PROCESSING'
		})

		console.log("Upload complete for userId:", metadata.userId);

		console.log("file url", file.url);

		// !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
		return { uploadedBy: metadata.userId };
	}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
