import Image from 'next/image'
interface gi_bpctdt_prop {
	title: string
	category: string
	month: string
	day: string
	img: string
	description: string
	time: string
}
export default function Gi_bpctdt({ day, img, description, month, title, category, time }: gi_bpctdt_prop) {
	return (
		<div className="mx-auto w-[800px] transition-all  hover:translate-y-3">
			<div className="grid  grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
				<div className="overflow-hidden rounded shadow-lg">

					<a href="#"></a>
					<div className="relative">
						<a href="#">
							<div className='h-[200px]'>
								<Image className="w-full "
									loading="lazy"
									layout="fill"
									objectFit='cover'
									src={img}
									alt="Sunset in the mountains" />
							</div>
							<div
								className="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent">
							</div>
						</a>
						<a href="#!">
							<div
								className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-sm text-white transition duration-500 ease-in-out hover:bg-white hover:text-indigo-600">
								{category}
							</div>


						</a>

						<div
							className="absolute right-0 top-0 mr-3 mt-3 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-indigo-600 px-4 pb-2 text-sm text-white transition duration-500 ease-in-out hover:bg-white hover:text-indigo-600">
							<small>{month}</small>
							<span className="font-bold">{day}</span>

						</div>
					</div>
					<div className="px-6 py-4">

						<a href="#"
							className="inline-block text-lg font-semibold transition duration-500 ease-in-out hover:text-indigo-600">Best
							{title}</a>
						<p className="text-sm text-gray-500">
							{month}
						</p>
					</div>
					<div className="flex flex-row items-center px-6 py-4">
						<span className="font-regular mr-1 flex flex-row items-center py-1 text-sm text-gray-900">
							<svg height="13px" width="13px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
								<g>
									<g>
										<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
									</g>
								</g>
							</svg>
							<span className="ml-1">6 분전 </span></span>
					</div>
				</div>
			</div>
		</div>
	)
}
