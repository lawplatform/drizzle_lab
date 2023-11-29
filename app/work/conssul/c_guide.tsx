import { ReactNode } from "react"

interface C_guide_prop {
	children: ReactNode
	title: string
	des: string
}

export default function C_guide({ children, title, des }: C_guide_prop) {
	return (
		<div
			className="flex h-32 flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-gray-300/50 p-4 hover:bg-zinc-100 dark:text-gray-200">
			<div className="flex items-center gap-2">
				<span className="text-3xl font-bold text-zinc-700 md:text-4xl">
					{title}
				</span>
				{children}
			</div>
			<span className="text-zinc-350 text-center text-sm font-semibold">
				{des}
			</span>
		</div>
	)
}
