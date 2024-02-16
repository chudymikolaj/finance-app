import axios from "axios";

export async function getUserDataAxios<T>(sessions: {}, typeList: string): Promise<T | []> {
	try {
		const { data } = await axios.get<T>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me${typeList}`, {
			headers: {
				Authorization: "Bearer " + (sessions as { jwt: string })?.jwt,
			},
		});

		return data;
	} catch (error) {
		return [];
	}
}
