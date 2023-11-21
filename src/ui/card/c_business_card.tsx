interface C_business_card {
	logo: string
	name: string
	position: string
	description: string
}



export default function C_business_card({ logo, name, position, description }: C_business_card) {
	return (
		<div className="w-full">
			<div className="hover-up-5 animated mb-2 rounded border border-gray-100 bg-white px-6 py-10 shadow hover:border-gray-200" >
				<div className="mb-4 flex items-center">
					<img className="h-16 w-16 rounded-full object-cover" src={logo} alt="logo" />
					<div className="pl-4">
						<strong className="text-md mb-1 mt-6">{name}</strong>
						<p className="mt-3 text-xs">{position}</p>
					</div>
				</div>
				<p className="mb-5 text-sm leading-loose">{description}</p>
			</div>
		</div>

	)
}
