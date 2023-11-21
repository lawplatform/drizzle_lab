"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

export default function B_upload_file() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const openhandler = () => {
	}

	return (
		<Dialog open={isOpen} onOpenChange={(v) => {
			if (!v) {
				setIsOpen(false)
			}
		}}>
			<DialogTrigger asChild onClick={() => setIsOpen(true)}>
				<Button> pdf upload</Button>
			</DialogTrigger>
			<DialogContent>
				example content

			</DialogContent>

		</Dialog>

	)
}
