import axios from "axios";

import { singInProps, registerUserProps } from "./auth.types";

const strapiUrl = process.env.STRAPI_URL;
const strapiPublicUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function signIn({ email, password }: singInProps) {
	const res = await axios.post(`${strapiUrl}/api/auth/local`, {
		identifier: email,
		password,
	});

	return res.data;
}

export async function registerUser({
	username,
	email,
	password,
}: registerUserProps) {
	const res = await axios.post(`${strapiPublicUrl}/api/auth/local/register`, {
		username: username,
		email: email,
		password,
	});

	return res.data;
}
