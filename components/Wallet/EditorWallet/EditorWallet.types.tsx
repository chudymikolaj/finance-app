import { type ChangeEvent, type FormEvent, type KeyboardEvent } from "react";

export type EditorWalletProps = {
	show: boolean;
	choiceAction: (event: string) => void;
	onChangeValueInput: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeTextInput: (event: ChangeEvent<HTMLInputElement>) => void;
	submitForm: (event: FormEvent<HTMLFormElement>) => void;
	checkedAction: string;
	resetValue: string;
	resetText: string;
	maxValue: number;
};

export type blockKeysEvent = KeyboardEvent<HTMLInputElement>;
