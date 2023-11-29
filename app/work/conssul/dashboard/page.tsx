"use client"
import Layout_max_width_wrapper from "@/src/ui/layout/layout_max_width_wrapper";
import clsx from "clsx";
import { Bell, Database, Home, MessagesSquare, Settings, User2 } from "lucide-react";
import Link from "next/link";

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
	return (
		<div className="mx-auto h-screen w-full max-w-screen-lg px-2.5 md:px-20">
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
				<div className="lg:border-1 col-span-3 h-screen bg-green-100 lg:col-span-4">
					center

				</div>
			</div>
		</div>
	)
}
