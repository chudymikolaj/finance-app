"use client";

import { useReducer } from "react";

import { AppContext } from "./context";
import { appReducer } from "./reducers";
import { initialAppState } from "./state";

import StyleThemeProvider from "@/styles/StyleThemeProvider";

import { type AppStateValue, type ContextProviderProps } from "./ThemeProviderContext.types";

export default function ThemeProviderContext({ children }: ContextProviderProps) {
	const [app, dispatch] = useReducer(appReducer, initialAppState);

	const ctx: AppStateValue = {
		darkMode: app.darkMode,
		constants: {
			maxValue: app.constants.maxValue,
		},
		wallet: {
			sumRevenues: app.wallet.sumRevenues,
			sumBills: app.wallet.sumBills,
			restRevenues: app.wallet.restRevenues,
		},
		filterDateCashFlowList: app.filterDateCashFlowList,
		expenses: app.expenses,
		revenues: app.revenues,
		budgetAllocations: app.budgetAllocations,
		assetTabLists: app.assetTabLists,
		addExpense(id, name, value, tags, isPaid, date, userID, userJWT) {
			dispatch({ type: "ADD_EXPENSE", id, name, value, tags, isPaid, date, userID, userJWT });
		},
		addRevenue(id, name, value, tags, date, userID, userJWT) {
			dispatch({ type: "ADD_REVENUE", id, name, value, tags, date, userID, userJWT });
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
		changeBudgetAllocations(data) {
			dispatch({ type: "CHANGE_BUDGET_ALLOCATIONS", data });
		},
		updateAssetListTabs(assetTabLists) {
			dispatch({ type: "UPDATE_ASSET_TAB_LISTS", assetTabLists });
		},
		addAssetListTabItem(assetListTabItemCategoryId, newAssetListTabItem) {
			dispatch({
				type: "ADD_ASSET_TAB_ITEM",
				assetListTabItemCategoryId,
				newAssetListTabItem,
			});
		},
		modifyAssetListTabItem(assetListTabItemCategoryId, assetListTabItemId, assetListTabItemModified) {
			dispatch({
				type: "MODIFY_ASSET_TAB_ITEM",
				assetListTabItemCategoryId,
				assetListTabItemId,
				assetListTabItemModified,
			});
		},
		assetListTabItemRemove(assetListTabItemCategory, assetListTabItemCategoryId) {
			dispatch({
				type: "ASSET_TAB_ITEM_REMOVE",
				assetListTabItemCategory,
				assetListTabItemCategoryId,
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
