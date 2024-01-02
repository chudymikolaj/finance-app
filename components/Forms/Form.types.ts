"use client"

import { type KeyboardEvent, type ReactNode } from "react";

export type FormAddBudgetListTabItemPropsType = {
	categoryId: string;
	closePopup: () => void;
};

export type FormEditBudgetListTabItemPropsType = {
	categoryId: string;
	data: {
		id: string,
		title: string,
		value: string,
	}
	closePopup: () => void;
};

export type FormChangeWalletProportionsPropsType = {
	closePopup: () => void;
};

export interface IFormValues {
	 [key: string]: string;
};

export type ReactNodeType = ReactNode;

export type InputTypeValues = "text" | "number";

export type BlockFormKeysEvent = KeyboardEvent<HTMLInputElement>;