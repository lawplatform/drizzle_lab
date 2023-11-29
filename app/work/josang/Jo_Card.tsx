import { ReactNode } from "react";

export default function Jo_Card({ children, title, des }: { children: ReactNode, title: string, des: string }) {
	return (
		<div className="card-moving mb-6 h-[200px] w-full items-center justify-center bg-red-100  px-3 text-center">
			<div className="mx-auto mb-4 items-center justify-center bg-blue-100 pt-5 text-center text-blue-500 ">
				{children}
			</div>
			<h3 className="font-heading mb-2 font-bold">{title}</h3>
			<p className="text-blueGray-400 text-sm">
				{des}
			</p>
		</div>
	)
}
