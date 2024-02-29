import axios from "axios";

type changeTabValueAxiosType = {
	id: number;
	value: number;
};

export default async function changeTabValueAxios(itemProps: changeTabValueAxiosType, jwt: string, endpoint: string) {
	try {
		const data = {
			data: {
				value: itemProps.value,
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
