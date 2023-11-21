'use server';

import supabase from "@/src/provider/supabase";
import { UserSchema } from "@/src/schema/user";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function serverActionTemp(data: z.infer<typeof UserSchema>) {
	'use server';
	console.log(data);

	//redirect('/')

}

export async function checkNameAlreadyExist(name: string) {
	const { data, error } = await supabase.from('users').select('name').eq('name', name);
	if (error) {
		return false
	}
	return data.length > 0;
}


export async function checkEmailAlreadyExist(email: string) {
	const { data, error } = await supabase.from('users').select('email').eq('email', email);
	if (error) {
		return false
	}
	return data.length > 0;
}

export async function checkisCustomEmail(email: string) {
	return ['gmail', 'navea', 'kakao'].some(domain => email.includes(domain));
}
