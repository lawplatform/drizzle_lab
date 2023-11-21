'use client'
import { useEffect } from "react";
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

interface Searchbar {
	msg: String
}
const Searchbar = ({ msg }: Searchbar) => {


	useEffect(() => {
		return () => {
			// Remove the scroll event listener when the component unmounts
		};
	}, []);
	return (<div className="mt-1 mx-auto text-center flex flex-row">
		<Input placeholder="검색어를 입력하세요" className="px-10 mx-5" />
		<Search className="relative top-1 right-16 w-8 h-8 items-center justify-center" />
	</div >

	);
}
export default Searchbar
