import C_feature_n_t_d from "@/src/ui/card/c_feature_n_t_d"
import Layout_row_title_desrcription from "@/src/ui/layout/layout_row_horizontal"
import Image from 'next/image'

const data = [
	{
		"title": "Classic Turkey Club",
		"description": "Delicious layers of roasted turkey, crispy bacon, lettuce, and tomato, stacked between three slices of toasted bread. Served with a side of seasoned fries."
	},
	{
		"title": "Veggie Delight Wrap",
		"description": "A healthy and flavorful wrap filled with fresh vegetables, hummus, and feta cheese. Perfect for those who crave a lighter but satisfying option."
	},
	{
		"title": "BBQ Pulled Pork Sub",
		"description": "Tender pulled pork smothered in tangy barbecue sauce, topped with coleslaw, and served in a soft sub roll. A mouthwatering combination of sweet and savory flavors."
	},
	{
		"title": "Caprese Panini",
		"description": "A classic Italian sandwich featuring slices of fresh mozzarella, ripe tomatoes, and basil leaves, drizzled with balsamic glaze and pressed between warm ciabatta bread."
	}
]

export default function Sec_feature_4des() {
	return (
		<section className="mt-12 pt-12">
			<Layout_row_title_desrcription>
				<div className="mt-80 py-10 sm:px-5 sm:py-32">
					<div className="relative  h-[300px] w-full  sm:mt-0 sm:h-screen">
						<Image src={"/temp/A.png"}
							layout="fill"
							objectFit='cover'
							alt={""} />
					</div>
				</div>
				<div className="mb-4">
					<h2 className="font-heading  mt-3 text-4xl font-bold" >
						We Provide Best <br />
						<span className="text-blue-500">Web design </span>services
					</h2>
					<p className="text-blueGray-400  mb-6 leading-loose" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
					</p>

					<div className="flex flex-wrap">

						{data.map((item, index) => (
							<C_feature_n_t_d
								key={index}
								index={index + 1}
								title={item.title}
								discription={item.description} />
						))}

					</div>

				</div>

			</Layout_row_title_desrcription>
		</section >

	)
}
