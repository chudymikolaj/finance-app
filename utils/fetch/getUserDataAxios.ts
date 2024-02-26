import {
	type MonetaryExpensesProps,
	type AssetTabLists,
	type BudgetAllocations,
	type MonetaryIncomesProps,
} from "@/lib/ThemeProviderContext/ThemeProviderContext.types";
import axios from "axios";

export async function getUserDataAxios(
	sessions: {} | null,
	typeList: string
): Promise<MonetaryIncomesProps | MonetaryExpensesProps | AssetTabLists | BudgetAllocations | []> {
	let response: AssetTabLists;

	try {
		const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me${typeList}`, {
			headers: {
				Authorization: "Bearer " + (sessions as { jwt: string })?.jwt,
			},
		});

		response = data;
		return response;
	} catch (error) {
		return [];
	}
}
