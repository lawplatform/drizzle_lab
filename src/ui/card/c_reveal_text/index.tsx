import { Button } from '@/components/ui/button'
import './c_reveal_text.css'
import { toast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import Link from 'next/link'

interface C_reveal_text_prop {
	img: string
	title: string
	description: string
}
export default function C_reveal_text({ img, title, description }: C_reveal_text_prop) {
	const fire = () => {
		toast({
			title: "✅등록완료",
			description: "즐겨찾기에 등록이 되었습니다",
			action: (
				<ToastAction altText="취소하기">취소</ToastAction>
			),
		})
	}


	return (
		<div className="c_reveal_wrapper item">
			<Link href="/work/conssul/product">
				<div className="c_reveal_card">
					<div className='relative left-72 z-20 h-14 w-10 '>
						<Button variant="outline" className='rounded-xl' onClick={fire}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-10 w-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
							</svg>
						</Button>

					</div>
					<div className="c_reveal_img_box">
						<img src={img} />
					</div>
					<div className="c_reveal_content_box">
						<div className="c_reveal_content">
							<h3 className="mb-2 text-xl font-bold">
								{title}
							</h3>
							<p className="text-base text-gray-700">
								{description}
							</p>
							<div className="w-full px-6 pb-2 pt-4">
								<span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#법률</span>
								<span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">#회생</span>
							</div>
						</div>

					</div>
				</div>
			</Link>
		</div>
	)
}
