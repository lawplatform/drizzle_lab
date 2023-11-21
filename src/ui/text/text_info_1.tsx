interface Text_info_1_props {
	tag: string;
	msg: string;
}
export default function Text_info_1({ tag, msg }: Text_info_1_props) {
	return (
		<div className="mx-auto mb-8 max-w-md">
			<span className="wow animate__animatedanimated animate__fadeIn inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600" data-wow-delay=".1s">
				{tag}
			</span>
			<h2 className="font-heading mt-2 text-4xl font-bold" >
				{msg}
			</h2>
		</div>
	)
}
