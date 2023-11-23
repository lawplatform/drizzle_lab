import React, { useEffect, useRef } from 'react';

const YourComponent: React.FC = () => {
	const animationDuration = 1000; // Adjust the animation duration as needed
	let anim: any; // Assuming the type of anim, update it as per your needs
	let isScrolling: any; // Assuming the type of isScrolling
	let actualScroll = 0;
	let second = 0;

	const getMaxScrollPosition = () => {
		// Implement your logic to get the maximum scroll position
		return 100; // Replace with the actual maximum scroll position
	};

	const checkProject = () => {
		// Implement your logic for checking the project
	};

	const handleScroll = () => {
		const scrolledVal = window.scrollY;

		if (anim) {
			anim = window.scene.getAnimationGroupByName("CameraRig.Camera_Anim");

			if (scrolledVal > 0.01) {
				anim.enableBlending = true;
				anim.blendingSpeed = 0.01;
				second = (scrolledVal / getMaxScrollPosition()) * animationDuration;
				anim.start(false, 1, second, second, false);
			}

			window.clearTimeout(isScrolling);
			actualScroll = scrolledVal;

			console.log('SCROLL: ' + scrolledVal + '\nSECOND: ' + second); // Display in the console

			checkProject();
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			// Cleanup: remove the event listener when the component unmounts
			window.removeEventListener('scroll', handleScroll);
		};
	}, [anim]);

	return (
		<div>
			{/* Your component JSX */}
		</div>
	);
};

export default YourComponent;
