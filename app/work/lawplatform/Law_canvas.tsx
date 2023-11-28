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
					<arcRotateCamera
						radius={4}
						name="camera1"
						alpha={Math.PI / 10}  // Slightly rotate around the Y-axis
						beta={20}   // Slightly rotate above the XZ plane
						target={Vector3.Zero()}
						lowerRadiusLimit={3}
						upperRadiusLimit={3}
						lowerBetaLimit={Math.PI / 5}  // Fixed angle above the XZ plane
						upperBetaLimit={Math.PI / 5}
						lowerAlphaLimit={Math.PI / 4.5}  // Adjust the lower limit for XZ rotation
						upperAlphaLimit={Math.PI / 4.5}  // Adjust the upper limit for XZ rotatio
					/>



					<hemisphericLight
						name="light1"
						intensity={20}
						direction={new Vector3(0, 0, 0)}
						diffuse={new Color3(0, 0, 0)}
					/>

					<Law_B_ScrollSync model={"city_test.glb"} animationName={"main"} />

				</Scene>
			</Engine>

		</div>

	)

}
