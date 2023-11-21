import Gi_bpctdt from "@/src/gallery/item/gi_bpctdt";
import Info_sign_currentPage from "@/src/page/info/info_sign_currentPage";
import Info_subscribe from "@/src/page/info/info_subscribe";
import Lan_ltri_1 from "@/src/page/landing/basic/lan_ltri_1";
import Sec_contact from "@/src/page/section/sec_contact";
import ReactTypingEffectDemo from "@/src/ui/effect/textEffect";

export default function Home() {
	return (
		<div>

			<p className="text-red-200">this is test</p>
			<p className="text-mainColor-200">this is test</p>
			<Info_subscribe />
			<Sec_contact />
			<Info_sign_currentPage title={"소개"} parent={"홈"} currentPath={"소개"} />
			<Lan_ltri_1 description={"htht"} img={"/landing/landing_1.png"} >
				<>새로운 이야기  <span className="text-blue-500">사람</span>, 그리고 미래</>
				<>우리는 만듭니다  <strong className="text-blue-500">꿈과 </strong>,희망을 노래합니다 </>
				<>새로운 이야기 새운 사람이 함께 꿈꾸는 미래를 꿈꿉니다 </>
			</Lan_ltri_1>
		</div>
	)
}
