import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import * as BABYLON from "@babylonjs/core";
import { Engine, Scene } from 'react-babylonjs';


const BabylonPixiRenderer: React.FC = () => {
	useEffect(() => {
		const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

		// Combined rendering context
		const combinedRenderer = PIXI.autoDetectRenderer({
			view: canvas,
			width: window.innerWidth,
			height: window.innerHeight,
			clearBeforeRender: false,
		});

		// Babylon.js rendering
		const engine = new BABYLON.Engine(combinedRenderer.view as HTMLCanvasElement, true);
		const scene = new BABYLON.Scene(engine);
		const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.attachControl(canvas, true);
		const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
		const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
		sphere.position.y = 1;
		const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

		// PIXI.js rendering
		const stage = new PIXI.Container();
		const sprite = PIXI.Sprite.from('https://i.imgur.com/1yLS2b8.jpg');
		sprite.anchor.set(0.5);
		sprite.position.set(combinedRenderer.width / 2, combinedRenderer.height / 2);
		stage.addChild(sprite);

		// Render Loop
		engine.runRenderLoop(function() {
			scene.render();
			engine.wipeCaches(true);

			combinedRenderer.reset();
			combinedRenderer.render(stage);
		});

		// Handle window resize
		const handleResize = () => {
			engine.resize();
			combinedRenderer.resize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<canvas id="renderCanvas" style={{ width: '100%', height: '100%' }}></canvas>
	);
};

export default BabylonPixiRenderer;

