"use client";

import { useReducer } from "react";

import {
	type AppStateValue,
	type ContextProviderProps,
} from "./ThemeProviderContext.types";
import { AppContext } from "./context";
import { initialAppState } from "./state";
import { appReducer } from "./reducers";

import StyleThemeProvider from "@/styles/StyleThemeProvider";

export default function ThemeProviderContext({
	children,
}: ContextProviderProps) {
	const [app, dispatch] = useReducer(appReducer, initialAppState);

	const ctx: AppStateValue = {
		darkMode: app.darkMode,
		constants: {
			maxValue: app.constants.maxValue,
		},
		navbar: app.navbar,
		wallet: {
			sumSalary: app.wallet.sumSalary,
			sumBills: app.wallet.sumBills,
			restSalary: app.wallet.restSalary,
		},
		expenses: app.expenses,
		revenues: app.revenues,
		addExpense(id, name, value, tags, isPaid) {
			dispatch({ type: "ADD_EXPENSE", id, name, value, tags, isPaid });
		},
		updateExpenses(value) {
			dispatch({ type: "UPDATE_EXPENSES", value });
		},
		changeSalary(value) {
			dispatch({ type: "CHANGE_SALARY", value });
		},
		toggleMode() {
			dispatch({ type: "TOGGLE_MODE" });
		},
	};

	return (
		<AppContext.Provider value={ctx}>
			<StyleThemeProvider>{children}</StyleThemeProvider>
		</AppContext.Provider>
	);
}
