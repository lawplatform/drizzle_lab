import C_reveal_text from "@/src/ui/card/c_reveal_text";

export default function C_pick() {
	return (
		<div className="mt-90 grid grid-cols-1">
			<div className="col-span-2  grid h-full grid-cols-6   gap-2  ">
				<div className=" col-span-3 max-h-[14rem] overflow-hidden rounded-xl">
					<C_reveal_text
						img={"/temp/A.png"}
						title={"이런상담"}
						description={"저런 상담"}
					/>

					<C_reveal_text
						img={"/temp/A.png"}
						title={"이런상담"}
						description={"저런 상담"}
					/>
				</div>
				<div className=" col-span-3 max-h-[14rem] overflow-hidden rounded-xl">
					<C_reveal_text
						img={"/temp/A.png"}
						title={"이런상담"}
						description={"저런 상담"}
					/>
				</div>
				<div className=" col-span-2 max-h-[10rem] overflow-hidden rounded-xl">
					<C_reveal_text
						img={"/temp/A.png"}
						title={"이런상담"}
						description={"저런 상담"}
					/>
				</div>
				<div className=" col-span-2 max-h-[10rem] overflow-hidden rounded-xl">
					<C_reveal_text
						img={"/temp/A.png"}
						title={"이런상담"}
						description={"저런 상담"}
					/>
				</div>
				<div className="relative col-span-2 max-h-[10rem] overflow-hidden rounded-xl">
					<div className="absolute inset-0 z-20 flex  items-center justify-center bg-slate-900/80 text-xl text-white">
						+ 23
					</div>
					<C_reveal_text
						img={"/temp/A.png"}
						title={"이런상담"}
						description={"저런 상담"}
					/>
				</div>
			</div>
		</div>
	);
}
