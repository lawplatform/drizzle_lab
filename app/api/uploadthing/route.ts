import { ourFileRouter } from "@/server/uploadthings";
import { createNextRouteHandler } from "uploadthing/next";


export const { GET, POST } = createNextRouteHandler({
	router: ourFileRouter,
});
