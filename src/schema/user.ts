import { z } from "zod";

export const UserSchema = z.object({
	email: z.string().email({ message: "이메일 양식이 바르지 않습니다" }),
	name: z.string().min(1, { message: "필수 입력입니다" }),
})

