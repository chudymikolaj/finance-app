import axios from "axios";

type ItemType = {
	id: number;
	name: string;
	value: number;
};

export default async function updateTabAssetItemAxios(modyfied: ItemType, jwt: string, endpoint: string) {
	try {
		const data = {
			data: {
				name: modyfied.name,
				value: modyfied.value,
			},
		};

		await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}/${modyfied.id}`, data, {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		});
	} catch (error) {
		throw error;
	}
}
