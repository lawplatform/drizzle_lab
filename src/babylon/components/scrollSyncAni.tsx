//automatically sync with scroll animation 
"use client"
import { AbstractMesh, ArcRotateCamera, Color4, Nullable, Vector3, Animation, AnimationGroup } from '@babylonjs/core'
import { Engine, Scene, Camera, useScene, useCanvas, Model, ILoadedModel, } from 'react-babylonjs'
import "@babylonjs/loaders/glTF";
import Scroll_css from "@/src/scroll/scroll_css";
import { Suspense, useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis'
import "./scrollSyncAni.css";

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
export default function ScrollSyncAni({ model, animationName }: Sc_anime_sync_scroll_props) {
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
		console.log(frameLength);

		if (animation === null || animation === undefined) {
			console.error("AnimationGroup is undefined or null.");
			return 0; // or return null; or return undefined; depending on your use case
		} else {
			animation.start(false, 1, currentFrame, currentFrame, false);
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
			lenisAnimationSync(e, animationName, modelRef)
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
		<Suspense fallback={
			<box name="fallback" position={new Vector3(0, 0, 0)} />}>
			<Model
				ref={modelRef}
				name="monkey"
				rotation={new Vector3(0, 180, 0)}
				rootUrl={`${baseUrl}`}
				sceneFilename={model}
				scaleToDimension={1}
				position={new Vector3(-5, -8, -3)}
				onModelLoaded={onModelLoaded}
				scaling={new Vector3(0.5, 0.5, 0.5)}
			/>
		</Suspense>
	)
}
