"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Mail, User2, Lock } from "lucide-react"



const formSchema = z.object({
	email: z.string().email().min(1, {
		message: "이메일을 입력해 주세요",
	}),
	password: z.string().min(1, {
		message: "비밀번호를 입력해주세요",
	}),
})


export function F_signin_credential({ className, ...props }: UserAuthFormProps) {
	const router = useRouter()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: "",
			email: "",
		},
	})


	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);

		const res = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false,
		});


		if (res && res.status === 401) {
			console.log(res);

			alert('아이디 혹은 비밀번호가 일치하지 않습니다!');
			router.refresh();
		} else {
			router.push('/');
		}
	}

	function areAllFieldsFilled() {
		const values = form.getValues();
		return Object.values(values).every((value) => !!value);
	};


	return (
		<div className="mx_auto w-full ">
			<Form {...form} >

				<form className="bg-grey-lightest w-full pt-4" onSubmit={form.handleSubmit(onSubmit)}>
					<div className="container mx-auto py-8">
						<div className="mx-auto  rounded bg-white shadow ">
							<div className="border-grey-lighter border-b px-8 py-4 text-xl text-black">회원가입</div>
							<div className="px-8 py-4">

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<div className="mt-4 flex flex-row">
												<Mail className="w-5" />
												<FormLabel className="text-grey-darker mx-2  mb-2 block pt-1 text-sm font-bold">이메일</FormLabel>
											</div>
											<FormControl>
												<Input placeholder="이메일" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<div className="mt-4 flex flex-row items-start">
												<Lock className="w-5" />
												<FormLabel className="text-grey-darker mx-2 block pt-1 text-sm font-bold">비밀번호</FormLabel>
											</div>
											<FormControl>
												<Input placeholder="비밀번호" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="mt-8 flex items-center justify-between">
									<Button type="submit" className="w-full" disabled={!areAllFieldsFilled()}>가입하기</Button>
								</div>
							</div>
						</div>

						<div className="relative mt-3">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									SNS 로그인
								</span>
							</div>
						</div>

					</div>
				</form>
			</Form>

		</div>
	)
}
