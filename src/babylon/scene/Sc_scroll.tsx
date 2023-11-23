"use client"
import "./Sc_scroll.css";
import { useEffect } from "react";

const sectionNumber = 6;

function scrollToAnimated(element: HTMLElement, to: number, duration: number) {
	var start = element.scrollTop;
	var distance = Math.abs(to - start);
	var startTime = performance.now();

	function animateScroll() {
		var time = performance.now() - startTime;
		var percentage = Math.min(time / duration, 1);

		element.scrollTop = start + (to - start) * percentage;

		if (percentage < 1) {
			requestAnimationFrame(animateScroll);
		}
	}

	requestAnimationFrame(animateScroll);
}

export default function Sc_scroll() {
	useEffect(() => {
		const sections = document.querySelectorAll(".sc") as NodeListOf<HTMLElement>;
		const wrap = document.querySelector(".wrap")
		wrap.addEventListener('wheel', function(event) {
			sections.forEach((section: HTMLElement) => {
				const rect = section.getBoundingClientRect();

				if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
					// Section is currently visible
					console.log("Currently section: visible", section.textContent);

					// You can now get the top position of the visible section using rect.top
					const topPosition = rect.top;
					console.log("Top position:", topPosition);

					// Perform any action based on the currently visible section
				}
			});
		});

		// Cleanup function to remove the event listener when the component is unmounted
		return () => {
			document.removeEventListener('wheel', function(event) {
				// Remove the wheel event listener
			});
		};
	}, []);

	return (
		<div id="sc" className="wrap h-full bg-red-100 px-10">
			<section className="sc h-screen">aar!</section>
			<section className="sc h-screen">br</section>
			<section className="sc h-screen">cr</section>
			<section className="sc h-screen">dr</section>
			<section className="sc h-screen">er</section>
			<section className="sc h-screen">fr</section>
		</div>
	);
}

