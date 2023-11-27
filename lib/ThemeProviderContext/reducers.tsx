import { type AppState } from "./ThemeProviderContext.types";

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
	id: number;
};

type RemoveExpense = {
	type: "REMOVE_EXPENSE";
	id: number;
};
type RemoveRevenue = {
	type: "REMOVE_REVENUE";
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

type UpdateRevenue = {
	type: "UPDATE_REVENUES";
	value: number;
};

type UpdateRestRevenues = {
	type: "UPDATE_REST_REVENUES";
	expenses: number;
	revenues: number;
};

type Action =
	| ToggleMode
	| AddExpense
	| AddRevenue
	| CheckExpense
	| RemoveExpense
	| RemoveRevenue
	| ChangeSalary
	| UpdateExpenses
	| UpdateRevenue
	| UpdateRestRevenues
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

	return state;
}
