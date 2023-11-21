"use client"
import { Button } from "@/components/ui/button";
import CAMERA_isometric from "@/src/babylon/Camera/isometric";
import SceneContainer from "@/src/babylon/SceneContainer";
import Im_scene from "@/src/babylon/imperative/im_scene";
import Logo from "@/src/babylon/object/Logo";
import By_monkey from "@/src/babylon/object/monkey";
import SC_basic from "@/src/babylon/scene/SC_basic";
import SC_isometric from "@/src/babylon/scene/SC_isometric";
import Gi_hptd from "@/src/gallery/item/gi_hptd";
import Bi from "@/src/ui/button/bi";
import Text_menu_title from "@/src/ui/text/text_menu_title_1";
import { AbstractMesh, Color3, Nullable, Vector3 } from "@babylonjs/core";
import { Annoyed } from "lucide-react";
import React, { useRef } from "react";

const ThemeContext = React.createContext({
	color: Color3.Red(),
	position: Vector3.Zero(),
	name: 'default context',

})


const ThemedBox = () => {
	const ctx = React.useContext(ThemeContext)
	return (
		<box name={ctx.name} position={ctx.position}>
			<standardMaterial
				name="mat"
				diffuseColor={ctx.color}
				specularColor={Color3.Black()}
			/>

		</box>

	)

}

export default function Home() {
	const modelRef = useRef(null);
	const playAnimation = () => {
		console.log(modelRef);

		if (modelRef.current) {
			console.log("accesss");

		}
	}
	const prevStep = () => {
		console.log("wheel up");

	}
	const nextStep = () => {
		console.log("wheel Down");

	}

	const wheelHandler = () => {
		window.addEventListener('wheel', (e) => {
			e.preventDefault();
			if (e.deltaY < -10) {
				prevStep();
			} else if (e.deltaY > 10) {
				nextStep();
			}
		})
	}

	return (
		<div>
			<div className="absolute mt-10 w-full">
				<SC_basic >
					<CAMERA_isometric />
					<By_monkey ref={modelRef} />
					<ThemedBox />
				</SC_basic>
				<Button onClick={() => {
					playAnimation()
				}}>plary</Button>
			</div>
			<Text_menu_title title={"babylon"} description={"make 3d more interective"} />



			<h2 className="absolute bottom-96 left-44 text-5xl font-bold">This is titlep</h2>
			<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>

			<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>

			<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>

			<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>

			<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>

			<p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
		</div>
	)
}
