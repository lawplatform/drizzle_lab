"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { observable } from "@legendapp/state";
import { useEffect } from "react";
import { enableReactUse } from "@legendapp/state/config/enableReactUse";

interface msgtype {
	id: number;
	msg: string;
	name: string;
}

const state$ = observable({ m: [] as msgtype[] })
const stateNum$ = observable(3);
export default function Home() {
	enableReactUse();
	const add = () => {
		state$.m.push({
			id: 0,
			msg: "hi",
			name: "yoon"
		})
		console.log(state$.get());

	}


	return (
		<div>
			{stateNum$.get()}
			<div className="h-52">
				{state$.m.get("name")}
			</div>
			<Input type="text" />
			<Button onClick={add} > click</Button>
		</div >
	)
}


