import Info_404 from "@/src/page/info/info_404";
import Sec_contact from "@/src/page/section/sec_contact";
import Sec_content_blog from "@/src/page/section/sec_content_blog";
import Sec_feature_4des from "@/src/page/section/sec_feature_4des";
import Sec_introduce from "@/src/page/section/sec_introduce";
import C_business_card from "@/src/ui/card/c_business_card";
export default function Home() {
	return (
		<div>
			<div>
				<Sec_introduce />
			</div>
			<div className="mb-2">
				<Sec_contact />
			</div>
			<div className="h-screen">
				<Sec_feature_4des />

			</div>
		</div>
	);
}
