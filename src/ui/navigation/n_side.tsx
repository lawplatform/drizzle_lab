"use client"
import { Bell, Database, DoorOpen, Hash, Home, Mail, Settings, User2, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo_Symbol } from "../Logo";
import { clsx } from 'clsx';
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
export default function N_vertical() {
	const pathname = usePathname();
	return (
		<section className=" fixed left-0  top-0 h-screen  w-20 flex-col  px-3 py-10 shadow-md">
			<div className="absolute  left-5 top-0">
				<Logo_Symbol color={"black"} />
			</div>
			{NAVIGATION_ITEMS.map((item, index) => (
				<Link
					className={clsx('hover:scale-102 flex items-center justify-start space-x-2   p-4 transition duration-300 ease-in-out hover:bg-gray-50 hover:text-black', {
						'bg-sky-100 text-blue-600': pathname === item.link,
					},)}
					href={item.link}
					key={item.title}
				>
					<div key={index}>
						<item.icon />
					</div>

				</Link>
			))
			}
		</section >
	);
}
