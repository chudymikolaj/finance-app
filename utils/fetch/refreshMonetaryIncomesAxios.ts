import getUserDataAxios from "./getUserDataAxios";

import { type TabsOfIncome } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

const refreshMonetaryIncomesAxios = async (
	session: any,
	updateIncomesList: (monetary_incomes: TabsOfIncome[]) => void
) => {
	const getMonetaryIncomes = await getUserDataAxios((session as any)?.jwt, "?populate[monetary_incomes]=*");

	if ("monetary_incomes" in getMonetaryIncomes) {
		updateIncomesList(getMonetaryIncomes?.monetary_incomes);
	}
};

export default refreshMonetaryIncomesAxios;
