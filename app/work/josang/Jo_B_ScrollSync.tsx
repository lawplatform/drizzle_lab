"use client"
import { Scene as BS, AbstractMesh, ArcRotateCamera, Color4, Nullable, Vector3, Animation, AnimationGroup, Color3, CubeTexture, PointLight, MeshBuilder, GizmoManager, PositionGizmo, DirectionalLight, HemisphericLight, StandardMaterial, ColorCorrectionPostProcess, SpotLight, FresnelParameters, PBRMaterial, Tools, SceneLoader, TextureAssetTask, Texture, } from '@babylonjs/core'
import { Engine, Scene, Camera, useScene, useCanvas, Model, ILoadedModel, Task, TaskType, useAssetManager, texture } from 'react-babylonjs'
import "@babylonjs/loaders/glTF";
import Scroll_css from "@/src/scroll/scroll_css";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Lenis from '@studio-freight/lenis'
import "./Jo_canvas.css";
import { observable, observe } from '@legendapp/state';
import { hexToColor3 } from '@/src/babylon/utils/utils';

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

interface Colormap {
	[key: string]: Color3;
}

const textureAssets: Task[] = [
	{
		taskType: TaskType.Texture,
		url: '/texture/city_texture.png',
		name: 'city',

	},
	{
		taskType: TaskType.Texture,
		url: '/texture/office.png',
		name: 'office',

	}
]

const colormap: Colormap = {
	25: hexToColor3("#ffb5b5"),  // Lighter blue
	50: hexToColor3("#ffedbe"),    // Purple
	75: hexToColor3("#e5eae4"),  // Lighter purple
};


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


interface Sc_anime_sync_scroll_props {
	model: string;
	animationName: string;

}

const state$ = observable(true);
export default function Law_B_ScrollSync({ model, animationName }: Sc_anime_sync_scroll_props) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const scene = useScene();
	const modelRef = useRef<Nullable<AbstractMesh>>(null);
	const transformRef = useRef(null)
	const [ishalf, SetHalf] = useState(true);
	let baseUrl = '/glb/';

	const assetManagerResult = useAssetManager(textureAssets, {
		useDefaultLoadingScreen: true,
	})

	function onModelLoaded(model: ILoadedModel) {
		modelRef.current = model.rootMesh!
		const initialAnimation = modelRef.current.getScene().getAnimationGroupByName("run");
		if (initialAnimation) {
			initialAnimation.stop();
		}
		const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
	}
	function lenisAnimationSync(e: lenisEvent, animationName: string, model: React.MutableRefObject<Nullable<AbstractMesh>>) {
		const endPos = e.dimensions.scrollHeight - e.dimensions.height;
		const currentPos = e.animate.value;
		const currentNomalize = normalizeValue(currentPos, endPos);
		const animation = modelRef.current?.getScene().getAnimationGroupByName(animationName);
		const frameLength = getAnimationKeyframeLength(animation!);
		const currentFrame = denormalizeValue(currentNomalize, frameLength);

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







		}



		scrollEvent();
	}, [modelRef.current])


	useEffect(() => {
		//based on scroll position change fog color
		const handleScroll = (event) => {

		};

		window.addEventListener('wheel', handleScroll);

		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, []);




	return (<>
		<Suspense fallback={<box name="fallback" position={new Vector3(0, 0, 0)} />}>
			<Model
				ref={modelRef}
				name="man"
				rotation={new Vector3(0, 0, 0)}
				rootUrl={`${baseUrl}`}
				sceneFilename={model}
				scaleToDimension={1}
				position={new Vector3(-100, -40, -150)}
				onModelLoaded={onModelLoaded}
				scaling={new Vector3(30, 30, 30)}
			>

			</Model>
		</Suspense >

	</>
	)
}
