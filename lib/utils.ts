import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatPrice(
	price: number | string,
	options: {
		currency?: 'USD' | 'KRW' | 'GBP' | 'BDT'
		notation?: Intl.NumberFormatOptions['notation']
	} = {}
) {
	const { currency = 'KRW', notation = 'standard' } = options

	const numericPrice =
		typeof price === 'string' ? parseFloat(price) : price

	return new Intl.NumberFormat('ko-KR', {
		style: 'currency',
		currency,
		notation,
		maximumFractionDigits: 5,
	}).format(numericPrice)
}

