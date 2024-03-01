"use client";

import { type KeyboardEvent, type ReactNode } from "react";

export type FormAddAssetListTabItemPropsType = {
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
	session: any;
	closePopup: () => void;
};

export interface IFormValues {
	[key: string]: string;
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
