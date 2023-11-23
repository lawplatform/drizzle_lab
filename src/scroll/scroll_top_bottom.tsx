"use client"
import React, { useRef, useEffect } from 'react';
import { Link, Element, scroller } from 'react-scroll';

const ScrollTopBottom: React.FC = () => {
	const wrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const autoScroll = () => {
			const wrap = wrapRef.current;
			if (!wrap) return;

			const children = wrap.children;

			for (let i = 0; i < children.length; i++) {
				const child = children[i] as HTMLElement;
				const rect = child.getBoundingClientRect();

				if (rect.top <= 0 && rect.bottom >= wrap.clientHeight) {
					// Use react-scroll to smoothly scroll to the element
					console.log("smooth move");

					scroller.scrollTo(child.id, {
						duration: 100, // Adjust duration as needed
						smooth: true,
					});
				}
			}
		};

		const wrapElement = wrapRef.current;
		if (wrapElement) {
			wrapElement.addEventListener('scroll', autoScroll);
		}

		return () => {
			if (wrapElement) {
				wrapElement.removeEventListener('scroll', autoScroll);
			}
		};
	}, []);

	return (
		<div id="wrap" ref={wrapRef} className="h-screen overflow-y-scroll border-4 border-gray-600">
			<Element name="a" className="h-screen bg-red-100">
				a
			</Element>
			<Element name="b" className="h-screen bg-blue-100">
				b
			</Element>
			<Element name="c" className="h-screen bg-green-100">
				c
			</Element>
			<Element name="d" className="h-screen">
				d
			</Element>
		</div>
	);
};

export default ScrollTopBottom;

