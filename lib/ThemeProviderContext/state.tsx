import moment from "moment";

import { type initialAppState as AppState } from "./ThemeProviderContext.types";

export const initialAppState: AppState = {
	darkMode: true,
	constants: {
		maxValue: 1000000,
	},
	wallet: {
		sumRevenues: 0,
		sumBills: 0,
		restRevenues: 0,
	},
	filterDateCashFlowList: {
		fromDate: moment().startOf("month").format("YYYY-MM-DD"),
		toDate: moment().endOf("month").format("YYYY-MM-DD"),
	},
	expenses: [],
	revenues: [],
	budgetAllocations: [
		{
			id: "zelazna-rezerwa",
			title: "Żelazna rezerwa",
			share: 0.3,
			value: 0,
			color: "#5D8C71",
		},
		{
			id: "inwestycje",
			title: "Inwestycje",
			share: 0.2,
			value: 0,
			color: "#FF6969",
		},
		{
			id: "oszczednosci",
			title: "Oszczędności",
			share: 0.1,
			value: 0,
			color: "#9747FF",
		},
		{
			id: "reszta",
			title: "Reszta",
			share: 0.4,
			value: 0,
			color: "#67aded",
		},
	],
	assets_tabs: [],
};
