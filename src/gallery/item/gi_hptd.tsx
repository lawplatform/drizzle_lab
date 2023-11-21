import Image from 'next/image'
interface gi_hptd_prop {
	image: string,
	title: string,
	description: string
}


export default function Gi_hptd({ title, image, description }: gi_hptd_prop) {
	return (
		<div className="w-[250px] space-y-3">
			<span data-state="closed">
				<div className="overflow-hidden rounded-md">
					<Image alt="React Rendezvous" loading="lazy" width="250" height="330" decoding="async" data-nimg="1" className="aspect-[3/4] h-auto w-auto object-cover transition-all hover:scale-105" src={image} />
				</div>

			</span>
			<div className="space-y-1 text-sm">
				<h3 className="font-bold  leading-none">{title}</h3>
				<p className="text-xs text-muted-foreground">{description}</p>

			</div>

		</div>
	)
}
