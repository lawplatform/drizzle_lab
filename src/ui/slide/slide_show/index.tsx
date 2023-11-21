'use client'
import './SlideShow.css'
import { useEffect, useRef, useState } from "react";


// .slideshowSlider { transition: ease 1000ms;} 

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export default function SlideShow() {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() => {
				setIndex((prevIndex) =>
					prevIndex === colors.length - 1 ? 0 : prevIndex + 1
				);
			},
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (

		<div className="mx-auto max-w-lg overflow-hidden">
			<div
				className=" transition-ease whitespace-nowrap duration-1000"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{colors.map((backgroundColor, index) => (
					<div
						className="inline-block h-96 w-full rounded-xl"
						key={index}
						style={{ backgroundColor }}
					></div>
				))}
			</div>

			<div className="slideshowDots">
				{colors.map((_, idx) => (
					<div
						key={idx}
						className={`slideshowDot${index === idx ? " active" : ""}`}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</div>
	);
}
