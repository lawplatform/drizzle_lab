"use client"

import { useEffect } from "react";
import anime from "animejs"
import Lenis from '@studio-freight/lenis'
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import Bar_progress from "@/src/ui/bar/bar_progress";
export default function Home() {
	//smooth scrolling by lenis 
	const lenis = new Lenis();
	function raf(time: any) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
	//get current mouse posistion 

	//allocated scroll animation 
	useEffect(() => {
		const green = anime({
			targets: ".scroll-box",
			keyframes: [

				{ translateX: 100 },
				{ translateY: 40 },
				{ translateX: 0 },
				{ translateY: 0 }
			],
			duration: 3000,
			autoplay: false,
		})

		//get current mouse posistion 
		const setScrollVar = () => {
			const htmlElement = document.documentElement;
			const percentOfScreen = (htmlElement.scrollTop / (htmlElement.scrollHeight - htmlElement.clientHeight)) * 100;
			green.seek(green.duration * (percentOfScreen / 100));

		}
		window.addEventListener("scroll", setScrollVar)
		window.addEventListener("resize", setScrollVar)


	}, [])
	//allocated intersectino callback 
	useEffect(() => {
		const box = document.querySelector('.box');
		const container = document.querySelector('.container');

		const aniBox = anime({
			targets: ".moving-box",
			keyframes: [
				{ translateY: -40 },
				{ translateX: +250 },
				{ translateX: +40 },
				{ translateY: -20 },
				{ translateY: -20 }
			],
			delay: anime.stagger(100),
			loop: true,
			direction: 'alternate',
			autoplay: false,
			duration: 3000,

		})
		const options = {
			root: null,
			threshold: 0.3,
			rootMargin: "-100px",
		}
		const callbackFunction = (entries: IntersectionObserverEntry[]) => {
			const [entry] = entries;
			const targetElement = entry.target as HTMLElement;
			if (entry.isIntersecting) {
				aniBox.play();
			} else {
				aniBox.pause();
			}
		}
		if (box) {
			const theObserver = new IntersectionObserver(callbackFunction, options);
			theObserver.observe(box);
		}
	}
		, [])





	return (

		<div className="container"> This is section test page
			<div>
				<h1>Horizontal scroll Example</h1>
				<Progress value={33} />
				<div className="flex h-screen w-screen snap-x  snap-center flex-row overflow-auto">
					<div className=" w-screen bg-red-100">First section ? </div>
					<div className="w-screen bg-blue-100">second section ? </div>
					<div className="w-screen bg-green-100">third section ? </div>
					<div className="w-screen bg-yellow-100">four section ? </div>
				</div>
			</div>
			<div>
				<div className="b-50 scroll-box fixed left-10 top-52 h-20 w-20 bg-green-100">this is moving-box..</div>
				<Button>Click</Button>
				<div className="b-10 moving-box top-55 fixed left-1  w-10 bg-slate-200">aa</div>
				<div className="b-10 moving-box fixed left-1 top-60 w-10 bg-slate-200">bb</div>
				<div className="b-10 moving-box fixed left-1 top-52  w-10 bg-gray-200">cc</div>
				<section className="bg-red-100">First section ? </section>
				<section className="second bg-green-100">second section ?
					<div className="box h-10 w-10 bg-yellow-100">box</div>
				</section>
				<section className="bg-blue-100">third section ?
					<div className="box-2 h-10 w-10 bg-yellow-100">box</div></section>
			</div>
		</div>
	)
}

