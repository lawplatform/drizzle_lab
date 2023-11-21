"use client";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Check_Login() {

	const { data: session, status } = useSession();
	return (
		<div>
			{
				session?.user ? (
					<div>
						{session.user.email}
						<Button onClick={() => signOut()}>log Out</Button>
					</div>
				) : (<div></div>)
			}
		</div>
	)
}
