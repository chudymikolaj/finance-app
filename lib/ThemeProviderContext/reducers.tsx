import createCashFlowItemAxios from "@/utils/fetch/createCashFlowItemAxios";
import createTabAssetItemAxios from "@/utils/fetch/createTabAssetItemAxios";
import removeItemAxios from "@/utils/fetch/removeItemAxios";
import updateCashFlowItemAxios from "@/utils/fetch/updateCashFlowItemAxios";
import updateTabAssetItemAxios from "@/utils/fetch/updateTabAssetItemAxios";

import {
	type AppState,
	type AssetTabList,
	type BudgetAllocation,
	type TabListItem,
	type TabsOfExpenses,
	type TabsOfRevenues,
} from "./ThemeProviderContext.types";

type ToggleMode = {
	type: "TOGGLE_MODE";
};

type AddExpense = {
	type: "ADD_EXPENSE";
	id: string;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
	isPaid: boolean;
	date: string;
	userID: string;
	userJWT: string;
};

type AddRevenue = {
	type: "ADD_REVENUE";
	id: string;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
	date: string;
	userID: string;
	userJWT: string;
};

type CheckExpense = {
	type: "CHECK_EXPENSE";
	id: string;
	userJWT: string;
};

type RemoveExpense = {
	type: "REMOVE_EXPENSE";
	id: number;
	userJWT: string;
};
type RemoveRevenue = {
	type: "REMOVE_REVENUE";
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

type UpdateRevenueList = {
	type: "UPDATE_REVENUES_LIST";
	value: TabsOfRevenues[];
};

type UpdateExpenses = {
	type: "UPDATE_EXPENSES";
	value: number;
};

type UpdateRevenue = {
	type: "UPDATE_REVENUES";
	value: number;
};

type UpdateRestRevenues = {
	type: "UPDATE_REST_REVENUES";
	expenses: number;
	revenues: number;
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
	| AddExpense
	| AddRevenue
	| CheckExpense
	| RemoveExpense
	| RemoveRevenue
	| ChangeSalary
	| UpdateExpensesList
	| UpdateRevenueList
	| UpdateExpenses
	| UpdateRevenue
	| UpdateRestRevenues
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

	if (action.type === "ADD_EXPENSE") {
		const newExpense = {
			name: action.name,
			value: action.value,
			isPaid: action.isPaid,
			date: action.date,
			users_permissions_user: {
				connect: [action.userID],
			},
		};

		createCashFlowItemAxios(newExpense, action.userJWT, "/api/monetary-expenses");

		return {
			...state,
			expenses: [{ id: action.id, tags: action.tags, ...newExpense }, ...state.expenses],
		};
	}

	if (action.type === "ADD_REVENUE") {
		const newRevenue = {
			name: action.name,
			value: action.value,
			date: action.date,
			users_permissions_user: {
				connect: [action.userID],
			},
		};

		createCashFlowItemAxios(newRevenue, action.userJWT, "/api/monetary-incomes");

		return {
			...state,
			revenues: [{ id: action.id, ...newRevenue }, ...state.revenues],
		};
	}

	if (action.type === "CHECK_EXPENSE") {
		const getItemId = action.id;
		const getUserJWT = action.userJWT;

		const updateExpense = state.expenses
			.filter((item) => String(item.id) == String(getItemId))
			.map((item) => (String(item.id) === String(getItemId) ? { ...item, isPaid: !item.isPaid } : item));

		const getExpense = updateExpense[0];

		updateCashFlowItemAxios(getExpense, getUserJWT, "/api/monetary-expenses");

		return {
			...state,
			expenses: state.expenses.map((item) =>
				String(item.id) === String(getItemId) ? { ...item, isPaid: !item.isPaid } : item
			),
		};
	}

	if (action.type === "REMOVE_EXPENSE") {
		const getItemId = action.id;
		const getUserJWT = action.userJWT;

		removeItemAxios(getItemId, getUserJWT, "/api/monetary-expenses");

		return {
			...state,
			expenses: state.expenses.filter((item) => String(item.id) !== String(getItemId)),
		};
	}

	if (action.type === "REMOVE_REVENUE") {
		const getItemId = action.id;
		const getUserJWT = action.userJWT;

		const findItem = state.revenues.filter((item) => String(item.id) !== String(getItemId));

		removeItemAxios(getItemId, getUserJWT, "/api/monetary-incomes");

		return {
			...state,
			revenues: findItem,
		};
	}

	if (action.type === "UPDATE_EXPENSES_LIST") {
		return {
			...state,
			expenses: [...action.value],
		};
	}

	if (action.type === "UPDATE_REVENUES_LIST") {
		return {
			...state,
			revenues: [...action.value],
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

	if (action.type === "UPDATE_REVENUES") {
		return {
			...state,
			wallet: {
				...state.wallet,
				sumRevenues: action.value,
			},
		};
	}

	if (action.type === "UPDATE_REST_REVENUES") {
		return {
			...state,
			wallet: {
				...state.wallet,
				restRevenues: action.revenues - action.expenses,
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
				sumRevenues: action.value,
				restRevenues: action.value - state.wallet.sumBills,
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
		const createAssetItemAxios = {
			name: action.newAssetListTabItem.name,
			value: action.newAssetListTabItem.value,
			assets_tab: {
				connect: [Number(action.categoryTabId)],
			},
			users_permissions_user: {
				connect: [action.userID],
			},
		};

		createTabAssetItemAxios(createAssetItemAxios, action.userJWT, "/api/tab-assets");

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

						updateTabAssetItemAxios(dataToUpdate, action.userJWT, "/api/tab-assets");
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
