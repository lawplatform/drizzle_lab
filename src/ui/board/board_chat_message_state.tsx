import { getSeoulTimeformDate, getTime } from "@/lib/times";
import supabase from "@/src/provider/supabase";
import { useEffect, useState } from "react";
import { observable, unwarp } from "@legendapp/state";
import { For, Show, useObservable, Reactive } from "@legendapp/state/react";
import { Database } from "@/types/supabase";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import React from "react";

enableReactTracking({
	auto: true,
});

type msg = Database['public']['Tables']['real']['Row'];

export function Chat_messages({ msg, isMe }: { msg: string; isMe: boolean }) {
	const justifyClass = isMe ? 'justify-end' : 'justify-start';

	return (
		<div className={`${justifyClass} flex items-end mt-2`}>
			<div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
				<div>
					<span className="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white">{msg}</span>
				</div>
			</div>
		</div>
	);
}


export default function Board_chat_message() {
	const messages = useState({ msgs: [] as msg[] });
	const me = "kim";
	const lastmsg = observable("");
	const prev = observable("");

	const handleInserts = (payload: any) => {
		payload.new.name = "힘쎄";
		payload.new.created_at = getTime(payload.new.created_at);
	}
	useEffect(() => {
		const subscription = supabase
			.channel('real')
			.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'real' }, handleInserts)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, []);

	return (
		<div className="h-60 overflow-auto bg-green-50 scrollbar-hide">

		</div>
	)
}
