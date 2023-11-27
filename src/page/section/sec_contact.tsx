import F_contact from "@/src/ui/form/F_Contact";
import Layout_row_title_desrcription from "@/src/ui/layout/layout_row_horizontal";
import Text_info_1 from "@/src/ui/text/text_info_1";
import Text_menu_title from "@/src/ui/text/text_menu_title_1";

export default function Sec_contact() {
	return (
		<div>
			<section className="py-20">
				<div className="main left-30 relative top-[350px]  w-20 bg-green-200">moving moving</div>
				<div className="sub relative left-60 top-[450px]  w-20 bg-blue-200">moving moving</div>
				<div className="w-full">
					<Text_menu_title title={"how"} description={"ismine"} />
					<Layout_row_title_desrcription>
						<div>arstrstarst;</div>
						<div className="px-5"><F_contact /></div>
					</Layout_row_title_desrcription>
				</div>

			</section>
		</div>



	)
}
