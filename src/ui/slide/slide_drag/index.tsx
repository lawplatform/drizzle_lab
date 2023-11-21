import React from 'react';
import { useEffect, useRef, useState, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Slide.css'
interface Slide_DragProps {
	children: React.ReactNode;
}
const Slide_Drag: React.FC<Slide_DragProps> = ({ children }) => {
	const childItems = React.Children.map(children, (child: ReactNode, index: number) => (
		<li key={index} >
			<a>{child}</a>
		</li>
	));
	useEffect(() => {
		const tabsList = document.querySelector("#tabs");
		const left = document.querySelector("#left");
		const right = document.querySelector("#right")
		left?.classList.add("hide");
		right?.classList.add("hide");
		const scrollEvt = () => {
			if (tabsList !== null) {
				if (tabsList.scrollLeft >= 30) {
					right?.classList.remove("hide")
					left?.classList.remove("hide")
				} else {
					left?.classList.add("hide")

				}
				let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

				if (tabsList.scrollLeft >= maxScrollValue) {
					right?.classList.add("hide")
				} else {
				}
			}
		}
		tabsList?.addEventListener("scroll", scrollEvt);
		if (right && tabsList && left) {
			right.addEventListener("click", () => {
				tabsList.scrollLeft += 200;
				scrollEvt();
			});
			left.addEventListener("click", () => {
				tabsList.scrollLeft = 0;
				scrollEvt();
			});
		}
	}, [])

	return (
		<div className="mx-auto  flex  w-full flex-row overflow-hidden ">
			<div id="left" className="absolute ">
				<ArrowLeft color="black" />
			</div>

			<ul id="tabs" className="mx-auto flex gap-16 overflow-scroll scroll-smooth  px-6 scrollbar-hide ">
				{childItems}
			</ul>

			<div id="right" className="visible absolute right-0">

				<ArrowRight color="black" />
			</div>
		</div>
	)
}

export default Slide_Drag;
