import C_info from "@/src/ui/card/C_info";
import C_Basic from "@/src/ui/card/c_Basic";
import C_Profile from "@/src/ui/card/c_Profile";
import C_profile_h from "@/src/ui/card/c_Profile_h";
import C_border_gradation from "@/src/ui/card/c_border_gradation";
import C_calender from "@/src/ui/card/c_calender";
import C_comment from "@/src/ui/card/c_comment";
import C_cover_book from "@/src/ui/card/c_cover_book.tsx";
import C_Flip_3d from "@/src/ui/card/c_flip_3d";
import C_fold from "@/src/ui/card/c_fold";
import C_product from "@/src/ui/card/c_product";
import C_product_1 from "@/src/ui/card/c_product_1";
import C_product_2 from "@/src/ui/card/c_product_2";
import C_reveal_text from "@/src/ui/card/c_reveal_text";
import C_up_tilt from "@/src/ui/card/c_up_tilt";
import C_border_ani from "@/src/ui/card/c_up_tilt/c_boder_ani";
import C_user from "@/src/ui/card/c_user";

export default function Home() {
	return (

		<div className="w-full">
			<div className="flex w-full flex-col">
				<C_cover_book />
				<C_fold />
				<C_up_tilt />
				<C_reveal_text />
			</div>
			<h1>card section collection!</h1>
			<div className="mb-2 grid grid-cols-3">
				<C_profile_h />
				<C_info
					title={"abc"}
					number={100}
					des={"des"}
					color={"red"}
					children={undefined}
				/>
				<C_user />
			</div>
			<div className="grid grid-cols-4 gap-4">
				<C_Basic />
				<C_calender />
				<C_Profile />
				<C_Flip_3d></C_Flip_3d>

			</div>
		</div>
	);
}
