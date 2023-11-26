"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Ex_Dropzone from "@/src/example/ex_dropzone";
import FileDrop from "@/src/component/filedrop";
import F_Dropzone from "@/src/ui/form/F_dropzone";
export default function Home() {
	const { data: session, status } = useSession();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<F_Dropzone className={"px-1"} />

			<Button onClick={() => signIn()}> singin.</Button>
			<Button onClick={() => signOut()}> singOut</Button>

			{session?.user ? (
				<>
					<img
						className="h-8 w-8 rounded-full"
						src={session.user.image || ""}
					/>
					<p className="text-sky-600"> {session.user.email}</p>
					<p> token:{session.supabaseAccessToken}</p>
					<p>{session.user.id}</p>
					<p>{session.user.name}</p>
					<p>{session.user.id}</p>
				</>
			) : (
				<div> you shold login this stage!</div>
			)}
		</main>
	);
}
