import { type ReactNode } from "react";

export type CashFlowAccordionType = {
	title: string;
	isOpenInitially?: boolean;
	children: ReactNode;
};
