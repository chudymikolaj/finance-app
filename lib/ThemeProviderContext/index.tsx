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
		filterDateCashFlowList: app.filterDateCashFlowList,
		expenses: app.expenses,
		revenues: app.revenues,
		budgetAllocations: app.budgetAllocations,
		budgetTabLists: app.budgetTabLists,

		addExpense(id, name, value, tags, isPaid, date) {
			dispatch({ type: "ADD_EXPENSE", id, name, value, tags, isPaid, date });
		},
		addRevenue(id, name, value, tags, date) {
			dispatch({ type: "ADD_REVENUE", id, name, value, tags, date });
		},
		updateExpensesList(value) {
			dispatch({ type: "UPDATE_EXPENSES_LIST", value });
		},
		updateRevenuesList(value) {
			dispatch({ type: "UPDATE_REVENUES_LIST", value });
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
		updateBudgetAllocations(budgetAllocations) {
			dispatch({ type: "UPDATE_BUDGET_ALLOCATIONS", budgetAllocations });
		},
		updateBudgetListTabs(budgetTabLists) {
			dispatch({ type: "UPDATE_BUDGET_TAB_LISTS", budgetTabLists });
		},
		addBudgetListTabItem(budgetListTabItemId, newBudgetListTabItem) {
			dispatch({
				type: "ADD_BUDGET_TAB_ITEM",
				budgetListTabItemId,
				newBudgetListTabItem,
			});
		},
		budgetListTabItemRemove(budgetListTabItemCategory, budgetListTabItemId) {
			dispatch({
				type: "BUDGET_TAB_ITEM_REMOVE",
				budgetListTabItemCategory,
				budgetListTabItemId,
			});
		},
		filterCashFlowList(value) {
			dispatch({ type: "FILTER_CASHFLOW_LIST", value });
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
