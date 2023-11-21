import React, { useState, useEffect } from 'react';

const NumberAnimation = ({ value }) => {
	const [currentValue, setCurrentValue] = useState(0);

	const easeOut = (t) => 1 - Math.pow(1 - t, 3);

	useEffect(() => {
		const animationDuration = 1000; // in milliseconds
		const frames = 60;
		const interval = animationDuration / frames;

		let frame = 0;
		const incrementInterval = setInterval(() => {
			if (frame < frames) {
				const t = frame / frames;
				setCurrentValue(Math.round(value * easeOut(t)));
				frame++;
			} else {
				setCurrentValue(value);
				clearInterval(incrementInterval);
			}
		}, interval);

		return () => {
			clearInterval(incrementInterval);
		};
	}, [value]);

	return <div>{currentValue}</div>;
};

export default NumberAnimation;

