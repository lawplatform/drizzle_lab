"use client"
import { AbstractMesh, Color3, Color4, Nullable, Vector3, Animation } from "@babylonjs/core";
import { useEffect, useRef } from "react";
import { useScene } from "react-babylonjs";
import Seca_wrapper from "@/src/page/section_ani/seca_wrapper";

import Law_Hero from "./Law_hero";
import ScrollSyncAni from "@/src/babylon/components/scrollSyncAni";
import Law_feature from "./Law_feature";
import Law_vision from "./Law_vision";
import Law_contact from "./Law_contact";
import Law_canvas from "./Law_canvas";
import Law_scroll_wrapper from "./Law_scroll_wrapper";



export default function Home() {

	useEffect(() => {

	}, [])
	return (
		<div>
			<Law_scroll_wrapper>
				<Law_canvas />
				<Law_Hero />
				<Law_feature />
				<Law_vision />
				<Law_contact />
			</Law_scroll_wrapper>
		</div>

	)

}

