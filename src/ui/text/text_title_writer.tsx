interface Text_title_writerProps {
	title: string
	name: string
	position: string
	profileImg: string

}



export default function Text_title_writer({ title, name, position, profileImg }: Text_title_writerProps) {
	return (
		<div>
			<div className="mb-6 text-center">
				<h2 className="font-heading mt-4 text-4xl font-bold md:text-5xl">{title}</h2>
			</div>
			<div className="mb-8 flex justify-center">
				<img className="h-12 w-12 rounded-full object-cover" src={profileImg} alt="Monst" />
				<div className="pl-4">
					<p className="text-blueGray-500 mb-1">{name}</p>
					<p className="text-blueGray-500 text-xs font-semibold">{position}</p>
				</div>
			</div>
		</div >

	)
}
