import N_navbar_dark from "@/src/ui/navigation/n_navbar"
import Con_navbar from "./con_navbar"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<Con_navbar />
			{children}
		</div>
	)
}

