import { Button } from "@/components/ui/button";

//pure icon button
export default function Bi(
	{ action, children }: { children: React.ReactNode, action: () => void }

) {
	function click() {
		console.log("click");
		action();

	}
	return (
		<div onClick={click} className=" flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500">

			{children}
		</div>

	)
}
