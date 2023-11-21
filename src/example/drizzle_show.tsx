import { db } from "@/server/db/drizzle";
import { users } from "@/server/db/schema/users";

export default async function Play_drizzle() {
	const allUsers = await db.select().from(users);

	return (
		<div>arst</div>
	)
}
