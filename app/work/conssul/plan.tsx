
export default function Plan() {
	return (
		<div className="flx mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

			<div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
				<div className="bg-blue-200 p-1">
				</div>
				<div className="p-8">
					<h2 className="mb-4 text-3xl font-bold text-gray-800">Basic</h2>
					<p className="mb-6 text-gray-600">개인 컨설턴트</p>
					<p className="mb-6 text-4xl font-bold text-gray-800">₩4999</p>
					<ul className="mb-6 text-sm text-gray-600">
						<li className="mb-2 flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							10 고객
						</li>
						<li className="mb-2 flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							Basic Featurs
						</li>
						<li className="flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							24/7 Support
						</li>
					</ul>
				</div>
				<div className="p-4">
					<button
						className="focus:shadow-outline-blue w-full rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800">
						Select Plan
					</button>
				</div>
			</div>

			<div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
				<div className="bg-green-200 p-1">
				</div>
				<div className="p-8">
					<h2 className="mb-4 text-3xl font-bold text-gray-800">Pro Plan</h2>
					<p className="mb-6 text-gray-600">Perfect for growing businesses</p>
					<p className="mb-6 text-4xl font-bold text-gray-800">$49.99</p>
					<ul className="mb-6 text-sm text-gray-600">
						<li className="mb-2 flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							25 Users
						</li>
						<li className="mb-2 flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							Advanced Features
						</li>
						<li className="flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							24/7 Support
						</li>
					</ul>
				</div>
				<div className="p-4">
					<button
						className="focus:shadow-outline-green w-full rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-700 focus:outline-none active:bg-green-800">
						Select Plan
					</button>
				</div>
			</div>

			<div className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
				<div className="bg-purple-200 p-1">
				</div>
				<div className="p-8">
					<h2 className="mb-4 text-3xl font-bold text-gray-800">Enterprise Plan</h2>
					<p className="mb-6 text-gray-600">For large-scale enterprises</p>
					<p className="mb-6 text-4xl font-bold text-gray-800">$99.99</p>
					<ul className="mb-6 text-sm text-gray-600">
						<li className="mb-2 flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							Unlimited Users
						</li>
						<li className="mb-2 flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http

://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							Premium Features
						</li>
						<li className="flex items-center">
							<svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 13l4 4L19 7"></path>
							</svg>
							24/7 Priority Support
						</li>
					</ul>
				</div>
				<div className="p-4">
					<button
						className="focus:shadow-outline-purple w-full rounded-full bg-purple-500 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none active:bg-purple-800">
						Select Plan
					</button>
				</div>
			</div>

		</div>
	)
}
