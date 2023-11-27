import anime from "animejs"
import { useEffect } from "react"

export default function Law_Hero() {
	useEffect(() => {

		const title = anime({
			targets: ".title",
			keyframes: [

				{ translateY: 100, scaleX: +1, scaleY: +1, },
				{ opacity: 100, translateX: -450 },
			],
			duration: 1000,
			autoplay: false,
			easing: 'spring(1, 80, 40, 10)'
		})

		const sub = anime({
			targets: ".sub",
			keyframes: [

				{ translateX: +450, translateY: -20 },
				{ opacity: 100, translateY: 5 },
			],
			duration: 3000,
			autoplay: false,
			easing: 'spring(1, 80, 40, 10)'
		})
		const line = anime({
			targets: ".line",
			keyframes: [
				{ translateX: 1900, opacity: 0 },
			],
			duration: 6000,
			autoplay: false,
			loop: true,
			easing: 'spring(1, 80, 40, 10)',
			delay: anime.stagger(100)
		})
		title.play();
		sub.play();
		line.play();
	}, [])
	return (

		<section>

			<div className="z-10">
				<div>

					<div className="mb-6 pt-56 text-white">
						<h2 className="font-heading title relative mt-4 text-3xl font-bold opacity-5 md:text-8xl">
							Lawplatform
						</h2>
					</div>
					<div className="mb-8 flex justify-center">
						<div className="pl-4">
							<p className=" font-noto sub text-gray-150 max-w-2xl text-xl opacity-5 md:text-2xl">
								창의적이고 혁신적인 디자인으로 사용자 경험을 높이고  디지털 세계에서 현실적이고 매혹적으로 기업의 브랜드를 더욱 강력하게 확장합니다.
							</p>
						</div>
					</div>
				</div >
			</div>
		</section>
	)
}
