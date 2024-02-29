import axios from "axios";

interface changeeDataItem {
	id: string;
	name: string;
	value: number;
	date: string;
	isPaid?: boolean;
}

export default async function changeeCashFlowItemAxios(itemProps: changeeDataItem, jwt: string, endpoint: string) {
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
