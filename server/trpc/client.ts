import { createTRPCReact } from "@trpc/react-query"
import { AppRouter } from "./route"


export const trpc = createTRPCReact<AppRouter>({})
