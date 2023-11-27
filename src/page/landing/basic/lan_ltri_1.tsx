import TextEffect from "@/src/ui/effect/textEffect";
import Link from "next/link";
import { ReactNode } from "react";
import Image from 'next/image'
import ReactTypingEffect from "react-typing-effect";

interface Lan_lri_1Props {
	children: ReactNode[];
	description: string;
	img: string;
}

export default function Lan_ltri_1({
	children,
	description,
	img,
}: Lan_lri_1Props) {
	return (
		<section className="z-1 relative -mt-24 pt-2">
			<div className="container">
				<div className="-mx-3 flex flex-wrap items-center">
					<div className="w-full px-3 md:px-32 lg:w-1/2">
						<div className="py-12">
							<div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
								<h2 className="font-heading  mb-4 text-3xl font-bold lg:text-5xl">
									{children[0]}
								</h2>
								<div className="text-blueGray-400  font-noto  leading-relaxed">
									{children[1]}
								</div>
								<p className="text-blueGray-400 mt-3 text-sm leading-relaxed">
									{children[2]}
								</p>
							</div>
							<div className="text-center lg:text-left">
								<Link href="/about" legacyBehavior>
									<a className="hover-up-2 wow animate__animatedanimated animate__fadeIn mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold leading-none tracking-wide text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block"> 살펴보기
									</a>
								</Link>
								<Link href="/services" legacyBehavior>
									<a
										className="hover-up-2 text-blueGray-500 hover:text-blueGray-600 border-blueGray-200 hover:border-blueGray-300 block rounded border bg-white px-8 py-4 text-center text-xs font-semibold leading-none sm:inline-block"
									>
										연락하기
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="lg:bg-blueGray-10 mb-12 w-full  px-3 pb-10 lg:mb-0 lg:w-1/2">
						<div className="flex items-center justify-center">
							<Image className="lg:max-w-lg" src={img} width={500}
								height={500}
								alt="landing image" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
