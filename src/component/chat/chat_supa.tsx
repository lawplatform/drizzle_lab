import supabase from "@/server/supabase";
import { useEffect, useRef, useState } from "react";
const message = [
	{ id: 1, content: 'hello', profile_id: 1 },
	{ id: 2, content: 'hi', profile_id: 2 },
]
const userID = 3;

type Msg = {
	id: string
	created_at: string
	content: string
	profile_id: string
	profile: {
		username: string
	}
}
async function Messages() {
	const [messages, setMessages] = useState<Msg[]>([])
	const messageRef = useRef<HTMLDivElement>(null);
	const getData = async () => {
		const { data, error } = await supabase.from<Msg>('messages').select('* , profile:profiles(username)')
		if (!data) {
			return
		} else {
			setMessages(data)
			if (messageRef.current) {//when new message it scroll top
				messageRef.current.scrollTop = messageRef.current.scrollHeight
			}

		}

	}
	useEffect(() => {
		getData()
	}, [])


	useEffect(() => {
		const subscription = supabase.from<Message>('messages').on('INSERT', () => {
			getData()
		}).subscribe()
	})



	const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const { message } = Object.fromEntries(new FormData(form))
		if (typeof message === 'string' && message.trim().length !== 0) {
			form.reset()
			const { error } = await supabase.from('messages').insert({
				content: message,
			})

			if (error) {
				//messageshow
			}
		}
	}

	return (
		<div>
			<div ref={messageRef}>
				{message.map((message) => (

					<li key={message.id}
						className={message.profile_id === userID
							? 'rouded self-end bg-blue-400 px-2'
							: 'selp-start rounded bg-gray-400'}>

					</li>
				))}
			</div>
		</div>
	)
}
