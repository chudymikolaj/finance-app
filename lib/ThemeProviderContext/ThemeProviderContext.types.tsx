import { type ReactNode } from "react";

export type Mode = {
	darkMode: boolean;
};

export type Constants = {
	constants: {
		maxValue: 1000000;
	};
};

export type LinkWithIcon = {
	id: number;
	name: string;
	link: string;
	icon: string;
};

export type LinkExternal = {
	id: number;
	name: string;
	active: string;
	profiles?: LinkWithIcon[];
	others?: LinkWithIcon[];
};

export type NavbarLink = LinkWithIcon | LinkExternal;

export type initialNavbar = {
	navbar: NavbarLink[];
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

export type TabsOfExpensesAndRevenues = {
	id: string;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
	isPaid?: boolean;
	date: string;
};

export type ExpensesAndRevenues = {
	expenses: TabsOfExpensesAndRevenues[];
	revenues: TabsOfExpensesAndRevenues[];
};

export type TabListItem = {
	id: string;
	title: string;
	value: number;
};

export type AssetTabList = {
	categoryId: string;
	title: string;
	value: number;
	goal: number;
	color: string;
	lists: TabListItem[];
};

export type AssetTabLists = {
	assetTabLists: AssetTabList[];
};

export type BudgetAllocation = {
	id: string;
	title: string;
	share: number;
	value: number;
	color: string;
};

export type BudgetAllocations = {
	budgetAllocations: BudgetAllocation[];
};

export type AppState = Mode &
	Constants &
	initialNavbar &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	AssetTabLists &
	BudgetAllocations;

export type initialAppState = Mode &
	Constants &
	initialNavbar &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	AssetTabLists &
	BudgetAllocations;

export type AppStateValue = Mode &
	Constants &
	initialNavbar &
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
			date: string
		) => void;
		addRevenue: (
			id: string,
			name: string,
			value: number,
			tags: { type: string; name: string }[],
			date: string
		) => void;
		updateExpensesList: (value: TabsOfExpensesAndRevenues[]) => void;
		updateRevenuesList: (value: TabsOfExpensesAndRevenues[]) => void;
		updateExpenses: (value: number) => void;
		updateRevenues: (value: number) => void;
		updateRestRevenues: (revenues: number, expenses: number) => void;
		updateBudgetAllocations: (allocations: BudgetAllocation[]) => void;
		changeBudgetAllocations: (data: { [key: string]: string }) => void;
		updateAssetListTabs: (lists: AssetTabList[]) => void;
		addAssetListTabItem: (
			assetListTabItemId: string,
			newAssetListTabItem: TabListItem
		) => void;
		modifyAssetListTabItem: (
			assetListTabItemCategoryId: string,
			assetListTabItemId: string,
			assetListTabItemModified: TabListItem
		) => void;
		assetListTabItemRemove: (
			assetListTabItemCategory: string,
			assetListTabItemId: string
		) => void;
		checkExpenses: (id: string) => void;
		removeExpenses: (id: string) => void;
		removeRevenue: (id: string) => void;
		filterCashFlowList: (value: { fromDate: string; toDate: string }) => void;
		changeSalary: (salary: number) => void;
		toggleMode: () => void;
	};

export type ContextProviderProps = {
	children: ReactNode;
};
