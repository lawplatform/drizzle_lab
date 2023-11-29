import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function C_Basic({ title, des, content, footer }: { title: string, des: string, content: string, footer: string }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{des}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			<CardFooter>
				<p>{footer}</p>
			</CardFooter>
		</Card>
	)
}
