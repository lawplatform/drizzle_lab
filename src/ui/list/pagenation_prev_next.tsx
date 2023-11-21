export default function Pagenation_prev_next() {
	return*
		<div className="container mx-auto px-4 sm:px-8">
			<div className="py-8">
				<div>
					<h2 className="text-2xl font-semibold leading-tight">Users</h2>
				</div>
				<div className="my-2 flex flex-col sm:flex-row">
					<div className="mb-1 flex flex-row sm:mb-0">
						<div className="relative">
							<select
								className="block h-full w-full appearance-none appearance-none rounded-l border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none">
								<option>5</option>
								<option>10</option>
								<option>20</option>
							</select>
							<div
								className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
						<div className="relative">
							<select
								className="block h-full w-full appearance-none appearance-none rounded-r border-b border-r border-t border-gray-400 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:border-l focus:border-r focus:border-gray-500 focus:bg-white focus:outline-none sm:rounded-r-none sm:border-r-0">
								<option>All</option>
								<option>Active</option>
								<option>Inactive</option>
							</select>
							<div
								className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="relative block">
						<span className="absolute inset-y-0 left-0 flex h-full items-center pl-2">
							<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
								<path
									d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
								</path>
							</svg>
						</span>
						<input placeholder="Search"
							className="block w-full appearance-none rounded-l rounded-r border border-b border-gray-400 bg-white py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:text-gray-700 focus:placeholder-gray-600 focus:outline-none sm:rounded-l-none" />
					</div>
				</div>
				<div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										User
									</th>
									<th
										className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Rol
									</th>
									<th
										className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Created at
									</th>
									<th
										className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
										Status
									</th>
								</tr>
							</thead>
							<tbody>
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
								<tr>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<div className="flex items-center">
											<div className="h-10 w-10 flex-shrink-0">
												<img className="h-full w-full rounded-full"
													src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
													alt="" />
											</div>
											<div className="ml-3">
												<p className="whitespace-no-wrap text-gray-900">
													Blake Bowman
												</p>
											</div>
										</div>
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<p className="whitespace-no-wrap text-gray-900">Editor</p>
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<p className="whitespace-no-wrap text-gray-900">
											Jan 01, 2020
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
								<tr>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<div className="flex items-center">
											<div className="h-10 w-10 flex-shrink-0">
												<img className="h-full w-full rounded-full"
													src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
													alt="" />
											</div>
											<div className="ml-3">
												<p className="whitespace-no-wrap text-gray-900">
													Dana Moore
												</p>
											</div>
										</div>
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<p className="whitespace-no-wrap text-gray-900">Editor</p>
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<p className="whitespace-no-wrap text-gray-900">
											Jan 10, 2020
										</p>
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<span
											className="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-900">
											<span aria-hidden
												className="absolute inset-0 rounded-full bg-orange-200 opacity-50"></span>
											<span className="relative">Suspended</span>
										</span>
									</td>
								</tr>
								<tr>
									<td className="bg-white px-5 py-5 text-sm">
										<div className="flex items-center">
											<div className="h-10 w-10 flex-shrink-0">
												<img className="h-full w-full rounded-full"
													src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
													alt="" />
											</div>
											<div className="ml-3">
												<p className="whitespace-no-wrap text-gray-900">
													Alonzo Cox
												</p>
											</div>
										</div>
									</td>
									<td className="bg-white px-5 py-5 text-sm">
										<p className="whitespace-no-wrap text-gray-900">Admin</p>
									</td>
									<td className="bg-white px-5 py-5 text-sm">
										<p className="whitespace-no-wrap text-gray-900">Jan 18, 2020</p>
									</td>
									<td className="bg-white px-5 py-5 text-sm">
										<span
											className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
											<span aria-hidden
												className="absolute inset-0 rounded-full bg-red-200 opacity-50"></span>
											<span className="relative">Inactive</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5          ">
							<span className="xs:text-sm text-xs text-gray-900">
								Showing 1 to 4 of 50 Entries
							</span>
							<div className="xs:mt-0 mt-2 inline-flex">
								<button
									className="rounded-l bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-400">
									Prev
								</button>
								<button
									className="rounded-r bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-400">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div >

}
