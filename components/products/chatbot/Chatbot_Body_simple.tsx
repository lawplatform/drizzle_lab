"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat, Message } from 'ai/react';
import { Chatbot_Message, Chatbot_input_message } from "./body";
import { useEffect, useRef } from "react";

export default function Chatbot_Body_Simple() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	const scrollAreaRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current!.scrollTop = scrollAreaRef.current!.scrollHeight;
		}
	}, [messages]);
	return (
		<div className="w-full ">

			<div className="h-full w-full pr-4">
				<div className="h-full">
					<div className="h-72 w-full overflow-scroll scrollbar-hide " ref={scrollAreaRef}>

						{messages.map((message: Message) => {
							return (
								<div key={message.id}>
									{/*  Name of person talking */}
									{
										message.role === "assistant"
											?
											<h3 className="mt-2 text-lg font-semibold">
												GPT-4
											</h3>
											:
											<h3 className="mt-2 text-lg font-semibold">
												User
											</h3>
									}

									{message.content.split("\n").map((currentTextBlock: string, index: number) => {
										if (currentTextBlock === "") {
											return <p key={message.id + index}>&nbsp;</p> // " "
										} else {
											return <p key={message.id + index}>{currentTextBlock}</p> // "Cooper Codes is a YouTuber"
										}
									})}

								</div>
							)
						})}
						<div className="mx-auto flex w-full items-center px-1 ">
							<form className="flex w-full flex-row items-center justify-center space-x-2" onSubmit={handleSubmit}>
								<input
									className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm text-[#030712] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="하고싶은 말을 입력하세요" value={input} onChange={handleInputChange} />
								<button type="submit"
									className="mx-auto flex h-10 w-32 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-[#f9fafb] hover:bg-[#111827E6] disabled:pointer-events-none disabled:opacity-50">
									보내기</button>
							</form>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}




const way = {/*
	{messages.map((m: Message) => {
							return (
								<div key={m.id}>
									{
										m.content.split("\n").map((currentTextBlock: string, index: number) => {
											if (currentTextBlock === "") {
												return < Chatbot_Message sender={m.role === 'user' ? 'User' : 'AI'} msg={""} />
											} else {
												return < Chatbot_Message sender={m.role === 'user' ? 'User' : 'AI'} msg={m.content} />
											}
										})
									}
								</div>
							)
						})}

					*/	}
