'use client'

import { FC } from 'react'

interface MessageFieldProps {
	roomId: string
}

const MessageInput: FC<MessageFieldProps> = ({ roomId }) => {
	let input = ''

	const sendMessage = async (text: string) => {
		//await axios.post('/api/message', { text, roomId }) ..fetch to db 
		//when send data also fire pusher 
		//pusherServer.trigger(roomId, 'incoming-message', text)...
	}

	return (
		<div className='flex gap-2'>
			type a new message:
			<input
				onChange={({ target }) => (input = target.value)}
				className='border border-zinc-300'
				type='text'
			/>
			<button onClick={() => sendMessage(input || '')}>send</button>
		</div>
	)
}

export default MessageInput
