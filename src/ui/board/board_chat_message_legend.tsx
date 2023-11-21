import { getSeoulTimeformDate, getTime } from "@/lib/times";
import supabase from "@/src/provider/supabase";
import { useEffect, useRef, useState } from "react";
import { observable, unwarp } from "@legendapp/state";
import { For, Show, useObservable, Reactive } from "@legendapp/state/react";
import { Database } from "@/types/supabase";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import React from "react";
import { useChatScroll } from "@/lib/utils";

enableReactTracking({
	auto: true,
});

type msg = Database['public']['Tables']['real']['Row'];
const state$ = observable({ msgs: [] as msg[] });

export function Chat_messages({ msg, isMe }: { msg: string; isMe: boolean }) {
	const justifyClass = isMe ? 'justify-end' : 'justify-start';
	const lineColor = isMe ? ' rounded-br-none bg-blue-600 text-white' : 'rounded-bl-none bg-gray-300 text-gray-600';

	return (
		<div className={`${justifyClass} flex items-end mt-2`}>
			<div className="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
				<div>
					<span className={`${lineColor} inline-block  rounded-lg px-4 py-2`}>{msg}</span>
				</div>
			</div>
		</div >
	);
}


export default function Board_chat_message() {

	const me = "kim";
	const lastmsg = observable("");
	const prev = observable("");


	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		//auto scrolled
		const container = containerRef.current;
		const observerCallback: MutationCallback = (mutationsList: MutationRecord[]) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'childList' && mutation.addedNodes.length > 0 && container) {
					container.scrollTop = container.scrollHeight;
				}
			}
		};

		if (container) {
			const observer = new MutationObserver(observerCallback);
			observer.observe(container, { childList: true });

			return () => {
				observer.disconnect();
			};
		}
	}, [state$.msgs.get()]);


	useEffect(() => {
		const handleInserts = (payload: any) => {
			payload.new.name = "kim";
			payload.new.created_at = getTime(payload.new.created_at);
			state$.msgs.push(payload.new)

		}
		const subscription = supabase
			.channel('real')
			.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'real' }, handleInserts)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, []);

	return (
		<div className="mx-auto h-60 w-2/3 overflow-auto  bg-red-100 scrollbar-hide" ref={containerRef}>


			{state$.msgs.get().map((m, index, array) => {
				const prevMsg = index > 0 ? array[index - 1].msg : null;
				return (
					<>
						{prevMsg}
						<Chat_messages msg={m.msg!} isMe={m.name == me} />
					</>
				)
			})
			}

		</div>
	)
}
