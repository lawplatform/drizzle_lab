export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-gradient-to-b from-gray-700 to-gray-600">
			{children}
		</div>
	)
}
