import {
	type TabsOfExpensesAndRevenues,
	type AppState,
	type BudgetAllocation,
	type BudgetTabList,
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

type UpdateBudgetTabLists = {
	type: "UPDATE_BUDGET_TAB_LISTS";
	budgetTabLists: BudgetTabList[];
};

type AddBudgetTabItem = {
	type: "ADD_BUDGET_TAB_ITEM";
	budgetListTabItemId: string;
	newBudgetListTabItem: TabListItem;
};

type AddBudgetTabItemRemove = {
	type: "BUDGET_TAB_ITEM_REMOVE";
	budgetListTabItemCategory: string;
	budgetListTabItemId: string;
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
	| UpdateBudgetTabLists
	| AddBudgetTabItem
	| AddBudgetTabItemRemove
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

	if (action.type === "UPDATE_BUDGET_TAB_LISTS") {
		return {
			...state,
			budgetTabLists: [...action.budgetTabLists],
		};
	}

	if (action.type === "ADD_BUDGET_TAB_ITEM") {
		const updatedBudgetTabLists = state.budgetTabLists.map((item) => {
			if (item.categoryId === action.budgetListTabItemId) {
				const updatedLists = [...item.lists, action.newBudgetListTabItem];
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
			budgetTabLists: updatedBudgetTabLists,
		};
	}

	if (action.type === "BUDGET_TAB_ITEM_REMOVE") {
		const updatedBudgetTabLists = state.budgetTabLists.map((item) => {
			if (item.categoryId === action.budgetListTabItemCategory) {
				const updatedLists = item.lists.filter(
					(item) => item.id !== action.budgetListTabItemId
				);

				const totalValue = updatedLists.reduce(
					(total, currentItem) => total + currentItem.value,
					0
				);

				console.log(action.budgetListTabItemId, updatedLists);
				return { ...item, lists: updatedLists, value: totalValue };
			}

			return item;
		});

		return {
			...state,
			budgetTabLists: updatedBudgetTabLists,
		};
	}

	return state;
}
