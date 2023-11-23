"use client"
import { AbstractMesh, Color3, Nullable, Vector3 } from "@babylonjs/core";
import "./background.css"

import React, { useEffect, useRef } from "react";
import { SC_refTest } from "@/src/babylon/example/SC_refTest";

const ThemeContext = React.createContext({
	color: Color3.Red(),
	position: Vector3.Zero(),
	name: 'default context',

})

const disableStepNavigation = false;
const disableStepNavigation_Delay = 600;
const scrollSteps = [0, 700, 2170, 3400, 5700, 7000, 7600];


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

	const childRef = useRef<HTMLDivElement | null>(null);

	return (
		<div>
			<SC_refTest ref={childRef} >

			</SC_refTest >
		</div>
	)

}

