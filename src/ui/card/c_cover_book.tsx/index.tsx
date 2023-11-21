import { Button } from "@/components/ui/button";
import "./c_cover_book.css"
export default function C_cover_book() {
	return (
		<div className="ccb_card">
			<div className="ccb_content">
				<div className="ccb_title">
					<h3>Book Title</h3>
					<p className="ccb_body">Lorem ipsum dolor sit amet</p>
					<Button>click</Button>
				</div>
			</div>
		</div>
	)
}
