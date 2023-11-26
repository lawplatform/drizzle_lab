import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fontNoto, fontPen, fontNanum } from '@/lib/fonts'
import TrpcProvider from '@/server/trpc/trpcProvider'
import { cn } from '@/lib/utils'
import NextAuthProvider from '@/server/auth/authprovider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'Name',
		template: `%s - addfix`
	},
	description: 'whiat is this site?',
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
				<NextAuthProvider>
					<TrpcProvider>
						{children}
						<Toaster />
					</TrpcProvider>
				</NextAuthProvider>
			</body>
		</html>
	)
}
