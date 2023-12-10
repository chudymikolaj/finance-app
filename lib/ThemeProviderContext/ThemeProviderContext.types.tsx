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

export type NavbarLink =
	| LinkWithIcon
	| {
			active?: string;
			profiles?: LinkWithIcon[];
			others?: LinkWithIcon[];
	  };

export type NavbarLinkState = LinkWithIcon & {
	active?: string;
	profiles?: LinkWithIcon[];
	others?: LinkWithIcon[];
};

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

export type AssetList = {
	title: string;
	value: number;
};

export type Asset = {
	title: string;
	share: number;
	value: number;
	color: string;
	lists: AssetList[];
};

export type Assets = {
	assets: Asset[];
};

export type AppState = Mode &
	Constants &
	initialNavbar &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	Assets;

export type initialAppState = Mode &
	Constants &
	initialNavbar &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	Assets;

export type AppStateValue = Mode &
	Constants &
	initialNavbar &
	Wallet &
	FilterCashFlowList &
	ExpensesAndRevenues &
	Assets & {
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
		updateAssets: (assets: Asset[]) => void;
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
