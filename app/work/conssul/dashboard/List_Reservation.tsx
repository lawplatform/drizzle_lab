import { Button } from "@/components/ui/button";
import List_item from "./List_item";
const mockItems: List_item_prop[] = [
	{
		index: 1,
		name: "김지원",
		type: "교육",
		day: "10월15일",
		status: "진행",
		img: "/profile/1.png",
	},
	{
		index: 2,
		name: "이승민",
		type: "법률",
		day: "11월20일",
		status: "대기",
		img: "/profile/2.png",
	},
	{
		index: 3,
		name: "박지현",
		type: "부동산",
		day: "12월5일",
		status: "완료",
		img: "/profile/3.png",
	},
	{
		index: 4,
		name: "최민호",
		type: "지식",
		day: "9월8일",
		status: "완료",
		img: "/profile/4.png",
	},
	{
		index: 5,
		name: "이지영",
		type: "법률",
		day: "10월30일",
		status: "완료",
		img: "/profile/5.png",
	},
];
export default function List_Reservation() {
	return (
		<div>
			<div className="mx-auto w-full">

				<div className=" w-full overflow-y-hidden rounded-lg border">
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="bg-gray-800 text-left text-xs font-semibold uppercase tracking-widest text-white">
									<th className="px-5 py-3">순서</th>
									<th className="px-5 py-3">이름</th>
									<th className="px-5 py-3">종류</th>
									<th className="px-5 py-3">날짜</th>
									<th className="px-5 py-3">상태</th>
								</tr>
							</thead>
							<tbody className="text-gray-500">

								<List_item index={1} name={"김영식"} type={"입시"} day={"3월5일"} status={"진행"} img={"/profile/1.png"} />
								{mockItems.map((item, index) => (
									<List_item
										index={item.index}
										name={item.name}
										type={item.type}
										day={item.day}
										status={item.status}
										img={item.img}
									/>
								))}
							</tbody>
						</table>
					</div>
					<div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
						<span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
						<div className="mt-2 inline-flex sm:mt-0">
							<Button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</Button>
							<Button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</Button>
						</div>
					</div>
				</div>
			</div>


		</div>
	)
}
