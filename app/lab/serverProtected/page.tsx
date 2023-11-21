import { authOptions } from "@/server/auth/authOption";
import { getServerSession } from "next-auth"

export default function Home() {
	const session = await getServerSession(authOptions)
	if (!session) {
		console.log("no sssion y");

	}
	return (
		<div> this page protected by server</div>
	)
}
