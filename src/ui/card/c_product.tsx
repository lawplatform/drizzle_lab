export default function C_product() {
	return (
		<>
			<div className="relative mx-1 flex w-72 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
				<div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
					<img
						src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="p-6">
					<div className="mb-2 flex items-center justify-between">
						<p className="text-blue-gray-900 block font-sans text-base font-bold  leading-relaxed antialiased">
							Apple AirPods
						</p>
						<p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
							$95.00
						</p>
					</div>
					<p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
						With plenty of talk and listen time, voice-activated Siri access, and an
						available wireless charging case.
					</p>
				</div>
				<div className="p-6 pt-0">
					<button
						className="bg-blue-gray-900/10 text-blue-gray-900 block w-full select-none rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						Add to Cart
					</button>
				</div>
			</div>

		</>
	)
}
