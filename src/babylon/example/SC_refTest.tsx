import { AbstractMesh, ArcRotateCamera, Color4, Nullable, Vector3, Animation } from '@babylonjs/core'
import { FC, MutableRefObject, ReactNode, RefObject, Suspense, forwardRef, useEffect, useRef } from 'react';
import { Engine, Scene, Camera, useScene, useCanvas, Model, ILoadedModel, } from 'react-babylonjs'
import "@babylonjs/loaders/glTF";
import "./sc_reftest.css"
import { Button } from '@/components/ui/button';
import { observable } from "@legendapp/state";
const state$ = observable();
interface sceneProps {
	children: ReactNode;
}

//possible to access from the model 
const moveOut = (modelRef: React.MutableRefObject<Nullable<AbstractMesh>>) => {
	if (modelRef.current === null) return;
	console.log("move");
	modelRef.current!.position.x += 0.2;
};

const playAnime = (modelRef: React.MutableRefObject<Nullable<AbstractMesh>>) => {
	if (modelRef.current === null) return;
	const moveBack = modelRef.current.getScene().getAnimationGroupByName("moveBack");
	moveBack?.start(false, 1, 20, 30, false);
}


//define animation 
function getSlideUpAnimation(position: Vector3, offsetY: number) {
	const { y } = position
	const keys = [
		{
			frame: 0,
			value: y + offsetY,
		},
		{
			frame: 60,
			value: y,
		},
		{
			frame: 120,
			value: y + offsetY,
		},
	]

	const animation = new Animation('animation', 'position.y', 60, 0, 1)
	animation.setKeys(keys)

	return [animation]
}

function playAnimeBox(groupRef: React.MutableRefObject<Nullable<AbstractMesh>>) {
	if (groupRef.current) {
		const group = groupRef.current
		const scene = groupRef.current.getScene()
		const animations = getSlideUpAnimation(new Vector3(0, 0, 0), -2)
		const animatable = scene!.beginDirectAnimation(
			group,
			animations,
			0,
			120,
			true
		)
		// console.timeLog('Timing', 'beginAnimation');
	}

}



interface ScrollAnimationWrapperProps {
	modelRef: React.MutableRefObject<Nullable<AbstractMesh>>;
}

const ScrollAnimationWrapper: FC<ScrollAnimationWrapperProps> = ({ modelRef }) => {
	useEffect(() => {
		const animationDuration = 300;
		let scrollTimeout: number;
		let scrollSections = document.getElementById("sc_content")
		let isScrolling = false;
		let currentTime;
		console.log("loading scroll section");

		console.log(scrollSections);

		if (!scrollSections) {
			scrollSections = document.getElementById("sc_content");
		}
		if (!scrollSections) {
			// If scrollSections is still null, we couldn't find the element
			return;
		}

		const handleScroll = (event) => {
			console.log("now I'm scrolling");
			var scrollPosition = scrollSections!.scrollTop;
			if (modelRef.current === null) return;
			var cameraAnim = modelRef.current.getScene().getAnimationGroupByName("moveBack");
			if (cameraAnim === null) return;
			isScrolling = true;

			currentTime = scrollPosition / 20;

			if (currentTime > 0.1 && currentTime < animationDuration - 1) {

				cameraAnim.start(false, 1, currentTime, currentTime, false);
			}

			clearTimeout(scrollTimeout);
			scrollTimeout = window.setTimeout(function() {
				isScrolling = false;
				console.log('Scroll Stopped');
			}, 100);

		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [modelRef]);
	return (
		<div id="sc_content">
			<section className="bg-red-50">a</section>
			<section className="bg-blue-50">b</section>
			<section className="bg-green-50">c</section>
			<section className="bg-yeoolw-50">d</section>
			<section className="bg-zinc-50">e</section>
			<section className="bg-blue-50">f</section>
		</div>


	)
}


export const SC_refTest = forwardRef<HTMLDivElement, sceneProps>(({ children }, ref) => {
	const scene = useScene();
	const modelRef = useRef<Nullable<AbstractMesh>>(null);
	const transformRef = useRef(null)
	let baseUrl = '/glb/';



	if (scene != null && scene.activeCamera != null) {
		scene.activeCamera.inputs.removeByType('ArcRotateCameraPointersInput');
	}

	const onModelLoaded = (model: ILoadedModel) => {
		modelRef.current = model.rootMesh!
		const moveBack = modelRef.current.getScene().getAnimationGroupByName("moveBack");
		if (moveBack) {
			moveBack.stop();
		}
		state$.set(scene);
		console.log(scene);
		console.log(state$.get());


	}

	return (
		<div style={{ flex: 1, display: 'flex bg-transparent ' }} ref={ref}>
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


					<transformNode
						name="group"
						ref={transformRef}
						position={new Vector3(0, 0, 0)}
					>


						<Suspense fallback={<box name="fallback" position={new Vector3(0, 0, 0)} />}>
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


					</transformNode>

					<hemisphericLight
						name="light1"
						intensity={1}
						direction={new Vector3(0, 1, 0)}
					/>

					{children}
				</Scene>
			</Engine>
			<Button onClick={() => playAnimeBox(transformRef)} className="fixed top-32" > click</Button>


			<div className="testBox"> is css apply? </div>
			<ScrollAnimationWrapper modelRef={modelRef} />
		</div >
	)
}
)

