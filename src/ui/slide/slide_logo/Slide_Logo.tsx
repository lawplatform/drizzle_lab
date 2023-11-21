import React, { useState } from 'react';
import { useEffect } from 'react'
import './Slide_Logo.css'


interface Slide_LogoProps {
	children: React.ReactNode;
	direction: string;
	speed: string;
}
const Slide_Logo: React.FC<Slide_LogoProps> = ({ children, direction }) => {
	const childItems =
		React.Children.map(children, (child, index) => (<li key={index}>{child}</li>));
	useEffect(() => {

		const scrollers = document.querySelectorAll(".scroller");
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}
		function addAnimation() {
			scrollers.forEach((scroller) => {
				scroller.setAttribute("data-animated", "true")
				const Inner = scroller.querySelector(".scroller_inner");
				if (Inner != null) {
					const Content = Array.from(Inner.children);
					Content.forEach((item) => {
						const duplicatedItem = item.cloneNode(true) as HTMLElement;
						duplicatedItem.setAttribute("aria-hidden", "true");
						Inner.appendChild(duplicatedItem);
					})
				}

			})
		}
	}, [])
	return (
		<div className=" scroller isHovered ? 'hovered' : '' my-5 mb-3 w-full overflow-x-hidden" data-speed="slow" data-direction={direction}>
			<ul className="tag-list scroller_inner mx-auto flex h-fit flex-row justify-center gap-3">
				{childItems}
			</ul>
		</div>
	)
}

export default Slide_Logo;
