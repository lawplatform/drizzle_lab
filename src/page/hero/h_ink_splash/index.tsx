import { useEffect } from 'react'
import './H_ink_splash.css'
import Image from 'next/image'

export default function H_ink_splash() {
	useEffect(() => {
		const maskedImage = document.querySelector(".color-image");
		if (maskedImage) {
			maskedImage.classList.remove("mask-animation");
			setTimeout(() => maskedImage.classList.add("mask-animation"), 500);
		}
	}, [])
	return (
		<div>
			<div className='relative'>
				<img src="/effect/object/monitor-color.png" />
				<img src="/effect/object/monitor-gray.png" className="bottom-51 relative left-0" />
			</div>

			<div className="mask-container ">
				<div className="color-image absolute left-20 top-1 h-screen w-full bg-red-200">rstast</div>
				<img src="/effect/object/monitor-color.png" alt="" />
			</div>
		</div>
	)
}
