"use client"
import C_feature_n_t_d from "@/src/ui/card/c_feature_n_t_d";
import C_info_circleIcon from "@/src/ui/card/c_info_circleIcon";
import Lenis from "@studio-freight/lenis";
import anime from "animejs";
import { Glasses } from "lucide-react";
import { useEffect } from "react";
import C_card from "../conssul/c_card";
export default function Jo_moving_box() {
	const lenis = new Lenis();
	function raf(time: any) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	useEffect(() => {
		const green = anime({
			targets: ".scroll-box",
			keyframes: [

				{ translateY: 1100 },
				{ translateY: 100 },
				{ translateY: -100 },
				{ translateX: -550 }
			],
			duration: 3000,
			autoplay: false,
			delay: anime.stagger(100) // increase delay by 100ms for each elements.
		})

		//get current mouse posistion 
		const setScrollVar = () => {
			const htmlElement = document.documentElement;
			const percentOfScreen = (htmlElement.scrollTop / (htmlElement.scrollHeight - htmlElement.clientHeight)) * 100;
			green.seek(green.duration * (percentOfScreen / 100));

		}
		window.addEventListener("scroll", setScrollVar)
		window.addEventListener("resize", setScrollVar)


	}, [])
	return (
		<div className="scroll-box fixed h-5 w-5 bg-red-100">
			<div className="scroll-box">
				<C_feature_n_t_d index={1} title={"A"} discription={"B"} />
			</div>
			<div className="scroll-box">
				<C_feature_n_t_d index={2} title={"A"} discription={"B"} />
			</div>
			<div className="scroll-box">
				<C_feature_n_t_d index={3} title={"A"} discription={"B"} />
			</div>
		</div >

	)
}
