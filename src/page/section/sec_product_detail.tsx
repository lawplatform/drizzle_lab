"use client"
import { Button } from "@/components/ui/button"
import Star from "../ui/symbol/Star"
export default function Sec_product_detail() {
	return (
		<div className=" bg-red-100 md:max-w-6xl">
			<section className=" py-12 md:py-24 lg:py-32">
				<div className=" flex flex-col items-center gap-8 bg-yellow-200 px-1 ">
					<div className="flew-row flex w-full justify-between bg-zinc-300 px-3">
						<h1 className="items-center text-start text-2xl font-bold  sm:text-3xl">이롭게 하는 교육상담! </h1>
						<Star evt={() => console.log("I'm clicked")} />
					</div>
					<img
						alt="Sneaker Image"
						className="mx-auto aspect-[1/1] rounded-lg border-2 object-cover object-center p-2"
						height="100"
						src="/temp/temp.svg"
						width="400"
					/>
					<div className="space-y-6 bg-blue-100">

						<div className="h-screen bg-green-100">
							<p className="text-base text-zinc-500 dark:text-zinc-400">
								These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
								high-quality materials, they are designed to last.
							</p>
						</div>
						<div className="flex  items-center justify-end bg-green-100">
							<div className="ml-4 space-y-1">
								<p className="text-start text-sm font-medium leading-none">Olivia Martin</p>
								<p className="text-start text-sm text-muted-foreground">교육전문</p>

							</div>
							<span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
								<img className="aspect-square h-full w-full" alt="Avatar" src="/profile/avatar.png" />
							</span>



						</div>
					</div>
					<p className="text-1 text-start font-semibold text-zinc-900 dark:text-zinc-50">￦2500 / 30분 </p>
					<p className="text-xs text-zinc-500 dark:text-zinc-400">
						주의 : 거래시 주의 문구에 대한 설명..!
					</p>

					<div className="mb-12">this is footer</div>
				</div >
				<Button className="mx-auto hidden h-12 w-1/4 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900 sm:block">
					신청하기!
				</Button>
				<div className="fixed bottom-2 h-12 w-full sm:hidden sm:w-40 ">
					<Button className="h-12 w-full rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
						신청하기!?...
					</Button>
				</div>
			</section >
		</div >
	)
}

