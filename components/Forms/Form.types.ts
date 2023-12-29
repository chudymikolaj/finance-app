"use client"

import { type KeyboardEvent } from "react";

export type FormPropsType = {
	categoryId: string;
	closePopup: () => void;
};

export interface IFormValues {
	"Podaj nazwę": string;
	"Wpisz nazwę aktywa": string;
	"Podaj wartość": string;
	"Wpisz wartość aktywa": string;
	"name": string;
	"value": string;
}

export type InputTypeValues = "text" | "number";

export type BlockFormKeysEvent = KeyboardEvent<HTMLInputElement>;