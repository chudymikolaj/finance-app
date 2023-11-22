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

export type TabsOfExpensesAndRevenues = {
	id: string;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
	isPaid?: boolean;
};

export type ExpensesAndRevenues = {
	expenses: TabsOfExpensesAndRevenues[];
	revenues: TabsOfExpensesAndRevenues[];
};

export type AppState = Mode &
	Constants &
	initialNavbar &
	Wallet &
	ExpensesAndRevenues;

export type initialAppState = Mode &
	Constants &
	initialNavbar &
	Wallet &
	ExpensesAndRevenues;

export type AppStateValue = Mode &
	Constants &
	initialNavbar &
	Wallet &
	ExpensesAndRevenues & {
		addExpense: (
			id: string,
			name: string,
			value: number,
			tags: { type: string; name: string }[],
			isPaid: boolean
		) => void;
		addRevenue: (
			id: string,
			name: string,
			value: number,
			tags: { type: string; name: string }[]
		) => void;
		updateExpenses: (value: number) => void;
		updateRevenues: (value: number) => void;
		updateRestRevenues: (revenues: number, expenses: number) => void;
		checkExpenses: (id: number) => void;
		removeExpenses: (id: number) => void;
		removeRevenue: (id: number) => void;
		changeSalary: (salary: number) => void;
		toggleMode: () => void;
	};

export type ContextProviderProps = {
	children: ReactNode;
};
