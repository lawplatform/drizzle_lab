export default function C_price({ type, price, benefit }) {
	return (


		<div className="mt-20 grid grid-cols-1">

			<div className="flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
				<div className="pt-10 text-center">
					<h5 className="text-xl font-semibold">기본형</h5>
					<h2 className="mb-3 mt-8 items-center align-middle text-5xl">
						<sup className="align-middle text-2xl">₩</sup>4,500
					</h2>
					<span>1달</span>
				</div>

				<div className="p-10">
					<ul className="mb-10 text-center">
						<li className="my-4">
							<h5 className="font-medium dark:text-gray-300">최고 50명 관리 </h5>
						</li>
						<li>
							<h5 className="font-medium dark:text-gray-300">저장소, 글쓰기, 상담공간 제공</h5>
						</li>
						<li className="my-4">
							<h5 className="font-medium dark:text-gray-300">수수료 할인 </h5>
						</li>
						<li>
							<h5 className="font-medium dark:text-gray-300">대시보드</h5>
						</li>
						<li className="my-4">
							<h5 className="font-medium dark:text-gray-300"> 구독 회원 관리</h5>
						</li>
						<li className="my-4">
							<h5 className="font-medium text-gray-500 line-through dark:text-gray-300"> 기본 템플릿 </h5>
						</li>

						<li className="my-4">
							<h5 className="font-medium text-gray-500 line-through dark:text-gray-300">500 MB 자료실 제공 </h5>
						</li>
					</ul>
					<div className="flex justify-center">
						<a href="#" className="border-black-500 text-black-500 rounded-md border px-6 py-3 font-medium transition-all duration-500 hover:bg-purple-500 hover:text-white">신청하기</a>
					</div>
				</div>
			</div>
		</div>
	)
}
