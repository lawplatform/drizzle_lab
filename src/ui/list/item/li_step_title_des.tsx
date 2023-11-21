


interface ILi_step_title_des {
	step: string
	title: string
	des: string
}

export default function Li_step_title_des({ step, title, des }: ILi_step_title_des) {
	return (
		<li className="md:flex-1">
			<div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 ">
				<span className="text-sm font-medium text-blue-500">{step}</span>
				<span className="font-semiblod text-xl"> {title}</span>
				<span className="mt-2 text-zinc-400">{des}</span>

			</div>
		</li>

	)
}
