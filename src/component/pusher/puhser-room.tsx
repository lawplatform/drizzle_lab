// get existing messages from db and fetch 
// get {text , id } from messages using map and save initilaMsg
// send message to <messages roomId, intiialMsg
//
import MessagesBox from './pusher-messages'
import MessageInput from './pusher-messageInput'

interface PageProps {
	params: {
		roomId: string
	}
}

type message = {
	text: string
	id: string
}

const page = async ({ params }: PageProps) => {
	const { roomId } = params
	//const existingMessages = await db.message.findMany({})
	const existingMessages = [{ text: "he,", id: "kim" }];

	const serializedMessages = existingMessages.map((message: message) => ({
		text: message.text,
		id: message.id,
	}))

	return (
		<div>
			<p>messages:</p>
			<MessagesBox roomId={roomId} initialMessages={serializedMessages} />
			<MessageInput roomId={roomId} />
		</div>
	)
}

export default page
