import removeItemAxios from "@/utils/fetch/removeItemAxios";
import changeCashFlowItemAxios from "@/utils/fetch/changeCashFlowItemAxios";
import changeTabAssetItemAxios from "@/utils/fetch/changeTabAssetItemAxios";

import {
	type AppState,
	type AssetTabList,
	type BudgetAllocation,
	type TabListItem,
	type TabsOfExpenses,
	type TabsOfIncome,
} from "./ThemeProviderContext.types";

type ToggleMode = {
	type: "TOGGLE_MODE";
};

type CheckExpense = {
	type: "CHECK_EXPENSE";
	id: number;
	userJWT: string;
};

type RemoveExpense = {
	type: "REMOVE_EXPENSE";
	id: number;
	userJWT: string;
};
type RemoveIncome = {
	type: "REMOVE_INCOME";
	id: number;
	userJWT: string;
};

type ChangeSalary = {
	type: "CHANGE_SALARY";
	value: number;
};

type UpdateExpensesList = {
	type: "UPDATE_EXPENSES_LIST";
	value: TabsOfExpenses[];
};

type UpdateIncomeList = {
	type: "UPDATE_INCOMES_LIST";
	income: TabsOfIncome[];
};

type UpdateExpenses = {
	type: "UPDATE_EXPENSES";
	value: number;
};

type UpdateIncome = {
	type: "UPDATE_INCOME";
	value: number;
};

type UpdateRestIncomes = {
	type: "UPDATE_REST_INCOMES";
	expenses: number;
	incomes: number;
};

type FilterCashFlowList = {
	type: "FILTER_CASHFLOW_LIST";
	value: { fromDate: string; toDate: string };
};

type UpdateBudgetAllocations = {
	type: "UPDATE_BUDGET_ALLOCATIONS";
	budget_options: BudgetAllocation[];
};

type ChangeBudgetAllocations = {
	type: "CHANGE_BUDGET_ALLOCATIONS";
	data: { [key: string]: string };
};

type UpdateAssetTabLists = {
	type: "UPDATE_ASSET_TAB_LISTS";
	assets_tabs: AssetTabList[];
};

type AddAssetTabItem = {
	type: "ADD_ASSET_TAB_ITEM";
	userID: number;
	userJWT: string;
	categoryTabId: number;
	newAssetListTabItem: TabListItem;
};

type AddAssetTabItemRemove = {
	type: "ASSET_TAB_ITEM_REMOVE";
	cmsID: number;
	categoryTabId: number;
	userJWT: string;
};

type ModifyAssetTabItem = {
	type: "MODIFY_ASSET_TAB_ITEM";
	cmsId: number;
	categoryTabId: number;
	userJWT: string;
	assetListTabItemModified: TabListItem;
};

type Action =
	| ToggleMode
	| CheckExpense
	| RemoveExpense
	| RemoveIncome
	| ChangeSalary
	| UpdateExpensesList
	| UpdateIncomeList
	| UpdateExpenses
	| UpdateIncome
	| UpdateRestIncomes
	| FilterCashFlowList
	| UpdateBudgetAllocations
	| ChangeBudgetAllocations
	| UpdateAssetTabLists
	| AddAssetTabItem
	| AddAssetTabItemRemove
	| ModifyAssetTabItem
	| {
			type: "string";
	  };

