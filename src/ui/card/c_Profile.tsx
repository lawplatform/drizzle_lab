export default function C_Profile() {
	return (
		<div className=" h-fit w-full ">

			<div className="max-w-xs">
				<div className="rounded-lg bg-white py-3 shadow-xl">
					<div className=" p-2">
						<img className="mx-auto h-32 w-32 rounded-full" src="/profile/avatar.png" alt="John Doe" />
					</div>
					<div className="p-2">
						<h3 className="text-center text-xl font-medium leading-8 text-gray-900">Joh Doe</h3>
						<div className="text-center text-xs font-semibold text-gray-400">
							<p className="font-bold">Web Developer</p>
						</div>
						<table className="my-3 text-xs">
							<tbody><tr>
								<td className="px-2 py-2 font-semibold text-gray-500">Address</td>
								<td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
							</tr>
								<tr>
									<td className="px-2 py-2 font-semibold text-gray-500">Phone</td>
									<td className="px-2 py-2">+977 9955221114</td>
								</tr>
								<tr>
									<td className="px-2 py-2 font-semibold text-gray-500">Email</td>
									<td className="px-2 py-2">john@exmaple.com</td>
								</tr>
							</tbody></table>

						<div className="my-3 text-center">
							<a className="text-xs font-bold italic text-indigo-500 hover:text-indigo-600 hover:underline" href="#">View Profile</a>
						</div>

					</div>
				</div>
			</div>

		</div>
	)
}
