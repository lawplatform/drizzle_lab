import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal, Smile } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
	msg: z.string().min(1, { message: "메시지를 입력해주세요" }),
});


interface F_messageProps {
	send: (values: z.infer<typeof formSchema>) => void
}
export default function F_message({ send }: F_messageProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			msg: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		send(values);
		form.reset();
	}
	function Hi() {
		console.log("hi");
	}
	return (
		<div className="bg-grey-lightest w-full font-sans antialiased">
			<Form {...form}>
				<form className="w-full " onSubmit={form.handleSubmit(onSubmit)}>
					<div className=" mx-auto py-2">
						<div className="mx-auto  w-full  rounded shadow lg:w-2/3">
							<div className="flex flex-row">
								<div className="mx-auto w-full py-2 pl-2">
									<FormField
										control={form.control}
										name="msg"
										render={({ field }) => (
											<FormItem >
												<FormMessage />
												<div className="jusitfy-center mx-auto flex w-full flex-row items-center ">
													<FormControl >
														<Input placeholder="메시지" {...field} className="w-full " />
													</FormControl>
													<div className="relative bottom-3 h-0 w-0">
														<Smile className="absolute right-2" />
													</div>
													<div className="mr-2">

														<Button type="submit" className="w-20">
															<SendHorizontal />
														</Button>
													</div>
												</div>

											</FormItem>
										)}
									/>
								</div>
							</div>
						</div>
						<p className="my-4 text-center">
							<a
								href="#"
								className="text-grey-dark hover:text-grey-darker text-sm no-underline"
							>
								footer 추가 메시지
							</a>
						</p>
					</div>
				</form>
			</Form>
		</div>
	)
}
