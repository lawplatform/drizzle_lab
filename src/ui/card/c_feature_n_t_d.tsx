interface c_feature_n_t_dProps {
	index: number
	title: string
	discription: string
}

export default function C_feature_n_t_d({ index, title, discription }: c_feature_n_t_dProps) {

	return (
		<div className=" w-full items-start rounded-xl border-black pb-8 pt-4 md:w-1/2 ">
			<div className="mb-5 w-8 text-blue-500">
				<span className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white">{index}</span>
			</div>
			<div>
				<h3 className="font-heading mb-2 text-xl font-semibold">{title}</h3>
				<p className="text-blueGray-400 text-sm leading-loose">{discription}</p>
			</div>
		</div>
	)
}
