import ScrollSyncAni from "@/src/babylon/components/scrollSyncAni";
import { Color4, Vector3, Animation, AnimationGroup, AbstractMesh, Nullable, Color3, CubeTexture, Texture } from "@babylonjs/core";
import Lenis from "@studio-freight/lenis";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Engine, ILoadedModel, Model, Scene, useScene, GizmoBox } from "react-babylonjs";
import "@babylonjs/loaders/glTF";
import "./Law_canvas.css"
import Law_B_ScrollSync from "./Law_B_ScrollSync";


export default function Law_canvas() {

	return (
		<div className="z-3">

			<Engine antialias adaptToDeviceRatio canvasId="babylon-canvas" renderOptions={{
				whenVisibleOnly: true,
			}} >
				<Scene
					clearColor={new Color4(0, 0, 0, 0)}>

					<freeCamera name="camera1" position={new Vector3(2, 20, -5)} rotation={new Vector3(0, 0, 0)} setTarget={[Vector3.Zero()]} />
					<hemisphericLight
						name="light1"
						intensity={20}
						direction={new Vector3(0, 0, 0)}
						diffuse={new Color3(0, 0, 0)}
					/>

					<Law_B_ScrollSync model={"city.glb"} animationName={"main"} />

				</Scene>
			</Engine>

		</div>

	)

}
