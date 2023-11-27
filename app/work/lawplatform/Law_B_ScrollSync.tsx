"use client"
import { Scene as BS, AbstractMesh, ArcRotateCamera, Color4, Nullable, Vector3, Animation, AnimationGroup, Color3, CubeTexture, Texture, PointLight, MeshBuilder, GizmoManager, PositionGizmo, DirectionalLight, HemisphericLight, StandardMaterial, ColorCorrectionPostProcess, SpotLight, FresnelParameters, PBRMaterial, } from '@babylonjs/core'
import { Engine, Scene, Camera, useScene, useCanvas, Model, ILoadedModel, } from 'react-babylonjs'
import "@babylonjs/loaders/glTF";
import Scroll_css from "@/src/scroll/scroll_css";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Lenis from '@studio-freight/lenis'
import "./Law_canvas.css";

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
export default function Law_B_ScrollSync({ model, animationName }: Sc_anime_sync_scroll_props) {
	const scene = useScene();

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
		if (scene) {

			//camera?.inputs.clear();

			var light = new DirectionalLight("sunlight", new Vector3(0, 0, 10), scene);
			light.position = new Vector3(0, 0, 0);
			light.intensity = 25; // Adjust the intensity as needed
			// Apply a blur post-process
			//
			var warmLight = new HemisphericLight("warmLight", new Vector3(0, 1, 20), scene);
			warmLight.diffuse = new Color3(1, 0.8, 0.6);
			warmLight.intensity = 25;
			warmLight.range = 150;
			var pointLight1 = new PointLight("pointLight1", new Vector3(5, 5, 5), scene);
			pointLight1.diffuse = new Color3(1, 0.8, 0.6); // Adjust the color as needed
			pointLight1.intensity = 25; // Adjust the intensity

			var pointLight2 = new PointLight("pointLight2", new Vector3(-5, 5, -5), scene);
			pointLight2.diffuse = new Color3(1, 0.8, 0.6); // Adjust the color as needed
			pointLight2.intensity = 25; // Adjust the intensity
			scene.ambientColor = new Color3(1, 1, 1); // Adjust as needed
			console.log(scene.activeCameras);


		}



		scrollEvent();
	}, [modelRef.current])

	return (<>
		<Suspense fallback={
			<box name="fallback" position={new Vector3(0, 0, 0)} />}>
			<Model
				ref={modelRef}
				name="monkey"
				rotation={new Vector3(0, 0, 0)}
				rootUrl={`${baseUrl}`}
				sceneFilename={model}
				scaleToDimension={1}
				position={new Vector3(0, 0, 0)}
				onModelLoaded={onModelLoaded}
				scaling={new Vector3(1, 1, 1)}
			/>

		</Suspense>

	</>
	)
}
