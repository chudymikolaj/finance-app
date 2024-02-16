import { AssetTabLists } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";
import axios from "axios";

export async function getUserDataAxios(sessions: {}, typeList: string): Promise<AssetTabLists | []> {
	let response: AssetTabLists;

	try {
		const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me${typeList}`, {
			headers: {
				Authorization: "Bearer " + (sessions as { jwt: string })?.jwt,
			},
		});

		response = data;
		return response;
	} catch (error) {
		return [];
	}
}
