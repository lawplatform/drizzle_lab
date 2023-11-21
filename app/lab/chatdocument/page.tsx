import { Button } from "@/components/ui/button";
import Chat_document from "@/src/component/chatDocument";
import Sec_feature_step from "@/src/page/section/sec_feature";
import Sec_feature from "@/src/page/section/sec_feature";
import Bg_gra_abstract from "@/src/ui/background/bg_gra_abstract";
import IndicateScroll from "@/src/ui/deco/indicateScroll";
import N_navbar from "@/src/ui/navigation/n_navbar";
import Text_info_1 from "@/src/ui/text/text_info_1";
import Image from "next/image";
export default function ChatDocument() {
	return (
		<div>
			<div className="absolute top-10">
				<IndicateScroll />
			</div>
			<div className="text-center ">
				<Text_info_1 tag={"ai"} msg={"talk yur chat"} />

				<p>arst</p>
				<Button>start</Button>
				<Chat_document />
			</div>
			<div className=" relative mx-auto   h-[400px]  w-[500px] rounded-md  text-center shadow-2xl ">
				<Image
					loading="lazy"
					fill={true}
					src={"/temp/A.png"}
					alt="Sunset in the mountains"
					className="rounded-md object-none p-2 shadow-2xl ring-1 ring-inset sm:p-8"
				/>
			</div>
			<div className="mt-2 text-center">
				<p>Show what is data will be chatted..!</p>
			</div>
			<Sec_feature_step />


			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="mt-16 flow-root sm:mt-24">
					<div className=" relative mx-auto   h-[400px]  w-[500px] rounded-md  text-center shadow-2xl ">
						<Image
							loading="lazy"
							fill={true}
							src={"/temp/A.png"}
							alt="Sunset in the mountains"
							className="rounded-md object-none p-2 shadow-2xl ring-1 ring-inset sm:p-8"
						/>
					</div>
				</div>

			</div>

		</div>

	)
}
