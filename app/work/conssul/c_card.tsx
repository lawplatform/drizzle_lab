
interface C_card_prop {
	img: string
	title: string
	des: string
}

export default function C_card({ img, title, des }: C_card_prop) {
	return (
		<div className="w-[150px] space-y-3">
			<span data-state="closed">
				<div className="overflow-hidden rounded-md">
					<img alt="Thinking Components" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="aspect-square h-auto w-auto object-cover transition-all hover:scale-105" src={img} />
				</div>
			</span>
			<div className="space-y-1 text-sm">
				<h3 className="font-medium leading-none">{title}</h3>
				<p className="text-xs text-muted-foreground">{des}</p>
			</div>
		</div>
	)
}
