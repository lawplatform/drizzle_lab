"use client";
import Chatbot_simpble_button from "@/components/chatbot/chatbot_simple_button";
import Image from 'next/image'

import Con_landing_main from "./con_landing_main";
import Layout_max_width_wrapper from "@/src/ui/layout/layout_max_width_wrapper";
import Gi_bpctdt from "@/src/gallery/item/gi_bpctdt";
import Text_menu_title from "@/src/ui/text/text_menu_title_1";
import Text_title_writer from "@/src/ui/text/text_title_writer";
import Gi_hptd from "@/src/gallery/item/gi_hptd";
import Slide_Drag from "@/src/ui/slide/slide_drag";
import C_Basic from "@/src/ui/card/c_Basic";
import Plan from "./plan";
import Main from "./Main";
import C_feature_n_t_d from "@/src/ui/card/c_feature_n_t_d";
import { Glasses, User } from "lucide-react";
import C_pick from "./c_pick";
import C_guide from "./c_guide";
import C_card from "./c_card";
import { useEffect } from "react";
import anime from "animejs";
import C_price_list_button from "./c_price_list";
import SlideShow from "@/src/ui/slide/slide_show";
import Slide_Logo from "@/src/ui/slide/slide_logo/Slide_Logo";
import C_cover_book from "@/src/ui/card/c_cover_book.tsx";
import C_Flip_3d from "@/src/ui/card/c_flip_3d";

const mockData = [
	{ img: "/svg/1.svg", title: "개인회생", des: "파산 절차" },
	{ img: "/svg/2.svg", title: "법률 상담", des: "법률 문제 해결" },
	{ img: "/svg/3.svg", title: "재산 분할", des: "재산 관련 문제 해결" },
	{ img: "/svg/4.svg", title: "사업 계획", des: "사업 관련 상담" },
	{ img: "/svg/5.svg", title: "투자 안내", des: "투자 전략 논의" },
	{ img: "/svg/6.svg", title: "부동산 문제", des: "부동산 거래 상담" },
	{ img: "/svg/7.svg", title: "상속 절차", des: "상속과 관련된 문제 해결" },
	{ img: "/svg/8.svg", title: "이민 상담", des: "이민 절차 안내" },
	{ img: "/svg/9.svg", title: "노동 법률", des: "노동 문제 해결" },
	{ img: "/svg/10.svg", title: "소송 상담", des: "소송 절차 안내" },
	{ img: "/svg/11.svg", title: "세무 상담", des: "세무 문제 해결" },
	{ img: "/svg/12.svg", title: "결혼 상담", des: "결혼 절차 안내" },
	{ img: "/svg/5.svg", title: "교통 사고", des: "교통 사고 처리 안내" },
	{ img: "/svg/3.svg", title: "유산 상속", des: "유산 상속 문제 해결" },
	{ img: "/svg/4.svg", title: "국제 거래", des: "국제 거래 문제 해결" },
	{ img: "/svg/1.svg", title: "헌법 상담", des: "헌법 관련 상담" },
	{ img: "/svg/2.svg", title: "국제 법률", des: "국제 법률 문제 해결" },
	{ img: "/svg/6.svg", title: "상업 계약", des: "상업 계약 상담" },
	{ img: "/svg/4.svg", title: "가족 문제", des: "가족 관련 문제 해결" },
	{ img: "/svg/5.svg", title: "환경 법률", des: "환경 법률 문제 해결" },
	{ img: "/svg/1.svg", title: "특허 상담", des: "특허 등록 절차 안내" },
	{ img: "/svg/7.svg", title: "저작권 상담", des: "저작권 보호 안내" },
	{ img: "/svg/3.svg", title: "의료 소송", des: "의료 소송 상담" },
	{ img: "/svg/9.svg", title: "국내 거래", des: "국내 거래 문제 해결" },
	{ img: "/svg/2.svg", title: "국제 분쟁", des: "국제 분쟁 해결" },
	{ img: "/svg/10.svg", title: "헬스케어 법률", des: "헬스케어 법률 상담" },
	{ img: "/svg/2.svg", title: "토지 분쟁", des: "토지 분쟁 해결" },
	{ img: "/svg/8.svg", title: "퇴직금 문제", des: "퇴직금 처리 상담" },
	{ img: "/svg/4.svg", title: "사회 보장", des: "사회 보장 문제 해결" },
	{ img: "/svg/12.svg", title: "국제 사업", des: "국제 사업 상담" }
];




export default function Page() {
	useEffect(() => {
		let itemAnimation = anime({
			targets: '.item',
			opacity: [0, 1],
			duration: 2000,
			loop: false,
			easing: 'spring(1, 80, 10, 0)',
			delay: anime.stagger(100)
		});

		itemAnimation.play();
	}, [])
	const cards = mockData.map((data, index) => (
		<C_card key={index} img={data.img} title={data.title} des={data.des} />
	));
	return (
		<div>
			<C_Flip_3d />
			<section className="font-noto">
				<Layout_max_width_wrapper className="mb-10 mt-10">
					<Text_menu_title
						title={"오늘의 픽"}
						description={"엄선된 상담 컨텐츠를 만나보세요"}
					/>
					<C_pick></C_pick>
					<div className="mt-10" />
					<Text_menu_title
						title={"자습서"}
						description={"컨썰이 처음이세요?"}
					/>
					<div className="grid grid-cols-2 gap-4">
						<C_price_list_button />
						<C_guide title={"일반"} des={"컨썰을 이용하는 방법을 알려드립니다"} >
							<User />
						</C_guide>
					</div>
					<div className="mt-10" />
					<Text_menu_title
						title={"상담 찾기"}
						description={"다양한 상담가들을 만나보세요"}
					/>
					<div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
						{cards}
					</div>
				</Layout_max_width_wrapper>
			</section>
			<div className="fixed bottom-10 right-10">
				<Chatbot_simpble_button />
			</div>

		</div>
	);
}
