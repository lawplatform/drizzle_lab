
interface text_menu_title_prop {
	title: string
	description: string;
}
export default function Text_menu_title({ title, description }: text_menu_title_prop) {
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="space-y-1">
					<h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
					<p className="text-sm text-muted-foreground">{description}</p>

				</div>

			</div>
			<div className="my-4 h-[1px] w-full shrink-0 bg-border">

			</div>
		</>

	)
}
