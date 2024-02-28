import { type ReactNode } from "react";

export type Mode = {
	darkMode: boolean;
};

export type Constants = {
	constants: {
		maxValue: 1000000;
	};
};

export type Wallet = {
	wallet: {
		sumRevenues: number;
		sumBills: number;
		restRevenues: number;
	};
};

export type FilterCashFlowList = {
	filterDateCashFlowList: {
		fromDate: string;
		toDate: string;
	};
};

export type TabsOfRevenues = {
	id: string;
	name: string;
	value: number;
	date: string;
};

export type TabsOfRevenuesAxios = {
	monetary_incomes: TabsOfRevenues[];
};

export type TabsOfExpenses = {
	id: string;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
	isPaid?: boolean;
	date: string;
};

export type TabsOfExpensesAxios = {
	monetary_expenses: TabsOfExpenses[];
};

export interface MonetaryIncomesProps {
	monetary_incomes: TabsOfExpenses[];
}
export interface MonetaryExpensesProps {
	monetary_expenses: TabsOfExpenses[];
}

export type ExpensesAndRevenues = {
	expenses: TabsOfExpenses[];
	revenues: TabsOfRevenues[];
};

export type TabListItem = {
	id: number;
	name: string;
	value: number;
};

export type AssetTabList = {
	id: number;
	id_asset: string;
	name: string;
	value: number;
	goal: number;
	color: string;
	tab_assets: TabListItem[];
};

export type AssetTabLists = {
	assets_tabs: AssetTabList[];
};

export type BudgetAllocation = {
	id: number;
	title: string;
	share: number;
	value: number;
	color: string;
};

export type BudgetAllocations = {
	budget_options: BudgetAllocation[];
};

export type AppState = Mode &
	Constants &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	AssetTabLists &
	BudgetAllocations;

export type initialAppState = Mode &
	Constants &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	AssetTabLists &
	BudgetAllocations;

export type AppStateValue = Mode &
	Constants &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	AssetTabLists &
	BudgetAllocations & {
		addExpense: (
			id: string,
			name: string,
			value: number,
			tags: { type: string; name: string }[],
			isPaid: boolean,
			date: string,
			userID: string,
			userJWT: string
		) => void;
		addRevenue: (
			id: string,
			name: string,
			value: number,
			tags: { type: string; name: string }[],
			date: string,
			userID: string,
			userJWT: string
		) => void;
		updateExpensesList: (value: TabsOfRevenues[]) => void;
		updateRevenuesList: (value: TabsOfExpenses[]) => void;
		updateExpenses: (value: number) => void;
		updateRevenues: (value: number) => void;
		updateRestRevenues: (revenues: number, expenses: number) => void;
		updateBudgetAllocations: (allocations: BudgetAllocation[]) => void;
		changeBudgetAllocations: (data: { [key: string]: string }) => void;
		updateAssetListTabs: (assets_tabs: AssetTabList[]) => void;
		addAssetListTabItem: (
			userID: number,
			userJWT: string,
			categoryTabId: number,
			newAssetListTabItem: TabListItem
		) => void;
		modifyAssetListTabItem: (
			cmsId: number,
			categoryTabId: number,
			userJWT: string,
			assetListTabItemModified: TabListItem
		) => void;
		assetListTabItemRemove: (cmsID: number, categoryTabId: number, userJWT: string) => void;
		checkExpenses: (id: string, userJWT: string) => void;
		removeExpenses: (id: number, userJWT: string) => void;
		removeRevenue: (id: number, userJWT: string) => void;
		filterCashFlowList: (value: { fromDate: string; toDate: string }) => void;
		changeSalary: (salary: number) => void;
		toggleMode: () => void;
	};

export type ContextProviderProps = {
	children: ReactNode;
};
