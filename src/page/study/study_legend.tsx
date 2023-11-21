"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { observable } from "@legendapp/state";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { useObservable } from "@legendapp/state/react";

enableReactTracking({
	auto: true,
});

type listProp = {
	code: number;
};

const name$ = observable({ data: [] as listProp[] });
const age$ = observable(3);
export default function Study_legend() {

	const add = () => {
		const newData: listProp = { code: 1 };
		name$.data.push(newData);
		console.log(name$.data.get());
		//age$.set(v => v + 1);

	};

	return (
		<div>
			<h1>{age$.get()}</h1>
			<div className="h-52">
				<ul>
					{name$.data.map((m) => (
						<p>{m.code.get()} aarst</p>
					))}
				</ul>
			</div>
			<Button onClick={add}>click</Button>
		</div>
	);
}
