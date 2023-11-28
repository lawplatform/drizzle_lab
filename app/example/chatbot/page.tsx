import Chatbot_Body_2d from "@/components/products/chatbot/Chatbot_Body_2d";
import Chatbot_Body_Simple from "@/components/products/chatbot/Chatbot_Body_simple";
import { Chatbot_button } from "@/components/products/chatbot/body";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Image as Im, Box as Three } from "lucide-react";

export default function Home() {
	return (
		<div className="mx-auto flex grid h-screen w-full  items-center justify-center">
			<div>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" className="h-20 w-20 rounded-xl"> <MessageCircle className="h-10 w-10" />
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Chat room</DialogTitle>
							<DialogDescription>
								AI 상담사와 대화를 나누어 보세요
							</DialogDescription>
						</DialogHeader>
						<div className="w-full">
							<Chatbot_Body_Simple />
						</div>

					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" className="h-20 w-20 rounded-xl"> <Im className="h-10 w-10" />
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Chat room</DialogTitle>
							<DialogDescription>
								AI 상담사와 대화를 나누어 보세요
							</DialogDescription>
						</DialogHeader>
						<div className="">
							<Chatbot_Body_2d />
						</div>

					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" className="h-20 w-20 rounded-xl"> <Three className="h-10 w-10" />
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Chat room</DialogTitle>
							<DialogDescription>
								AI 상담사와 대화를 나누어 보세요
							</DialogDescription>
						</DialogHeader>
						<div className="">
							<Chatbot_Body_Simple />
						</div>

					</DialogContent>
				</Dialog>
			</div>
		</div>
	)
}
