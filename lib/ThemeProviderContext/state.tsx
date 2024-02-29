import moment from "moment";

import { type initialAppState as AppState } from "./ThemeProviderContext.types";

export const initialAppState: AppState = {
	darkMode: true,
	constants: {
		maxValue: 1000000,
	},
	wallet: {
		sumIncomes: 0,
		sumBills: 0,
		restIncomes: 0,
	},
	filterDateCashFlowList: {
		fromDate: moment().startOf("month").format("YYYY-MM-DD"),
		toDate: moment().endOf("month").format("YYYY-MM-DD"),
	},
	expenses: [],
	incomes: [],
	budget_options: [],
	assets_tabs: [],
};
