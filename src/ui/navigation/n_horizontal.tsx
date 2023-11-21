import { Icons } from "@/app/Icons";
import Link from "next/link";
import Bar_Search from "../bar/bar_search";
import { buttonVariants } from "@/components/ui/button";

const N_horizontal = async () => {
	return (
		<div className="fixed inset-x-0 top-0 z-[10] h-fit w-full border-b border-zinc-300 bg-white py-2 dark:bg-primary">
			<div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
				<Link href="/" className="flex items-center gap-2">
					<p className="etxt-sm hidden font-medium md:block">logo</p>
				</Link>
				<Bar_Search />
				<Link href='/signIn' className={buttonVariants()}>login</Link>
			</div>
		</div>)
}

export default N_horizontal;
