export default function L_user() {
	return (
		<tr>
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<div className="flex items-center">
					<div className="h-10 w-10 flex-shrink-0">
						<img className="h-full w-full rounded-full"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
							alt="" />
					</div>
					<div className="ml-3">
						<p className="whitespace-no-wrap text-gray-900">
							Vera Carpenter
						</p>
					</div>
				</div>
			</td>
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<p className="whitespace-no-wrap text-gray-900">Admin</p>
			</td>
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<p className="whitespace-no-wrap text-gray-900">
					Jan 21, 2020
				</p>
			</td>
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<span
					className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
					<span aria-hidden
						className="absolute inset-0 rounded-full bg-green-200 opacity-50"></span>
					<span className="relative">Activo</span>
				</span>
			</td>
		</tr>
	)
}
