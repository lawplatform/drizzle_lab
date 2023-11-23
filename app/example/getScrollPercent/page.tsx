"use client"
import React, { useEffect, useState } from 'react';

export default function Home() {
	const [scrollPercentage, setScrollPercentage] = useState<number>(0);
	const listItems = [1, 2, 6, 7, 20, 50];

	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const currentPercentage = (scrollTop / scrollHeight) * 100;
		setScrollPercentage(currentPercentage);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Determine which list items to display based on the scroll percentage
	const visibleItems = listItems.filter((item) => {
		// Adjust the threshold as needed
		const threshold = 50; // Show items when scrolled 50% of the page
		return scrollPercentage >= threshold;
	});

	return (
		<div>
			<p className='fixed'> Scroll Percentage: {scrollPercentage.toFixed(2)}%</p>

			<section>a</section>
			<section>b</section>
			<section>c</section>
			<section>d</section>
			<section>e</section>
		</div>
	);
};


