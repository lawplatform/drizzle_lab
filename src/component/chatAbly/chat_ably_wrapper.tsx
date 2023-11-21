import Head from 'next/head';
import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('./chat'), {
	ssr: false,
})


export default function Ably_chat() {
	return (
		<div>Ably_chat
			<Chat />
		</div>
	)
}
