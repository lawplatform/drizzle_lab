"use client"
import C_feature_n_t_d from "@/src/ui/card/c_feature_n_t_d";
import C_info_circleIcon from "@/src/ui/card/c_info_circleIcon";
import Lenis from "@studio-freight/lenis";
import anime from "animejs";
import { FileText, Glasses, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import C_card from "../conssul/c_card";
import Jo_Card from "./Jo_Card";
import C_Basic from "@/src/ui/card/c_Basic";
export default function Jo_moving_box_2() {
	const lenis = new Lenis();
	function raf(time: any) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)

	useEffect(() => {
		const green = anime({
			targets: "scroll-box-1",
			keyframes: [

				{ translateX: 200 },
				{ translateX: 100 },
				{ translateY: 10 },
				{ translateX: -1500 }
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
		<div className="fixed">
			<div className="scroll-box-1 fixed">
				<C_Basic title={"상담"} des={"24시간 열린 서비스"} content={"빠른 상담이 가능 "} footer={""}></C_Basic>
			</div>
			<div className="scroll-box-1 fixed">
				<C_Basic title={"상담"} des={"24시간 열린 서비스"} content={"빠른 상담이 가능 "} footer={""}></C_Basic>
			</div>
			<div className="scroll-box-1 fixed">
				<C_Basic title={"상담"} des={"24시간 열린 서비스"} content={"빠른 상담이 가능 "} footer={""}></C_Basic>
			</div>
		</div>
	)
}
