"use client";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	email: z.string().email({
		message: "잘못된 이메일 형식입니다",
	}),
});

export default function F_subscribe() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});
	function areAllFieldsFilled() {
		const values = form.getValues();
		return Object.values(values).every((value) => !!value);
	}

	async function onSubmit(values: z.infer<typeof formSchema>) {
		fetch("/api/subscribe/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Server response:", data);
				// Handle the response data here
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle errors here
			});
		form.reset();
	}

	return (
		<section className="bg-blue-500 py-20">
			<div className="container">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="font-heading mb-4 text-3xl font-bold text-white lg:text-3xl">
						<span> 지금 바로 </span>
						<span className="text-blue-200">구독하기</span> <br />
					</h2>
					<p className="mb-8 text-white">유용한 정보를 보내드립니다 </p>
					<Form {...form}>
						<form
							className=" flex w-full flex-wrap justify-center"
							onSubmit={form.handleSubmit(onSubmit)}
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<div className="mx-auto flex w-full  justify-center text-center">
											<div className=" mb-2 flex  rounded border border-blue-300 bg-blue-500 px-3 md:mb-0 md:mr-6 md:w-2/3">
												<svg
													className=" my-auto h-6 w-6 text-blue-300"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
													<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
												</svg>

												<FormControl>
													<input
														className=" mx-auto bg-blue-500 py-4 pl-3 text-xs font-semibold leading-none text-white placeholder-white outline-none"
														type="text"
														placeholder="이메일을 입력하시오"
													/>
												</FormControl>
											</div>
											<FormMessage />
										</div>
									</FormItem>
								)}
							/>
							<button
								className="mx-auto mt-3 w-full rounded border border-blue-300 bg-white px-8 py-4 text-xs font-semibold leading-none text-blue-800 transition duration-300 ease-in-out hover:border-blue-300 hover:bg-blue-500 hover:text-white md:w-auto"
								type="submit"
							>
								등록하기
							</button>
						</form>
					</Form>
				</div>
			</div>
		</section>
	);
}
