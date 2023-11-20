import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fontNoto, fontPen, fontNanum } from '@/lib/fonts'
import TrpcProvider from '@/server/trpc/trpcProvider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Name',
		template: `%s - addfix`
	},
	description: 'whiat is this site?',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png'
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={cn('antialiased', fontNoto.variable, fontPen.variable, fontNanum.variable)}>
				<TrpcProvider>{children}</TrpcProvider>
			</body>
		</html>
	)
}
