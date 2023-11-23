import { useEffect } from "react";
import "./sc_scroll.css";

function updateScroll() {

}
export default function Home() {
	let targetScroll;
	let animationFrameRequseted;
	useEffect(() => {
		window.addEventListener('scroll', () => {
			targetScroll = window.pageYOffset;
			updateScroll();

			const scrollArea = document.querySelector('.scroll-area')
			const scrollAreaRect = scrollArea?.getBoundingClientRect();
			const canvasContainer = document.querySelector('.canvas-container') as HTMLElement;
			const textContainer = document.querySelector('.text-container')

			if (!scrollAreaRect) { return }
			if (scrollAreaRect.bottom <= window.innerHeight) {
				canvasContainer.style.opacity = '0';

				//animation stop
			} else {
				//animation play

				if (!animationFrameRequested) {
					requestAnimationFrame(animate);
					animationFrameRequested = true;
				}

			}
		})
	})
	return (
		<div className="wrapper">
			<div className="text-container">

			</div>
			<div className="canvas-container">

			</div>
			<div className="scroll-area">
				<div className="more-content">

				</div>
			</div>

		</div>
	)
}
