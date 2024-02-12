import axios from "axios";

type ItemType = {
	name: string;
	value: number;
	isPaid?: boolean;
	date: string;
	users_permissions_user: {
		connect: string[];
	};
};

export default async function createCashFlowItemAxios(item: ItemType, jwt: string, endpoint: string) {
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
