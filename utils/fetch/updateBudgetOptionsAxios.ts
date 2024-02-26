import axios from "axios";

type updateBudgetOptionsProps = {
	title: string;
	share: number;
	color: string;
};

export default async function updateBudgetOptionsAxios(itemProps: updateBudgetOptionsProps, jwt: string) {
	try {
		const data = {
			data: itemProps,
		};

		await axios
			.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/budget-options`, data, {
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			})
			.catch((error) => console.log(error));
	} catch (error) {
		throw error;
	}
}
