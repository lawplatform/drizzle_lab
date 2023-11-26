import { generateReactHelpers } from "@uploadthing/react/hooks";
import { OurFileRouter } from ".";

export const { useUploadThing } = generateReactHelpers<OurFileRouter>()
