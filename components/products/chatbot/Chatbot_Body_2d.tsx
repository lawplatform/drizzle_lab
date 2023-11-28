"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from 'ai/react';
import { Chatbot_Message, Chatbot_input_message } from "./body";
import { useEffect, useRef } from "react";
import { BlurFilter, Graphics, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';





export default function Chatbot_Body_2d() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	const scrollAreaRef = useRef(null);

	useEffect(() => {
		const bubble = new Graphics();
		const textStyle = new TextStyle({
			wordWrap: true,
			wordWrapWidth: 300,
			// Add your other text styles here
		});



	})




	useEffect(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current!.scrollTop = scrollAreaRef.current!.scrollHeight;
		}
	}, [messages]);
	return (
		<div className="w-full ">

			<div className="h-full w-full pr-4">
				<div className="h-full">
					<Stage>
						<Sprite
							image="https://pixijs.io/pixi-react/img/bunny.png"
							x={250}
							y={250}
							anchor={{ x: 0.5, y: 0.5 }}
						/>

						<Container x={400} y={330}>
							<Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }}></Text>
						</Container>
					</Stage>
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
		</div>
	);
}

