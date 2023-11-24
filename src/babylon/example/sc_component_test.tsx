"use client"
import Scroll_css from "@/src/scroll/scroll_css"
import Sc_withPixi from "../scene/sc_withPixi"
import Sc_with_html_pixi from "./sc_with_html_pixi"
const sceneWithScroll = {
	/*
	< SceneContainer >
	<ScrollSyncAni model={"monkey2.glb"} animationName={"landing"} />
			</SceneContainer >
*/
}

export default function Sc_component_test() {


	return (
		<div>
			<Sc_with_html_pixi>

			</Sc_with_html_pixi>


			<div>hi</div>
			<Scroll_css />

		</div>
	)
}
