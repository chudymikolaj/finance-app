"use client"

import { type KeyboardEvent } from "react";

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

export interface IFormValues {
	"Podaj nazwę": string;
	"Zmień nazwę": string;
	"Wpisz nazwę aktywa": string;
	"Podaj wartość": string;
	"Zmień wartość": string;
	"Wpisz wartość aktywa": string;
	"name": string;
	"value": string;
}

export type InputTypeValues = "text" | "number";

export type BlockFormKeysEvent = KeyboardEvent<HTMLInputElement>;