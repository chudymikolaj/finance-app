"use client";

import { type KeyboardEvent, type ReactNode } from "react";

export type FormAddAssetListTabItemPropsType = {
	newId: number;
	tabId: number;
	categoryId: number;
	closePopup: () => void;
};

export type FormEditAssetListTabItemPropsType = {
	categoryId: number;
	data: {
		id: number;
		title: string;
		value: number;
	};
	closePopup: () => void;
};

export type FormChangeWalletProportionsPropsType = {
	closePopup: () => void;
};

export interface IFormValues {
	id: number;
	name: string;
	value: number;
}

export type ReactNodeType = ReactNode;

export type InputTypeValues = "text" | "number" | "password";

export type BlockFormKeysEvent = KeyboardEvent<HTMLInputElement>;

export type FormLoginPropsType = { title: string; subTitle: string; data: any };

export type FormRegisterPropsType = {
	title: string;
	subTitle: string;
	data: any;
};
