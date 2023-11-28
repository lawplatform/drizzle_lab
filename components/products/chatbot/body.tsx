"use client"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import F_message from "@/src/ui/form/F_message"
import { MessageCircle, Monitor, User } from "lucide-react"
import { useChat } from 'ai/react';
import { useEffect, useRef } from "react"

export function Chatbot_button() {
	return (
		<Button variant="outline" className="h-20 w-20 rounded-xl"> <MessageCircle className="h-10 w-10" /> </Button>
	)
}

export function Chatbot_Message({ sender, msg }: { sender: string, msg: string }) {

	return (
		<div className="my-4 flex flex-1 gap-3 text-sm text-gray-600"><span
			className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
			<div className="rounded-full border bg-gray-100 p-1">

				{sender == "AI" ? (<Monitor />) : (<User />)}
			</div>
		</span>
			<p className="leading-relaxed"><span className="block font-bold text-gray-700">{sender} </span>
				{msg}
			</p>
		</div>)
}
interface Message {
	key: string;
	role: string;
	content: string;
}
export default function Chatbot_Body() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({ api: "/api/chat/ai" });
	const scrollAreaRef = useRef(null);
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
						{messages.map((m: any) => (
							<div key={m.id}>
								<Chatbot_Message sender={m.role === 'user' ? 'User' : 'AI'} msg={m.content} />
							</div>
						))}
					</div>
				</div>

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
		</div >
	)
}
