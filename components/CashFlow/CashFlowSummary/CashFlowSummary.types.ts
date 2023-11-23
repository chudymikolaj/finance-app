import { ReactNode } from "react";

export type CashFlowSummaryComponentType = {
	children: ReactNode;
	sumList: string;
	paidBoolean?: number;
	countLenght: number;
	tabActive: "expenses" | "revenues";
};