"use client"
import Scroll_css from "@/src/scroll/scroll_css"
import ScrollSyncAni from "../components/scrollSyncAni"
import SceneContainer from "../scene/SC_basic"
export default function Sc_component_test() {


	return (
		<div>
			<SceneContainer>
				<ScrollSyncAni model={"monkey2.glb"} animationName={"landing"} />
			</SceneContainer>
			<div>hi</div>
			<Scroll_css />

		</div>
	)
}
