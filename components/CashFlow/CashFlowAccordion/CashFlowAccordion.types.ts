import { type ReactNode } from "react";

export type CashFlowAccordionType = {
	title: string;
	isOpen: boolean;
	children: ReactNode;
	handleOpenAccordion: () => void;
};
