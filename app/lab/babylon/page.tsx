"use client"
import { AbstractMesh, Color3, Color4, Nullable, Vector3, Animation } from "@babylonjs/core";
import "./background.css"

import React, { useEffect, useRef } from "react";
import { SC_refTest } from "@/src/babylon/example/SC_refTest";
import SC_isometric from "@/src/babylon/scene/SC_isometric";
import ScrollSyncAni from "@/src/babylon/components/scrollSyncAni";
import Sc_scroll from "@/src/babylon/scene/Sc_scroll";
import { Engine, Scene, useScene } from "react-babylonjs";


var keys = [];
keys.push({
	frame: 0,
	value: new Vector3(0, 5, -10)
});
keys.push({
	frame: 100,
	value: new Vector3(0, 5, 10)
});
var animation = new Animation(
	"cameraAnimation",
	"position",
	30,
	Animation.ANIMATIONTYPE_VECTOR3,
	Animation.ANIMATIONLOOPMODE_CYCLE
);
animation.setKeys(keys);



export default function Home() {

	const childRef = useRef<HTMLDivElement | null>(null);
	const scene = useScene();
	useEffect(() => {
		if (scene == null) { return }
		const camera = scene.activeCamera;
		camera!.animations = [];
		camera!.animations.push(animation);

		scene.beginAnimation(camera, 0, 100, true);
	}, [])
	return (
		<div>

			<Engine antialias adaptToDeviceRatio canvasId="babylon-canvas" renderOptions={{
				whenVisibleOnly: true,
			}} >
				<Scene
					clearColor={new Color4(0, 0, 0, 0)}>
					<arcRotateCamera
						radius={4}
						name="camera1"
						alpha={Math.PI / 4}  // Slightly rotate around the Y-axis
						beta={Math.PI / 6}   // Slightly rotate above the XZ plane
						target={Vector3.Zero()}
						lowerRadiusLimit={10}
						upperRadiusLimit={10}
						lowerBetaLimit={Math.PI / 5}  // Fixed angle above the XZ plane
						upperBetaLimit={Math.PI / 5 + 0.5}
						lowerAlphaLimit={Math.PI / 4 - 0.1}  // Adjust the lower limit for XZ rotation
						upperAlphaLimit={Math.PI / 4 + 0.1}  // Adjust the upper limit for XZ rotatio
					/>

					<hemisphericLight
						name="light1"
						intensity={1}
						direction={new Vector3(0, 1, 0)}
					/>
					<ScrollSyncAni model={"city.glb"} animationName={"main"} />
				</Scene>
			</Engine>

			<div id="sc" className="wrap h-full bg-red-100 px-10">
				<section className="sc h-screen">aar!</section>
				<section className="sc h-screen">br</section>
				<section className="sc h-screen">c2</section>
				<section className="sc h-screen">dr</section>
				<section className="sc h-screen">e1</section>
				<section className="sc h-screen">fr</section>
			</div>
		</div>

	)

}

