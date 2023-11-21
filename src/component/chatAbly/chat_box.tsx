import React, { useEffect, useState } from 'react';
import { useChannel } from "ably/react";

interface MessageType {
	text: string;
}


export default function name() {
	let inputBox = null;
	let messageEnd = null;

	const [messageText, setMessageText] = useState("");
	const [receivedMessages, setMessages] = useState<MessageType[]>([]);
	const messageTextIsEmpty = messageText.trim().length === 0;

	const { channel, ably } = useChannel("chat-demo", (message) => {
		const history = receivedMessages.slice(-199);
		setMessages([...history, message]);
	});

	const sendChatMessage = (messageText) => {
		channel.publish({ name: "chat-message", data: messageText });
		setMessageText("");
		inputBox.focus();
	}

	const handleFormSubmission = (event) => {
		event.preventDefault();
		sendChatMessage(messageText);
	}
	const messages = receivedMessages.map((message, index) => {
		const author = message.connectionId === ably.connection.id ? "me" : "other";
		return <span key={index} className={styles.message} data-author={author}>{message.data}</span>;
	});

	return (
		<div>name</div>
	)
}
