import { useState } from "react"

export default function Chat_gpt() {
	const [typing, setTyping] = useState(false);
	const [messages, setMessages] = useState([
		{
			message: "hi",
			sender: "arst",
		},
	]);

	const handleChatmessage = async () => {
		const newMessage = {
			message: "new message",
			sender: "user",
		};

		const newMessages = [...messages, newMessage];
		setMessages(newMessages);
		setTyping(true);
	};

	return (
		<div>
			<div>
				{messages.map((msg, index) => (
					<div key={index}>
						<strong>{msg.sender}: </strong>
						{msg.message}
					</div>
				))}
			</div>
			<button onClick={handleChatmessage}>Send Message</button>
		</div>
	);
}
