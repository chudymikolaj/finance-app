import axios from "axios";

interface changeDataItem {
	id: number;
	isPaid?: boolean;
}

export default async function changeCashFlowItemAxios(itemProps: changeDataItem, jwt: string, endpoint: string) {
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
