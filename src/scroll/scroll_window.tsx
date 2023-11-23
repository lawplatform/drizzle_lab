"use client"
import React, { useEffect, useRef } from 'react';

const Scroll_window = () => {
	// Determine the number of sections
	const numberOfSections = 6;
	const sectionHeight = `${100 / numberOfSections}vh`;
	// Generate the section list based on the number of sections
	const sectionList = Array.from({ length: numberOfSections }, (_, index) => (index + 1) * 100 / numberOfSections);

	const prevScrollY = useRef(0);

	useEffect(() => {
		// Get the document height
		const documentHeight = document.documentElement.scrollHeight;

		// Add an event listener for scroll events
		const handleScroll = () => {
			// Get the current scroll position
			const scrollY = window.scrollY;

			// Determine the scroll direction
			const scrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';

			// Update the previous scroll position
			prevScrollY.current = scrollY;

			// Check if the user is at the top or bottom of the document
			const atBottom = window.innerHeight + scrollY >= documentHeight;
			const atTop = scrollY === 0;

			// If not at the top or bottom, and the scroll direction is down, find the next section
			if (!atBottom && !atTop && scrollDirection === 'down') {
				for (const sectionValue of sectionList) {
					const sectionThreshold = documentHeight * (sectionValue / 100);

					// If the user has reached the section threshold, scroll to the next section
					if (scrollY >= sectionThreshold) {
						const nextSectionIndex = sectionList.indexOf(sectionValue) + 1;
						const nextSectionValue = sectionList[nextSectionIndex];

						if (nextSectionValue !== undefined) {
							const nextSectionThreshold = documentHeight * (nextSectionValue / 100);

							// Scroll to the next section with a smooth behavior (using CSS for duration)
							window.scroll({
								top: nextSectionThreshold,
								behavior: 'smooth',
							});
						}
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sectionList]);


	return (
		<div>
			{/* Your React component content goes here */}
			<section>1</section>
			<section>1</section>
			<section>1</section>
			<section>1</section>
			<section>1</section>
			<section>1</section>
		</div>
	);
};

export default Scroll_window;

