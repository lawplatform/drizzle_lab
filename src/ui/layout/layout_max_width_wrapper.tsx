import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Layout_max_width_wrapper({ className, children }: { className?: string, children: ReactNode }) {
	return (
		<div className={cn('mx-auto w-full max-w-screen-lg px-2.5 md:px-20', className)} >
			{children}
		</div >
	)
}

