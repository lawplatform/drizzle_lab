import Link from "next/link";

export default function Info_404() {
	return (
		<section className="pb-32 pt-20">
			<div className="mx-auto text-center">
				<img className="wow animate__animated animate__fadeIn mx-auto mb-14 md:max-w-md" src="/info/warn.svg" alt="Monst" />
				<span className="font-heading wow animate__animated animate__fadeIn text-4xl font-bold text-blue-500" data-wow-delay=".2s">Error 404</span>
				<h2 className="font-heading wow animate__animated animate__fadeIn mb-2 text-4xl font-bold" data-wow-delay=".3s">Something went wrong!</h2>
				<p className="text-blueGray-400 wow animate__animated animate__fadeIn mb-6" data-wow-delay=".4s">없는 페이지 입니다</p>
				<div>
					<Link href="/" legacyBehavior><a className="wow animate__animated animate__fadeIn mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold leading-none text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block" data-wow-delay=".5s">뒤로가기 </a></Link>
					<Link href="/contact" legacyBehavior><a className="text-blueGray-500 hover:text-blueGray-800 bg-blueGray-50 hover:bg-blueGray-100 wow animate__animated animate__fadeIn block rounded px-8 py-4 text-center text-xs font-semibold leading-none sm:inline-block" data-wow-delay=".6s">Contact Us</a></Link>
				</div>
			</div>
		</section>

	)
}
