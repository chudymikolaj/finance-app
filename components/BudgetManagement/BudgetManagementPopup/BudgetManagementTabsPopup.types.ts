import { type ChangeEvent, type SyntheticEvent } from "react";

export type BudgetPopupType = {
  showPopup: boolean;
  inputTitleValue: string;
  inputValue: string;
  onSubmit: (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => void;
	handleTitle: (event: ChangeEvent<HTMLInputElement>) => void;
	handleValue: (event: ChangeEvent<HTMLInputElement>) => void;
	closePopup: () => void;
}

export type Ref = HTMLDivElement;