import C_Flip_3d from "@/src/ui/card/c_flip_3d";

const frame_temp = [
	{ translateY: -40 },
	{ translateX: +20 },
	{ translateX: +40 },
	{ translateY: -20 },
	{ translateY: -20 },
];

export default function Law_feature() {
	return (

		<section>

			<div className="watch z-10 pt-20">
				<div>
					<div className="flex flex-col sm:flex-row">
						<div className=" mr-10 text-white">
							<h2 className="font-heading  main relative mt-4 text-3xl  font-bold md:text-8xl">
								Feature..
							</h2>
							<p className=" font-noto text-gray-150 sub max-w-2xl  text-xl md:text-2xl">
								what we are doiarst
							</p>
						</div>

						<div className="gird-cols-1 md: ml-32 mt-12 grid grid-cols-1 gap-10 ">
							<div className="sub">
								<C_Flip_3d />
							</div>
							<div className="sub">
								<C_Flip_3d />
							</div>
							<div className="sub">
								<C_Flip_3d />
							</div>
						</div>
					</div>
				</div >
			</div>
		</section >


	)
}
