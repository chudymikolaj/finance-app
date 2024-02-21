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
		assets_tabs: app.assets_tabs,
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
		updateAssetListTabs(assets_tabs) {
			dispatch({ type: "UPDATE_ASSET_TAB_LISTS", assets_tabs });
		},
		addAssetListTabItem(tabId, assetListTabItemCategoryId, userID, userJWT, newAssetListTabItem) {
			dispatch({
				type: "ADD_ASSET_TAB_ITEM",
				tabId,
				assetListTabItemCategoryId,
				userID,
				userJWT,
				newAssetListTabItem,
			});
		},
		modifyAssetListTabItem(cmsId, userJWT, assetListTabItemCategoryId, assetListTabItemId, assetListTabItemModified) {
			dispatch({
				type: "MODIFY_ASSET_TAB_ITEM",
				cmsId,
				userJWT,
				assetListTabItemCategoryId,
				assetListTabItemId,
				assetListTabItemModified,
			});
		},
		assetListTabItemRemove(cmsID, userJWT, assetListTabCategory, assetListTabItemCategoryId) {
			dispatch({
				type: "ASSET_TAB_ITEM_REMOVE",
				cmsID,
				userJWT,
				assetListTabCategory,
				assetListTabItemCategoryId,
			});
		},
		filterCashFlowList(value) {
			dispatch({ type: "FILTER_CASHFLOW_LIST", value });
		},
		checkExpenses(id, userJWT) {
			dispatch({ type: "CHECK_EXPENSE", id, userJWT });
		},
		removeExpenses(id, userJWT) {
			dispatch({ type: "REMOVE_EXPENSE", id, userJWT });
		},
		removeRevenue(id, userJWT) {
			dispatch({ type: "REMOVE_REVENUE", id, userJWT });
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
