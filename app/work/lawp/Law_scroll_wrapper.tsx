"use client"

import { useEffect } from "react";
import anime from "animejs"
import Lenis from '@studio-freight/lenis'
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import Section_1 from "@/components/work/lawplatform/section_1";
import Seca_section_1 from "./seca_section_1";
import C_Flip_3d from "@/src/ui/card/c_flip_3d";
import Sec_contact from "../section/sec_contact";
import { State$ } from "./State";
import { useScene } from "react-babylonjs";

type FrameType = { [key: string]: { [key: string]: number | string }[] };
const options = {
	root: null,
	threshold: 0.3,
	rootMargin: "-100px",
}

const keyframes_main: FrameType = {
	frame_1_m: [
		{ translateX: +100, translateY: -50 },
	],
	frame_2_m: [
		{ translateY: -40 },
		{ translateX: +20 },
		{ translateX: +40 },
		{ translateY: -20 },
		{ translateY: -20 },
	],
	// Add more frame definitions as needed
};

const keyframes_sub: FrameType = {
	frame_1_s: [
		{ translateX: +150, translateY: -10 },
	],
	frame_2_m: [
		{ translateY: -40 },
		{ translateX: +20 },
		{ translateX: +40 },
		{ translateY: -20 },
		{ translateY: -20 },
	],
	// Add more frame definitions as needed
};



const scrollAni = () => {
	return anime({
		targets: ".scroll-box",
		keyframes: [

			{ translateX: -500 },
			{ translateX: -500 },
			{ translateX: -100 },
			{ translateX: 5 },
			{ translateX: -500 }
		],
		duration: 6000,
		easing: 'spring(1, 80, 10, 0)',
		autoplay: false,
	})
}

const mainAni = (frameName: string) => {
	const frame: { [key: string]: number | string }[] | undefined = keyframes_main[frameName];
	if (frame) {
		return anime({
			targets: ".main",
			keyframes: frame,
			delay: anime.stagger(100),
			loop: false,
			direction: 'alternate',
			autoplay: true,
			duration: 6000,
			easing: 'spring(1, 80, 10, 0)',

		})
	}
}

const subAni = (frameName: string) => {
	const frame: { [key: string]: number | string }[] | undefined = keyframes_sub[frameName];
	return anime({
		targets: ".sub",
		keyframes: frame,
		delay: anime.stagger(100),
		loop: false,
		direction: 'alternate',
		autoplay: true,
		duration: 3000,

	})
}
const allocateAnimation = (obj: Element, index: number) => {
	const frameString: string = "frame_" + index.toString() + "_m";
	const frameString_sub: string = "frame_" + index.toString() + "_s";
	let ani_main = mainAni(frameString);
	let ani_sub = subAni(frameString_sub);
	const intersectEvent = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		const targetElement = entry.target as HTMLElement;
		const isMobile = window.innerWidth <= 768;

		//if screen size is mobile animation not play 

		if (entry.isIntersecting && ani_main && !isMobile) {

			ani_main.play();
			ani_sub.play();
		} else {
			if (ani_main) {
				ani_main.pause();
				ani_sub.pause();
			}
		}
	}

	if (obj) {
		const theObserver = new IntersectionObserver(intersectEvent, options);
		theObserver.observe(obj);
	}
}



export default function Law_scroll_wrapper({ children }: {
	children: React.ReactNode
}) {
	//smooth scrolling by lenis 
	const lenis = new Lenis();
	function raf(time: any) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	useEffect(() => {
		//get current mouse posistion 
		const setScrollVar = () => {
			const htmlElement = document.documentElement;
			const percentOfScreen = (htmlElement.scrollTop / (htmlElement.scrollHeight - htmlElement.clientHeight)) * 100;
			const Ani = scrollAni();
			Ani.seek(Ani.duration * (percentOfScreen / 100));

		}
		window.addEventListener("scroll", setScrollVar)
		window.addEventListener("resize", setScrollVar)


	}, [])
	//allocated intersectino callback 
	useEffect(() => {
		const watch = document.querySelector('.watch');
		if (!watch) return;
		allocateAnimation(watch, 1)

	}, [])
	return (
		<div>
			{children}
		</div>

	)
}
