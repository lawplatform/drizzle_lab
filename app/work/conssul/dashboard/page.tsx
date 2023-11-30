"use client"
import Layout_max_width_wrapper from "@/src/ui/layout/layout_max_width_wrapper";
import clsx from "clsx";
import { Bell, BookMinus, Database, DollarSign, Heart, Home, MessagesSquare, Settings, User2 } from "lucide-react";
import Link from "next/link";
import List_Reservation from "./List_Reservation";
import C_info from "@/src/ui/card/C_info";
import Text_menu_title from "@/src/ui/text/text_menu_title_1";
import anime from "animejs";
import { useEffect } from "react";

const NAVIGATION_ITEMS = [
	{
		title: "홈",
		icon: Home,
		link: "/dashboard",
	},
	{
		title: "프로필",
		icon: User2,
		link: "/dashboard/profile"
	}, {
		title: "상담공간",
		icon: MessagesSquare,
		link: "/dashboard/chat"
	},

	{
		title: "알림",
		icon: Bell,
		link: "/dashboard/info"
	},
	{
		title: "설정",
		icon: Settings,
		link: "/dashboard/settings"
	}, {
		title: "자료실",
		icon: Database,
		link: "/dashboard/store"
	}
];

export default function page() {
	const pathname = "home"
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
		<div className="mx-auto h-screen w-full max-w-screen-xl px-2.5 md:px-20 ">
			<div className="grid lg:grid-cols-5">
				<div>
					{NAVIGATION_ITEMS.map((item, index) => (
						<Link
							className="hover:scale-102 flex items-center justify-start space-x-2   p-4 transition duration-300 ease-in-out hover:bg-gray-50 hover:text-black"
							href={item.link}
							key={item.title}
						>
							<div key={index} className="flex flex-row">
								<item.icon />
								<p className="pl-3"> {item.title}</p>
							</div>

						</Link>
					))
					}
				</div>
				<div className="lg:border-1 col-span-3 mt-10 h-screen lg:col-span-4">
					<Text_menu_title
						title={"❤️ 정리"}
						description={"현재 나의 상태는"}
					/>

					<div className="flex flex-row">
						<C_info title={"선호"} number={122} des={"예약한 일람을 표시합니다"} color={"#DC8686"}>
							<Heart />
						</C_info>
						<C_info title={"수익"} number={5234} des={"예약한 일람을 표시합니다"} color={"#F0DBAF"}>
							<DollarSign />
						</C_info>
						<C_info title={"예약"} number={84} des={"예약한 일람을 표시합니다"} color={"#7ED7C1"}>
							<BookMinus />
						</C_info>
					</div>
					<div className="mt-10">
						<Text_menu_title
							title={"📅 예약"}
							description={"오늘의 스케줄입니다"}
						/>
					</div>
					<List_Reservation></List_Reservation>

				</div>
			</div>
		</div>
	)
}
