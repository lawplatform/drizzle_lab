import Lan_ltri_1 from "@/src/page/landing/basic/lan_ltri_1";
import W_Scroll_Horizontal from "@/src/ui/wrapper/W_Scroll_Horizontal.tsx";
import Jo_B_ScrollSync from "./Jo_B_ScrollSync";
import Jo_canvas from "./Jo_canvas";
import Jo_hero from "./Jo_hero";
import C_up_tilt from "@/src/ui/card/c_up_tilt";
import Jo_moving_box from "./Jo_moving_box";
import anime from "animejs";
import Jo_moving_text from "./Jo_moving_text";
import Jo_moving_box_2 from "./Jo_moving_box_2";
export default function home() {


	return (

		<div>
			<div className="z-5">
				<Jo_canvas />
			</div>
			<section className="h-screen">
				<div>
					<Jo_moving_box />
					<h1 className="text-7xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-6xl">JOSANG 365</h1>
					<p className="mt-6 max-w-[500px] text-lg font-medium text-zinc-100 md:text-xl lg:text-2xl xl:max-w-lg xl:leading-snug 2xl:text-indigo-100"> find your city find your tresure</p>

				</div>
			</section>
			<section className="z-6 h-screen">
				<Jo_moving_box_2 />
				<h1 className="text-7xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-6xl">featuer</h1>
				<p className="mt-6 max-w-[500px] text-lg font-medium text-zinc-100 md:text-xl lg:text-2xl xl:max-w-lg xl:leading-snug 2xl:text-indigo-100"> find your city find your tresure</p>

			</section>
			<section className="h-screen">
				<h1 className="text-7xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-6xl">Vision</h1>
				<p className="mt-6 max-w-[500px] text-lg font-medium text-zinc-100 md:text-xl lg:text-2xl xl:max-w-lg xl:leading-snug 2xl:text-indigo-100"> find your city find your tresure</p>


			</section>
			<section className="z-10 h-screen">
				<h1 className="text-7xl font-bold text-black sm:text-4xl lg:text-5xl xl:text-6xl">Contact</h1>
				<p className="mt-6 max-w-[500px] text-lg font-medium text-zinc-100 md:text-xl lg:text-2xl xl:max-w-lg xl:leading-snug 2xl:text-indigo-100"> find your city find your tresure</p>


			</section>
			<section className="h-screen">f</section>


		</div>
	)
}
