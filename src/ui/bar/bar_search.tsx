import { Input } from "@/components/ui/input"

export default function Bar_Search() {
	return (
		<div className="relative w-full md:w-80">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
			<Input type="text" placeholder="검색" className="pl-12 pr-4" />
		</div>
	)
}
