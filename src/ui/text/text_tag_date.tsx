import Link from "next/link";


interface name {
	category: string
	date: string
}
export default function Text_tag_date({ category, date }: name) {
	return (
		<div className="mx-auto flex">
			<span className="text-base md:text-lg">
				<Link href="/blog-2" legacyBehavior>
					<a className="text-blueGray-200 hover:underline">
						<span className="mr-3 inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">{category}</span>
					</a>
				</Link>
				<span className="text-blueGray-500 text-sm">{date}</span>
			</span>
		</div>
	)

}



