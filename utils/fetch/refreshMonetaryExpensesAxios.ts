import getUserDataAxios from "./getUserDataAxios";

import { type TabsOfExpenses } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

const refreshMonetaryExpensesAxios = async (
	session: any,
	updateExpensesList: (monetary_expenses: TabsOfExpenses[]) => void
) => {
	const getMonetaryExpenses = await getUserDataAxios((session as any)?.jwt, "?populate[monetary_expenses]=*");

	if ("monetary_expenses" in getMonetaryExpenses) {
		updateExpensesList(getMonetaryExpenses?.monetary_expenses);
	}
};

export default refreshMonetaryExpensesAxios;
