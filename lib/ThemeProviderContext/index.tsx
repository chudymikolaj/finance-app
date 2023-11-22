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
			sumRevenues: app.wallet.sumRevenues,
			sumBills: app.wallet.sumBills,
			restRevenues: app.wallet.restRevenues,
		},
		expenses: app.expenses,
		revenues: app.revenues,
		addExpense(id, name, value, tags, isPaid) {
			dispatch({ type: "ADD_EXPENSE", id, name, value, tags, isPaid });
		},
		addRevenue(id, name, value, tags) {
			dispatch({ type: "ADD_REVENUE", id, name, value, tags });
		},
		updateExpenses(value) {
			dispatch({ type: "UPDATE_EXPENSES", value });
		},
		updateRevenues(value) {
			dispatch({ type: "UPDATE_REVENUES", value });
		},
		updateRestRevenues(revenues, expenses) {
			dispatch({ type: "UPDATE_REST_REVENUES", revenues, expenses });
		},
		checkExpenses(id) {
			dispatch({ type: "CHECK_EXPENSE", id });
		},
		removeExpenses(id) {
			dispatch({ type: "REMOVE_EXPENSE", id });
		},
		removeRevenue(id) {
			dispatch({ type: "REMOVE_REVENUE", id });
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
