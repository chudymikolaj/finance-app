import axios from "axios";

export default async function createCashFlowItemAxios(id: string, jwt: string, endpoint: string) {
	try {
		await axios
			.delete(`${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}/${id}`, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.catch((error) => console.log(error));
	} catch (error) {
		throw error;
	}
}
