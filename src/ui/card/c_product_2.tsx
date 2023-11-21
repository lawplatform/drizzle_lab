import { CardFooter } from "@/components/ui/card";
import Image from 'next/image'

export default function C_mini() {
	return (
		<div className="mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md dark:bg-zinc-900">
			<div className="flex items-center justify-between px-6 py-4">
				<div className="flex flex-col items-center">
					<svg
						className=" h-6 w-6 text-blue-500"
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9 18V5l12-2v13" />
						<circle cx="6" cy="18" r="3" />
						<circle cx="18" cy="16" r="3" />
					</svg>
					<h3 className="mx-2 text-sm font-medium text-blue-700 dark:text-gray-200">학습</h3>

				</div>
				<div className="mx-3">
					<p className="text-gray-500 dark:text-gray-400">Vincent van Gogh</p>
				</div>
				<div className="flex items-center">
					<svg
						className=" h-6 w-6 text-red-500"
						fill="red"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
					</svg>
					<svg
						className=" ml-4 h-6 w-6 text-gray-500 dark:text-gray-400"
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
					</svg>
				</div>
			</div>
			<div className="relative">

				<div className="flex flex-col items-center justify-center">
					<Image src="temp/temp.svg" alt={"picture of content"} width={200} height={200} className="mx-auto" />
					<h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">당신의 이름은 무엇입니까? </h3>
					<p className="text-gray-400"> 새로운 당신의 여행을 위한 솔루션 200!</p>
				</div>
			</div>
			<div className="px-6 py-4">
				<div className="flex justify-between">
					<h1 className="font-bold text-blue-500">30분</h1>
					<h1 className="font-bold">$3500</h1>
				</div>
			</div>
		</div>
	)


}
