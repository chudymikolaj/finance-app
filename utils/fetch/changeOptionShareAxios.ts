import axios from "axios";

type changeOptionShareAxiosType = {
	id: number;
	share: number;
};

export default async function changeOptionShareAxios(
	option: changeOptionShareAxiosType,
	jwt: string,
	endpoint: string
) {
	try {
		const data = {
			data: {
				share: option.share,
			},
		};

		await axios
			.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}${endpoint}/${option.id}`, data, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.catch((error) => console.log(error));
	} catch (error) {
		throw error;
	}
}
