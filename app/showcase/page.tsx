import Text_menu_title from "@/src/ui/text/text_menu_title_1";
import Text_title_writer from "@/src/ui/text/text_title_writer";

export default function Home() {
	return (
		<div>
			<Text_menu_title title={"landingpage"} description={"landign page for section"}></Text_menu_title>
			<Text_title_writer title={"new way to this"} name={"kim"} position={"ceo"} profileImg={"/temp/A.png"}></Text_title_writer>

			<Text_menu_title title={"management"} description={"landign page for section"}></Text_menu_title>

			<Text_menu_title title={"chatting"} description={"landign page for section"}></Text_menu_title>
		</div>
	)
}
