'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import Image from 'next/image'
interface Card_gallery {
	msg: String
}
const C_product_1 = ({ msg }: Card_gallery) => {


	useEffect(() => {
		return () => {
			// Remove the scroll event listener when the component unmounts
		};
	}, []);



	return (
		<Card className=" w-96 transition-opacity transition-transform duration-150 ease-out hover:scale-105">
			<CardHeader>
				<CardTitle className="flex justify-center">삼겹살 정복</CardTitle>
				<CardDescription>맛있는 밥을 먹는5가지 방법</CardDescription>
			</CardHeader>
			<CardContent>
				<Image src="temp/temp.svg" alt={"picture of content"} width={200} height={200} className="mx-auto" />
			</CardContent>
			<CardFooter className="flex justify-between">
				<p>30분</p>
				<h1 className="font-bold">$3500</h1>
			</CardFooter>
		</Card>
	);
}
export default C_product_1;

