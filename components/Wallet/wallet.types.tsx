import { type ChangeEvent } from "react";

export type ActionType = (
	id: string,
	name: string,
	value: number,
	tags: { type: string; name: string }[],
	userID: string,
	userJWT: string,
	isPaid?: boolean
) => void;

export type ShowWalletEditorType = boolean;

export type InputCashFlowType = ChangeEvent<HTMLInputElement>;

export type FormActionType = {
	type: string;
	value: string;
	text: string;
};
