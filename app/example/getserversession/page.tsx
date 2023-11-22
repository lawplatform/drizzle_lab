import { authOptions } from "@/server/auth/authOption"
import { getServerSession } from "next-auth/next"
//how to get id from serversession
export default async function Page() {
	const session = await getServerSession(authOptions);
	const id = JSON.parse(JSON.stringify(session, null, 2));

	return (
		<div>
			ars
			<pre>{id.user.id}</pre>

		</div>

	)
}