export function appReducer(state: AppState, action: Action): AppState {
	if (action.type === "TOGGLE_MODE") {
		return {
			...state,
			darkMode: !state.darkMode,
		};
	}

	if (action.type === "CHECK_EXPENSE") {
		const getItemId = action.id;
		const getUserJWT = action.userJWT;

		const updateExpense = state.expenses
			.filter((item) => item.id === getItemId)
			.map((item) => (item.id === getItemId ? { ...item, isPaid: !item.isPaid } : item));
		const getExpense = updateExpense[0];

		changeCashFlowItemAxios(getExpense, getUserJWT, "/api/monetary-expenses");

		return {
			...state,
			expenses: state.expenses.map((item) => (item.id === getItemId ? { ...item, isPaid: !item.isPaid } : item)),
		};
	}

	if (action.type === "REMOVE_INCOME") {
		const getItemId = action.id;

		const findItem = state.incomes.filter((item) => String(item.id) !== String(getItemId));

		return {
			...state,
			incomes: findItem,
		};
	}

	if (action.type === "REMOVE_EXPENSE") {
		const getItemId = action.id;

		const findItem = state.expenses.filter((item) => String(item.id) !== String(getItemId));

		return {
			...state,
			expenses: findItem,
		};
	}

	if (action.type === "UPDATE_EXPENSES_LIST") {
		return {
			...state,
			expenses: [...action.value],
		};
	}

	if (action.type === "UPDATE_INCOMES_LIST") {
		return {
			...state,
			incomes: [...action.income],
		};
	}

	if (action.type === "UPDATE_EXPENSES") {
		return {
			...state,
			wallet: {
				...state.wallet,
				sumBills: action.value,
			},
		};
	}

	if (action.type === "UPDATE_INCOME") {
		return {
			...state,
			wallet: {
				...state.wallet,
				sumIncomes: action.value,
			},
		};
	}

	if (action.type === "UPDATE_REST_INCOMES") {
		return {
			...state,
			wallet: {
				...state.wallet,
				restIncomes: action.incomes - action.expenses,
			},
		};
	}

	if (action.type === "FILTER_CASHFLOW_LIST") {
		return {
			...state,
			filterDateCashFlowList: {
				fromDate: action.value.fromDate,
				toDate: action.value.toDate,
			},
		};
	}

	if (action.type === "CHANGE_SALARY") {
		return {
			...state,
			wallet: {
				...state.wallet,
				sumIncomes: action.value,
				restIncomes: action.value - state.wallet.sumBills,
			},
		};
	}

	if (action.type === "UPDATE_BUDGET_ALLOCATIONS") {
		return {
			...state,
			budget_options: [...action.budget_options],
		};
	}

	if (action.type === "CHANGE_BUDGET_ALLOCATIONS") {
		const convertObjectToArray = Object.entries(action.data);

		const changeBudgetAllocation = state.budget_options.map((budgetAllocation, index) => {
			if (Number(convertObjectToArray[index][0]) === budgetAllocation.id) {
				return {
					...budgetAllocation,
					share: Number(convertObjectToArray[index][1]) / 100,
				};
			}

			return budgetAllocation;
		});

		return {
			...state,
			budget_options: [...changeBudgetAllocation],
		};
	}

	if (action.type === "UPDATE_ASSET_TAB_LISTS") {
		return {
			...state,
			assets_tabs: [...action.assets_tabs],
		};
	}

	if (action.type === "ADD_ASSET_TAB_ITEM") {
		const updatedAssetTabLists = state.assets_tabs.map((item) => {
			if (item.id === action.categoryTabId) {
				const updatedLists = [...item.tab_assets, action.newAssetListTabItem];
				const totalValue = updatedLists.reduce((total, currentItem) => total + currentItem.value, 0);

				return { ...item, tab_assets: updatedLists, value: totalValue };
			}

			return item;
		});

		return {
			...state,
			assets_tabs: updatedAssetTabLists,
		};
	}

	if (action.type === "MODIFY_ASSET_TAB_ITEM") {
		const updatedAssetTabLists = state.assets_tabs.map((item) => {
			if (item.id === action.categoryTabId) {
				const updatedLists = item.tab_assets.map((tabItem) => {
					if (tabItem.id === action.cmsId) {
						const modyfied = {
							...tabItem,
							name: action.assetListTabItemModified.name,
							value: action.assetListTabItemModified.value,
						};

						const dataToUpdate = {
							id: tabItem.id,
							name: action.assetListTabItemModified.name,
							value: action.assetListTabItemModified.value,
						};

						changeTabAssetItemAxios(dataToUpdate, action.userJWT, "/api/tab-assets");
						return modyfied;
					}

					return tabItem;
				});

				const totalValue = updatedLists.reduce((total, currentItem) => total + currentItem.value, 0);

				return { ...item, tab_assets: updatedLists, value: totalValue };
			}

			return item;
		});

		return {
			...state,
			assets_tabs: updatedAssetTabLists,
		};
	}

	if (action.type === "ASSET_TAB_ITEM_REMOVE") {
		const updatedAssetTabLists = state.assets_tabs.map((item) => {
			if (item.id === action.categoryTabId) {
				const updatedLists = item.tab_assets.filter((item) => item.id !== action.cmsID);

				const totalValue = updatedLists.reduce((total, currentItem) => total + currentItem.value, 0);

				return { ...item, tab_assets: updatedLists, value: totalValue };
			}

			return item;
		});

		removeItemAxios(action.cmsID, action.userJWT, "/api/tab-assets");

		return {
			...state,
			assets_tabs: updatedAssetTabLists,
		};
	}

	return state;
}
