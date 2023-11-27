import ScrollSyncAni from "@/src/babylon/components/scrollSyncAni";
import { Color4, Vector3, Animation, AnimationGroup, AbstractMesh, Nullable, Color3, CubeTexture, Texture } from "@babylonjs/core";
import Lenis from "@studio-freight/lenis";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Engine, ILoadedModel, Model, Scene, useScene, GizmoBox } from "react-babylonjs";
import "@babylonjs/loaders/glTF";
import "./Law_canvas.css"

interface lenisEvent {
	animate: {
		value: number,
		from: number,
		to: number,
		lerp: number,
		duration: number,
		currentTime: number,
		isRunning: boolean
	}
	dimensions: {
		scrollHeight: number
		height: number
	}
}

function normalizeValue(currentNumber: number, maxNumber: number) {
	currentNumber = Math.max(1, currentNumber);
	const normalizedValue = (currentNumber / maxNumber) * 100;
	return normalizedValue;
}

function denormalizeValue(normalizedValue: number, maxNumber: number) {
	const denormalizedValue = (normalizedValue / 100) * maxNumber;
	return denormalizedValue;
}

function getAnimationKeyframeLength(animemodel: AnimationGroup | undefined) {
	// animemodel = CameraAnimation;

	if (!animemodel) {
		console.error("AnimationGroup is undefined or null.");
		return 0; // or return null; or return undefined; depending on your use case
	}
	const targetedAnimations = animemodel.targetedAnimations;
	if (!targetedAnimations || targetedAnimations.length === 0) {
		console.error("No targeted animations found in AnimationGroup.");
		return 0; // or return null; or return undefined; depending on your use case
	}
	const target = targetedAnimations[0];
	if (!target) {
		console.error("First targeted animation is undefined or null.");
		return 0; // or return null; or return undefined; depending on your use case
	}
	const animation = target.animation;
	if (!animation) {
		console.error("Animation property is undefined or null.");
		return 0; // or return null; or return undefined; depending on your use case
	}
	const keys = animation.getKeys();
	if (!keys) {
		console.error("Keys property is undefined or null.");
		return 0; // or return null; or return undefined; depending on your use case
	}

	return keys.length * 2;
}

function playAnimationFromTo(currentValue: number, from) {
	//const animemodel = modelRef.current!.getScene().getAnimationGroupByName("moveBack");
	const frame = currentValue;
	//animemodel!.start(false, 1, currentValue, currentValue, false);

}
interface Sc_anime_sync_scroll_props {
	model: string;
	animationName: string;

}
export default function Law_canvas() {
	const childRef = useRef<HTMLDivElement | null>(null);
	const scene = useScene();




	var keys = [];
	keys.push({
		frame: 0,
		value: new Vector3(0, 5, -10)
	});
	keys.push({
		frame: 100,
		value: new Vector3(5, 5, 10)
	});
	var CameraAnimation = new Animation(
		"cameraAnimation",
		"position",
		30,
		Animation.ANIMATIONTYPE_VECTOR3,
		Animation.ANIMATIONLOOPMODE_CYCLE
	);
	CameraAnimation.setKeys(keys);



	useEffect(() => {
		if (scene == null) { return }
		console.log("find camera");

	}, [scene])


	const modelRef = useRef<Nullable<AbstractMesh>>(null);
	const transformRef = useRef(null)
	let baseUrl = '/glb/';

	function onModelLoaded(model: ILoadedModel) {
		modelRef.current = model.rootMesh!
		const initialAnimation = modelRef.current.getScene().getAnimationGroupByName("main");
		if (initialAnimation) {
			initialAnimation.stop();
		}
	}


	function lenisAnimationSync(e: lenisEvent, animationName: string, model: React.MutableRefObject<Nullable<AbstractMesh>>) {
		const endPos = e.dimensions.scrollHeight - e.dimensions.height;
		const currentPos = e.animate.value;
		const currentNomalize = normalizeValue(currentPos, endPos);
		const animation = modelRef.current?.getScene().getAnimationGroupByName(animationName);

		const frameLength = getAnimationKeyframeLength(animation!);
		const currentFrame = denormalizeValue(currentNomalize, frameLength);

		if (animation === null || animation === undefined) {
			//console.error("AnimationGroup is undefined or null.");
			return 0; // or return null; or return undefined; depending on your use case
		} else {
			//	animation.start(false, 1, currentFrame, currentFrame, false);
		}
	}

	function scrollEvent() {
		const lenis = new Lenis({
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		}
		)
		lenis.on('scroll', (e: lenisEvent) => {
			lenisAnimationSync(e, "main", modelRef)
		})
		function raf(time: any) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

	}
	useEffect(() => {
		scrollEvent();
	}, [])


	return (
		<div className="z-3">

			<Engine antialias adaptToDeviceRatio canvasId="babylon-canvas" renderOptions={{
				whenVisibleOnly: true,
			}} >
				<Scene
					clearColor={new Color4(0, 0, 0, 0)}>

					<arcRotateCamera
						name="camera1"
						radius={4}
						alpha={Math.PI / 2} // 30 degrees in radians
						beta={Math.PI / 2} // Slightly rotate above the XZ plane
						target={Vector3.Zero()}
						lowerRadiusLimit={5}//zoom in /out
						upperRadiusLimit={5}
						lowerBetaLimit={Math.PI / 6} // Fixed angle above the XZ plane
						upperBetaLimit={Math.PI / 6}
						lowerAlphaLimit={Math.PI / 6} // Adjust the lower limit for XZ rotation
						upperAlphaLimit={Math.PI / 6} // Adjust the upper limit for XZ rotation
					/>
					<hemisphericLight
						name="light1"
						intensity={1.8}
						direction={new Vector3(0, 0, 20)}
						diffuse={new Color3(0.5, 0.3, 0.2)}
					/>
					<ScrollSyncAni model={"city_main.glb"} animationName={"main"} />



				</Scene>
			</Engine>

		</div>

	)

}
