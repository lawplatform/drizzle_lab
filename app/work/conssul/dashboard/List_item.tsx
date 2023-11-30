
interface List_item_prop {
	index: number
	name: string
	type: string
	day: string
	status: string
	img: string
}

export default function List_item({ index, name, type, img, day, status }: List_item_prop) {

	const getStatusColor = (status: string) => {
		switch (status) {
			case '진행':
				return 'bg-green-100 text-green-900';
			case '대기':
				return 'bg-yellow-100 text-yellow-900';
			case '완료':
				return 'bg-red-100 text-red-900';
			default:
				return ''; // Default color or handle other cases as needed
		}
	}
	return (
		<tr className="item">
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<p className="whitespace-no-wrap">{index}</p>
			</td>
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<div className="flex items-center">
					<div className="h-10 w-10 flex-shrink-0">
						<img className="h-full w-full rounded-full" src={"/profile/avatar.png"} alt="" />
					</div>
					<div className="ml-3">
						<p className="whitespace-no-wrap">{name}</p>
					</div>
				</div>
			</td>
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<p className="whitespace-no-wrap">{type}</p>
			</td>
			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<p className="whitespace-no-wrap">{day}</p>
			</td>

			<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
				<span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(status)}`}>
					{status}
				</span>
			</td>
		</tr>




	)
}
