import { z } from "zod";

export const uuidSchema = z.string().refine((uuid) => {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

	return uuidRegex.test(uuid);
}, { message: 'Invalid UUID format' });


