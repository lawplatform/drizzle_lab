"use client"
import anime from "animejs";
import { useEffect, useState } from "react";
import Jo_Card from "./Jo_Card";
import { FileText, Glasses, MessageCircle } from "lucide-react";


const aniMain = anime({
	targets: ".card-moving",
	keyframes: [
		{ translateX: 100 },
		{ translateY: 40 },
		{ translateX: 50 },
		{ translateY: 65 }
	],
	duration: 3000,
	autoplay: false,
	delay: anime.stagger(100),
})


export default function Jo_moving_text({ step }: { step: number }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const sec = document.getElementById("sec");
	useEffect(() => {
		aniMain.play();
		const handleScroll = (event) => {
			if (sec != null) {
				sec.style.display = "block";
			}

			//get current mouse posistion 
			const setScrollVar = () => {
				const htmlElement = document.documentElement;
				const percentOfScreen = (htmlElement.scrollTop / (htmlElement.scrollHeight - htmlElement.clientHeight)) * 100;
				//aniMain.seek(aniMain.duration * (percentOfScreen / 100));

			}
			window.addEventListener("scroll", setScrollVar)
			window.addEventListener("resize", setScrollVar)


		}
	}, [
	])

	return (
		<div id="sec" className="mx-1">
			<Jo_Card title={"빠른 검색"} des={"친절하고 빠르게"} >
				<Glasses />
			</Jo_Card>
			<Jo_Card title={"Database"} des={"전국 유일의 데이터베이스"} >
				<FileText />
			</Jo_Card>
			<Jo_Card title={"상담 서비스"} des={"전담 직원이 도와드립니다"} >
				<MessageCircle />
			</Jo_Card>
		</div>

	)
}
