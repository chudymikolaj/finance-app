import axios from "axios";

type ItemType = {
	name: string;
	value: number;
	assets_tab: {
		connect: number[];
	};
	users_permissions_user: {
		connect: number[];
	};
};

export default async function createTabAssetItemAxios(item: ItemType, jwt: string, endpoint: string) {
	try {
		await axios.post(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}`,
			{
				data: item,
			},
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);
	} catch (error) {
		throw error;
	}
}
