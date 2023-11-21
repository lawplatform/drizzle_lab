"use client"
import { ReactNode, useRef } from 'react';
import React from 'react';
interface Scroll_Horizontal_Section_Props {
	children: React.ReactNode;
}
const W_Scroll_Horizontal: React.FC<Scroll_Horizontal_Section_Props> = ({ children }) => {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				top: 0,
				left: e.deltaY,
				behavior: 'smooth',
			});
		}
	}
	const childItems =
		React.Children.map(children, (child, index) =>
			(<section className='w-full flex-shrink-0 snap-start'>{child}</section>));


	return (
		<div
			ref={scrollContainerRef}
			className="flex overflow-y-auto overflow-x-scroll scrollbar-hide"
			onWheel={handleScroll}
			style={{ scrollSnapType: 'x mandatory' }}
		>
			{childItems}
		</div>
	)
}
export default W_Scroll_Horizontal
