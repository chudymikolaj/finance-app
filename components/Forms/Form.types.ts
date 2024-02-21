"use client";

import { type KeyboardEvent, type ReactNode } from "react";

export type FormAddAssetListTabItemPropsType = {
	categoryId: string;
	closePopup: () => void;
	tabId: number;
};

export type FormEditAssetListTabItemPropsType = {
	categoryId: string;
	data: {
		id: number;
		idAssetItem: string;
		title: string;
		value: number;
	};
	closePopup: () => void;
};

export type FormChangeWalletProportionsPropsType = {
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
