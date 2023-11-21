"use client"

import { useSession } from "next-auth/react";

export default function Home() {
	const { data: session, update } = useSession();


	return (
		<div>this page is secured


		</div>
	)
}
