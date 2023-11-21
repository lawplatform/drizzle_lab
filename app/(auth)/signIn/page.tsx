
import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/src/ui/icons"
import { F_signin_email } from "@/src/ui/form/F_sigin_email"
import { F_signin_credential } from "@/src/ui/form/F_signin_credential"

export const metadata: Metadata = {
	title: "Login",
	description: "Login to your account",
}

export default function Home() {
	return (
		<div className=" flex h-screen w-full flex-col items-start justify-center">

			<div className="mx-auto mb-56 flex w-full   flex-col space-y-6 sm:w-[350px]">
				<div className=" flex flex-col space-y-2 text-center">
					<Icons.logo className="mx-auto h-6 w-6" />
					<h1 className="text-2xl font-semibold tracking-tight">
						환영합니다
					</h1>
					<p className="text-sm text-muted-foreground">
						아이디와 비번을 통해 로그인하기.
					</p>
				</div>
				<F_signin_credential />
				<p className="px-8 text-center text-sm text-muted-foreground">
					<Link
						href="/register"
						className="hover:text-brand underline underline-offset-4"
					>
						회원이 아니신가요? 회원가입
					</Link>
				</p>
			</div>
		</div >
	)
}
