interface text_quotesProps {
	name: string
	description: string
	position: string
}



export default function Text_quotes({ name, description, position }: text_quotesProps) {


	return (
		<div>

			<div className="mx-auto w-full px-12 pb-10 pt-5">
				<div className="mb-6 w-full border-l-4 border-gray-100">
					<p className="px-5 text-lg text-gray-600">{description}</p>
				</div>
				<div className="w-full pl-6">
					<p className="text-md font-bold text-red-500">{name}</p>
					<p className="text-xs text-gray-500">{position}</p>
				</div>
			</div>


		</div>
	)
}
