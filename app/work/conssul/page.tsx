"use client";
import Chatbot_simpble_button from "@/components/chatbot/chatbot_simple_button";

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

	return (
		<div>
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
						<C_guide title={"상담가"} des={"상담 공감을 만드는 법을 알려드려요"} >
							<Glasses />
						</C_guide>
						<C_guide title={"일반"} des={"컨썰을 이용하는 방법을 알려드립니다"} >
							<User />
						</C_guide>
					</div>
					<div className="mt-10" />
					<Text_menu_title
						title={"product"}
						description={"what is popular conssult?"}
					/>
					<div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5">
						<C_card img={"/temp/A.png"} title={"개인회생"} des={"파산 절차"} />
						<C_card img={"/temp/A.png"} title={"개인회생"} des={"파산 절차"} />
						<C_card img={"/temp/A.png"} title={"개인회생"} des={"파산 절차"} />
						<C_card img={"/temp/A.png"} title={"개인회생"} des={"파산 절차"} />
						<C_card img={"/temp/A.png"} title={"개인회생"} des={"파산 절차"} />
					</div>
				</Layout_max_width_wrapper>
			</section>
			<div className="fixed bottom-10 right-10">
				<Chatbot_simpble_button />
			</div>
		</div>
	);
}
