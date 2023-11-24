"use client"
import "./sc_scroll_ref_ani.css"
import { AbstractMesh, ArcRotateCamera, Color4, Nullable, Vector3, Animation } from '@babylonjs/core'
import { Engine, Scene, Camera, useScene, useCanvas, Model, ILoadedModel, } from 'react-babylonjs'
import "@babylonjs/loaders/glTF";
import Scroll_css from "@/src/scroll/scroll_css";
import { Suspense, useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis'
import { useObserve } from "@legendapp/state/react";
import { observable } from "@legendapp/state";

const stepList = [1, 20, 50, 60, 90];
let previousStep = 0;
let currentStep$ = observable(0);
function playAnime(modelRef: React.MutableRefObject<Nullable<AbstractMesh>>) {
	if (modelRef.current === null) return;
	const moveBack = modelRef.current.getScene().getAnimationGroupByName("moveBack");
	moveBack?.start(false, 1, 20, 30, false);
}



function checkAndTriggerEvent(from: number, currentValue: number) {
	const model: React.MutableRefObject<Nullable<AbstractMesh>> = model$.get();
	const startTime = performance.now();
	const distance = Math.abs(from - currentValue);
	const scrollSpeed = 2;

}


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

export default function Sc_scroll_ref_ani() {
	const modelRef = useRef<Nullable<AbstractMesh>>(null);
	const transformRef = useRef(null)
	let baseUrl = '/glb/';


	function normalizeToScale(currentNumber: number, maxNumber: number) {
		currentNumber = Math.max(1, currentNumber);
		const normalizedValue = (currentNumber / maxNumber) * 100;
		return normalizedValue;
	}

	function denormalizeToScale(normalizedValue, maxNumber) {
		const denormalizedValue = (normalizedValue / 100) * maxNumber;
		return denormalizedValue;
	}

	function onModelLoaded(model: ILoadedModel) {
		modelRef.current = model.rootMesh!
		const moveBack = modelRef.current.getScene().getAnimationGroupByName("moveBack");
		if (moveBack) {
			moveBack.stop();
		}
	}
	function playAnime(modelRef: React.MutableRefObject<Nullable<AbstractMesh>>) {
		if (modelRef.current === null) return;
		const moveBack = modelRef.current.getScene().getAnimationGroupByName("moveBack");
		moveBack?.start(false, 1, 20, 30, false);
	}



	function checkAndTriggerEvent(from: number, currentValue: number) {

		const animemodel = modelRef.current!.getScene().getAnimationGroupByName("moveBack");
		const frame = currentValue;
		animemodel!.start(false, 1, currentValue, currentValue, false);

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
			const from = normalizeToScale(e.animate.from, e.dimensions.scrollHeight - e.dimensions.height)
			const current = normalizeToScale(e.animate.value, e.dimensions.scrollHeight - e.dimensions.height)
			checkAndTriggerEvent(from, current);
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
		<div>
			<Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
				<Scene
					clearColor={new Color4(0, 0, 0, 0)}
				>
					<freeCamera
						name="camera1"
						position={new Vector3(0, 10, -20)}
						setTarget={[Vector3.Zero()]}
					/>
					<hemisphericLight
						name="light1"
						intensity={0.7}
						direction={Vector3.Up()}
					/>
					<Suspense fallback={
						<box name="fallback" position={new Vector3(0, 0, 0)} />}>
						<Model
							ref={modelRef}
							name="monkey"
							rootUrl={`${baseUrl}`}
							sceneFilename={`monkey.glb`}
							scaleToDimension={1}
							position={new Vector3(0, 0, 0)}
							onModelLoaded={onModelLoaded}
							scaling={new Vector3(0.5, 0.5, 0.5)}
						/>
					</Suspense>
				</Scene>
			</Engine>
			<Scroll_css />
		</div>
	)
}
