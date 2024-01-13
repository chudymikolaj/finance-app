import {
	type TabsOfExpensesAndRevenues,
	type AppState,
	type BudgetAllocation,
	type AssetTabList,
	type TabListItem,
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
};

type AddRevenue = {
	type: "ADD_REVENUE";
	id: string;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
	date: string;
};

type CheckExpense = {
	type: "CHECK_EXPENSE";
	id: string;
};

type RemoveExpense = {
	type: "REMOVE_EXPENSE";
	id: string;
};
type RemoveRevenue = {
	type: "REMOVE_REVENUE";
	id: string;
};

type ChangeSalary = {
	type: "CHANGE_SALARY";
	value: number;
};

type UpdateExpensesList = {
	type: "UPDATE_EXPENSES_LIST";
	value: TabsOfExpensesAndRevenues[];
};

type UpdateRevenueList = {
	type: "UPDATE_REVENUES_LIST";
	value: TabsOfExpensesAndRevenues[];
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
	budgetAllocations: BudgetAllocation[];
};

type ChangeBudgetAllocations = {
	type: "CHANGE_BUDGET_ALLOCATIONS";
	data: { [key: string]: string };
};

type UpdateAssetTabLists = {
	type: "UPDATE_ASSET_TAB_LISTS";
	assetTabLists: AssetTabList[];
};

type AddAssetTabItem = {
	type: "ADD_ASSET_TAB_ITEM";
	assetListTabItemCategoryId: string;
	newAssetListTabItem: TabListItem;
};

type AddAssetTabItemRemove = {
	type: "ASSET_TAB_ITEM_REMOVE";
	assetListTabItemCategory: string;
	assetListTabItemCategoryId: string;
};

type ModifyAssetTabItem = {
	type: "MODIFY_ASSET_TAB_ITEM";
	assetListTabItemCategoryId: string;
	assetListTabItemId: string;
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
			id: action.id,
			name: action.name,
			value: action.value,
			tags: action.tags,
			isPaid: action.isPaid,
			date: action.date,
		};

		return {
			...state,
			expenses: [...state.expenses, newExpense],
		};
	}

	if (action.type === "ADD_REVENUE") {
		const newRevenue = {
			id: action.id,
			name: action.name,
			value: action.value,
			tags: action.tags,
			date: action.date,
		};

		return {
			...state,
			revenues: [...state.revenues, newRevenue],
		};
	}

	if (action.type === "CHECK_EXPENSE") {
		return {
			...state,
			expenses: state.expenses.map((item) =>
				String(item.id) === String(action.id)
					? { ...item, isPaid: !item.isPaid }
					: item
			),
		};
	}

	if (action.type === "REMOVE_EXPENSE") {
		return {
			...state,
			expenses: state.expenses.filter(
				(item) => String(item.id) !== String(action.id)
			),
		};
	}

	if (action.type === "REMOVE_REVENUE") {
		return {
			...state,
			revenues: state.revenues.filter(
				(item) => String(item.id) !== String(action.id)
			),
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
			budgetAllocations: [...action.budgetAllocations],
		};
	}

	if (action.type === "CHANGE_BUDGET_ALLOCATIONS") {
		const convertObjectToArray = Object.entries(action.data);

		const changeBudgetAllocation = state.budgetAllocations.map(
			(budgetAllocation, index) => {
				if (convertObjectToArray[index][0] === budgetAllocation.id) {
					return {
						...budgetAllocation,
						share: Number(convertObjectToArray[index][1]) / 100,
					};
				}

				return budgetAllocation;
			}
		);

		return {
			...state,
			budgetAllocations: [...changeBudgetAllocation],
		};
	}

	if (action.type === "UPDATE_ASSET_TAB_LISTS") {
		return {
			...state,
			assetTabLists: [...action.assetTabLists],
		};
	}

	if (action.type === "ADD_ASSET_TAB_ITEM") {
		const updatedAssetTabLists = state.assetTabLists.map((item) => {
			if (item.categoryId === action.assetListTabItemCategoryId) {
				const updatedLists = [...item.lists, action.newAssetListTabItem];
				const totalValue = updatedLists.reduce(
					(total, currentItem) => total + currentItem.value,
					0
				);

				return { ...item, lists: updatedLists, value: totalValue };
			}

			return item;
		});

		return {
			...state,
			assetTabLists: updatedAssetTabLists,
		};
	}

	if (action.type === "MODIFY_ASSET_TAB_ITEM") {
		const updatedAssetTabLists = state.assetTabLists.map((item) => {
			if (item.categoryId === action.assetListTabItemCategoryId) {
				// const updatedLists = [...item.lists, action.newAssetListTabItem];

				const updatedLists = item.lists.map((tabItem) => {
					if (tabItem.id === action.assetListTabItemId) {
						const modyfied = {
							...tabItem,
							title: action.assetListTabItemModified.title,
							value: action.assetListTabItemModified.value,
						};

						return modyfied;
					}

					return tabItem;
				});

				const totalValue = updatedLists.reduce(
					(total, currentItem) => total + currentItem.value,
					0
				);

				return { ...item, lists: updatedLists, value: totalValue };
			}

			return item;
		});

		return {
			...state,
			assetTabLists: updatedAssetTabLists,
		};
	}

	if (action.type === "ASSET_TAB_ITEM_REMOVE") {
		const updatedAssetTabLists = state.assetTabLists.map((item) => {
			if (item.categoryId === action.assetListTabItemCategory) {
				const updatedLists = item.lists.filter(
					(item) => item.id !== action.assetListTabItemCategoryId
				);

				const totalValue = updatedLists.reduce(
					(total, currentItem) => total + currentItem.value,
					0
				);

				return { ...item, lists: updatedLists, value: totalValue };
			}

			return item;
		});

		return {
			...state,
			assetTabLists: updatedAssetTabLists,
		};
	}

	return state;
}
