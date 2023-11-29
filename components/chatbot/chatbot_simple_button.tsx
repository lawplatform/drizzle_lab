import { MessageCircle } from "lucide-react";
import Chatbot_Body_Simple from "../products/chatbot/Chatbot_Body_simple";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export default function Chatbot_simpble_button() {
	return (
		< div >
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
		</div >

	)
}
