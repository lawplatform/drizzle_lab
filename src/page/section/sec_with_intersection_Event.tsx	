import anime from "animejs";
import { useEffect } from "react";



export default function Sec_with_intersection() {
	useEffect(() => {
		const box = document.querySelector('.box');
		const aniBox = anime({
			targets: ".box",
			keyframes: [
				{ translateY: 40 },
				{ rotateX: 250 },
				{ translateX: 40 },
				{ translateY: 20 },
				{ translateY: 20 }
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
	}, [])
	return (
		<div className="mb-8 mt-5 flex flex-col justify-center sm:w-1/2 sm:pr-16 md:mt-0 md:w-7/12">
			<p className="mb-2 text-left text-sm font-semibold uppercase leading-none text-indigo-600">Drag-n-drop design</p>
			<h3 className="box mt-2 text-2xl sm:text-left md:text-4xl">Design Made Easy</h3>
			<p className="text mt-5 text-lg text-gray-700 md:text-left">Crafting your user experience has never been easier, with our intuitive drag'n drop interface you will be creating beatiful designs in no time.</p>
		</div>
	)
}
