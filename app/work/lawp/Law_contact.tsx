import F_contact from "@/src/ui/form/F_Contact";
import Text_info_1 from "@/src/ui/text/text_info_1";

export default function Law_section_1() {
	return (

		<section>

			<div className="z-10">
				<div>

					<div className="mb-6 pt-56 text-white">
						<h2 className="font-heading title relative mt-4 text-3xl font-bold md:text-8xl">
							Contact
						</h2>
					</div>
					<div className="mb-8 flex justify-center">
						<div className="pl-4">
							<p className=" font-noto sub text-gray-150 max-w-2xl text-xl opacity-5 md:text-2xl">
								Contact for ani Service , ani asking
							</p>
						</div>

					</div>
					<F_contact />
				</div >
			</div>
		</section>


	)
}
