import { useContext } from "react";
import { AppContext } from "./context";

export function useAppContext() {
	const contextApp = useContext(AppContext);

	if (contextApp === null) {
		throw new Error("contextApp context must be used within a Provider");
	}

	return contextApp;
}

export function useAppContextDateList() {
	const contextApp = useContext(AppContext);

	if (contextApp === null) {
		throw new Error("contextApp context must be used within a Provider");
	}

	return contextApp.filterDateCashFlowList;
}
