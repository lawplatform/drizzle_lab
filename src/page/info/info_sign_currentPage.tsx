interface Info_sign_currentPageProps {
	title: string;
	parent: string;
	currentPath: string;
}
export default function Info_sign_currentPage({ title, parent, currentPath }: Info_sign_currentPageProps) {
	return (
		<div className="-mt-24  pb-12 pt-40">
			<div className="container text-center">
				<h1 className="wow animate__animated animate__fadeIn animated mb-5 text-2xl font-bold lg:text-5xl">{title}</h1>
				<ul className="wow animate__animated animate__fadeIn animated mx-auto pb-12 text-sm text-gray-500 lg:text-sm">
					<li className="inline-flex items-center">
						<a href="#" className="text-gray-800 hover:text-blue-500">
							{parent}
						</a>
						<svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
							<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
						</svg>
					</li>
					<li className="inline-flex items-center text-gray-400">
						<span>{currentPath}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
