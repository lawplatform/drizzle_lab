import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import C_price from "./c_price";
import { Button } from "@/components/ui/button";
import C_guide from "./c_guide";
import { Glasses } from "lucide-react";

export function C_price_list() {
	return (
		<div className="h-[700px] w-full overflow-y-scroll scrollbar-hide">
			<div className=" flex-wrap">

				<div className="mx-auto  mb-20 text-center ">
					<div>
						<span className="mb-2  text-lg font-semibold text-primary">
							conssul에 가입하세요
						</span>
						<h2 className="text-dark mb-4 text-3xl font-bold"
						>
							요금제 비교
						</h2>
						<p className="text-body-color text-base">
							더 빠르게 더 좋게
						</p>
					</div>
				</div>
				<div className=" flex flex-wrap justify-center">
					<div className="w-full">
						<C_price type={"기본"} price={4500} benefit={undefined} />
						<C_price type={"프리미엄"} price={7200} benefit={undefined} />
						<C_price type={"엔터프라이즈"} price={9900} benefit={undefined} />
					</div>
				</div>
			</div>
		</div>
	)
}


export default function C_price_list_button() {

	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="h-full w-full">

						<C_guide title={"상담가"} des={"상담 공감을 만드는 법을 알려드려요"} >
							<Glasses />
						</C_guide>


					</Button>
				</DialogTrigger>
				<DialogContent className="w-[1900px]">
					<DialogHeader>
						<DialogTitle>plan</DialogTitle>
						<DialogDescription>
							컨썰의 서비스를 이용해 보세요
						</DialogDescription>
					</DialogHeader>
					<div className="w-[500 px]">
						<C_price_list />
					</div>

				</DialogContent>
			</Dialog>

		</div>

	)
}
