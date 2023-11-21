import Li_step_title_des from "@/src/ui/list/item/li_step_title_des";

export default function Sec_feature_step() {
	return (
		<div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
			<div className="lg:px-78 mb-12 px-6">
				<div className="sm:text-ceter mx-auto max-w-2xl">
					<h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
						Start Chatting in minute
					</h2>
					<p className="mt-4 text-lg text-gray-500">
						Chatting your pdf

					</p>
				</div>
			</div>

			<ol className="mx-2 my-8 space-y-4 pt-8 sm:mx-5 md:flex md:space-x-12 md:space-y-0">				<Li_step_title_des step={"step 1"} title={"sign in "} des={"singin"} />
				<Li_step_title_des step={"step 2"} title={"uploading"} des={"up loading your pdf"} />
				<Li_step_title_des step={"step 3"} title={"converting"} des={"converting your pdf"} />
			</ol>
		</div>
	)
}
