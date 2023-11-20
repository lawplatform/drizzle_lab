import { Noto_Sans as FontNoto, Nanum_Pen_Script as FontPen, Nanum_Gothic as FontNanum } from 'next/font/google'

export const fontPen = FontPen({
	subsets: ['latin'],
	variable: '--font-pen',
	weight: '400'
})

export const fontNoto = FontNoto({
	subsets: ['latin'],
	variable: '--font-noto',
	weight: '100'
})

export const fontNanum = FontNanum({
	subsets: ['latin'],
	variable: '--font-nanum',
	weight: '400'
})

