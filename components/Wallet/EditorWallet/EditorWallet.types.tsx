import { type ChangeEvent, type FormEvent, type KeyboardEvent } from "react";

export type EditorWalletProps = {
	choiceTypes: { name: string; slug: string }[];
	checkedAction: string;
	resetValue: string;
	resetText: string;
	maxValue: number;
	openPopup: boolean;
	closePopup: () => void;
	onChangeType: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeValueInput: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeTextInput: (event: ChangeEvent<HTMLInputElement>) => void;
	submitForm: (event: FormEvent<HTMLFormElement>) => void;
};

export type BlockFormKeysEvent = KeyboardEvent<HTMLInputElement>;
