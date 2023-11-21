"use client"
//useInview를 활용한 스크롤 테스트. 그러나 잘 되지 않았다. 
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
export default function ReactInviewStudy() {
	const { ref, inView, entry } = useInView();
	useEffect(() => {
		console.log("yuo see me");

	}, [inView])
	return (
		<div ref={ref}>hey</div>

	)
}
