"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import supabase from "@/src/provider/supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, User2, Lock, File } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
	name: z.string().min(1, {
		message: "이름은 필수 입니다",
	}),
	email: z.string().email({
		message: "잘못된 이메일 형식입니다",
	}),
	msg: z.string().min(1, {
		message: "내용을 입력해주세요"
	}),
	title: z.string().min(1, {
		message: "내용을 입력해주세요"
	})
});

export default function F_contact() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "", email: "", msg: "", title: ""
		},
	})

	function areAllFieldsFilled() {
		const values = form.getValues();
		return Object.values(values).every((value) => !!value);
	};


	async function onSubmit(values: z.infer<typeof formSchema>) {
		fetch('/api/user/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Server response:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		form.reset();
	}


	const searchParams = useSearchParams()
	const search = searchParams.get('email')


	useEffect(() => {
		form.setValue('email', search!);

	}, [])



	return (
		<div className=" font-sans antialiased">
			<Form {...form} >
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className=" mx-auto py-8">
						<div className="mx-auto w-full rounded bg-white shadow">
							<div className="px-8 py-4 ">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<div className="flex flex-row ">
												<User2 className="w-5" />
												<FormLabel className="text-grey-darker mx-2  mb-2 block pt-1 text-sm font-bold">이름</FormLabel>
											</div>
											<FormControl>
												<Input placeholder="닉네임" {...field}
												/>

											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
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
									name="title"
									render={({ field }) => (
										<FormItem>
											<div className="mt-4 flex flex-row items-start">
												<Lock className="w-5" />
												<FormLabel className="text-grey-darker mx-2 block pt-1 text-sm font-bold">제목</FormLabel>
											</div>
											<FormControl>
												<Input placeholder="제목" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="msg"
									render={({ field }) => (
										<FormItem>
											<div className="mt-4 flex flex-row items-start">
												<File className="w-5" />
												<FormLabel className="text-grey-darker mx-2 block pt-1 text-sm font-bold">제목</FormLabel>
											</div>
											<FormControl>
												<Textarea placeholder="내용을 입력하세요 "  {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="mt-8 flex items-center justify-between">
									<Button type="submit" className="w-full" disabled={!areAllFieldsFilled()}>문의하기</Button>
								</div>
							</div>
						</div>

					</div>
				</form>
			</Form>
		</div >
	)
}
