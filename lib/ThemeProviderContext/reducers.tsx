import { type AppState } from "./ThemeProviderContext.types";

type ToggleMode = {
	type: "TOGGLE_MODE";
};

type AddExpense = {
	type: "ADD_EXPENSE";
	id: number;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
	isPaid: boolean;
};

type AddRevenue = {
	type: "ADD_REVENUE";
	id: number;
	name: string;
	value: number;
	tags?: { type: string; name: string }[];
};

type CheckExpense = {
	type: "CHECK_EXPENSE";
	id: number;
};

type RemoveExpense = {
	type: "REMOVE_EXPENSE";
	id: number;
};

type ChangeSalary = {
	type: "CHANGE_SALARY";
	value: number;
};

type UpdateExpenses = {
	type: "UPDATE_EXPENSES";
	value: number;
};

type Action =
	| ToggleMode
	| AddExpense
	| AddRevenue
	| CheckExpense
	| RemoveExpense
	| ChangeSalary
	| UpdateExpenses
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
				item.id === action.id ? { ...item, isPaid: !item.isPaid } : item
			),
		};
	}

	if (action.type === "REMOVE_EXPENSE") {
		return {
			...state,
			expenses: state.expenses.filter((item) => item.id !== action.id),
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

	if (action.type === "CHANGE_SALARY") {
		return {
			...state,
			wallet: {
				...state.wallet,
				sumSalary: action.value,
				restSalary: action.value - state.wallet.sumBills,
			},
		};
	}

	return state;
}
