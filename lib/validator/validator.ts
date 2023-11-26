import { z } from "zod";

const isEnglish = (value: string) => /^[a-zA-Z\s]+$/.test(value);

export const uuidSchema = z.string().refine((uuid) => {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

	return uuidRegex.test(uuid);
}, { message: 'Invalid UUID format' });


export const urlSafeString = z.string().refine(
	(value) => isEnglish(value),
	{
		message: 'Value must be in English.',
		path: [],
	}
).refine(
	(value) => {
		try {
			const encodedValue = encodeURI(value);
			return encodedValue === encodeURIComponent(encodedValue);
		} catch {
			return false;
		}
	},
	{
		message: 'Value must be URL safe.',
		path: [],
	}
);
