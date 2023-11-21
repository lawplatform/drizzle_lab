import Layout_row_title_desrcription from "@/src/ui/layout/layout_row_horizontal";
import Text_quotes from "@/src/ui/text/text_quotes";
import Text_tag_date from "@/src/ui/text/text_tag_date";
import Text_title_writer from "@/src/ui/text/text_title_writer";
import Link from "next/link";

export default function Sec_introduce() {
	return (
		<>
			<Layout_row_title_desrcription>
				<div className="mx-auto flex flex-col justify-center">
					<Text_tag_date category={"Bussiness"} date={"24 Jan, 2021"} />
					<Text_title_writer
						title={"Best Tailwind CSS template for your SASS landing site"} name={"Alice Bradley"} position={"Co Founders"} profileImg={"/profile/avatar.png"} />

				</div>
				<div className="w-full  pl-2" >
					<p className="text-blueGray-400 mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>
					<Text_quotes name={"kim"} description={"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."} position={"@kim"} />
					<p className="text-blueGray-400 mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>
				</div>

			</Layout_row_title_desrcription>


		</>
	)
}	
