import axios from "axios";

interface updateDataItem {
	id: string;
	name: string;
	value: number;
	date: string;
	isPaid?: boolean;
}

export default async function updateCashFlowItemAxios(itemProps: updateDataItem, jwt: string, endpoint: string) {
	try {
		const data = {
			data: {
				isPaid: itemProps.isPaid,
			},
		};

		await axios
			.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}/${itemProps.id}`, data, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.catch((error) => console.log(error));
	} catch (error) {
		throw error;
	}
}
