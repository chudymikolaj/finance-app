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
		sumIncomes: number;
		sumBills: number;
		restIncomes: number;
	};
};

export type FilterCashFlowList = {
	filterDateCashFlowList: {
		fromDate: string;
		toDate: string;
	};
};

export type TabsOfIncome = {
	id: number;
	name: string;
	value: number;
	date: string;
};

export type TabsOfIncomesAxios = {
	monetary_incomes: TabsOfIncome[];
};

export type TabsOfExpenses = {
	id: number;
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
	monetary_incomes: TabsOfIncome[];
}
export interface MonetaryExpensesProps {
	monetary_expenses: TabsOfExpenses[];
}

export type ExpensesAndIncomes = {
	expenses: TabsOfExpenses[];
	incomes: TabsOfIncome[];
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
	ExpensesAndIncomes &
	AssetTabLists &
	BudgetAllocations;

export type initialAppState = Mode &
	Constants &
	Wallet &
	FilterCashFlowList &
	ExpensesAndIncomes &
	AssetTabLists &
	BudgetAllocations;

export type AppStateValue = Mode &
	Constants &
	Wallet &
	FilterCashFlowList &
	ExpensesAndIncomes &
	AssetTabLists &
	BudgetAllocations & {
		updateExpensesList: (value: TabsOfExpenses[]) => void;
		updateIncomesList: (value: TabsOfIncome[]) => void;
		updateExpenses: (value: number) => void;
		updateIncomes: (value: number) => void;
		updateRestIncomes: (Incomes: number, expenses: number) => void;
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
		checkExpenses: (id: number, userJWT: string) => void;
		removeExpenses: (id: number, userJWT: string) => void;
		removeIncome: (id: number, userJWT: string) => void;
		filterCashFlowList: (value: { fromDate: string; toDate: string }) => void;
		changeSalary: (salary: number) => void;
		toggleMode: () => void;
	};

export type ContextProviderProps = {
	children: ReactNode;
};
