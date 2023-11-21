"use client"
import React, { useEffect, useState } from 'react';
import './indicateScroll.css';

const IndicateScroll = () => {
	const [scrollWidth, setScrollWidth] = useState(0);

	useEffect(() => {
		const updateProgressBar = () => {
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = (window.scrollY / scrollHeight) * 100;
			setScrollWidth(scrolled);
		};

		window.addEventListener('scroll', updateProgressBar);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', updateProgressBar);
		};
	}, []);

	return (
		<div
			id="progress-bar"
			style={{ width: `${scrollWidth}%` }}
			className="transition-width fixed left-0 top-0 h-1 bg-blue-500 duration-300 ease-in-out"
		></div>
	);
};

export default IndicateScroll;
