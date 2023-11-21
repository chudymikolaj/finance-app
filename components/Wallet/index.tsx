"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { type ActionType } from "./wallet.types";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import SalaryElement from "./SalaryElement";
import EditorWallet from "./EditorWallet";
import setMaximumValue from "@/utils/setMaximumValue";

import {
	WalletContainer,
	WalletHeader,
	WalletHeaderTitle,
	WalletHeaderButton,
	WalletHeaderSvg,
} from "./wallet.styled";

export default function Wallet() {
	const { constants, wallet, addExpense, addRevenue } = useAppContext();

	const maxValue = constants?.maxValue;
	const sumSalary = wallet?.sumSalary;
	const sumBills = wallet?.sumBills;
	const restSalary = wallet?.restSalary;

	const [showWalletSettings, setShowWalletSettings] = useState<boolean>(false);
	const [choiceAction, setChoiceAction] = useState("expense");
	const [addValue, setAddValue] = useState<string>("");
	const [addText, setAddText] = useState<string>("");

	const openWalletSetting = () => {
		setShowWalletSettings((prevState) => !prevState);
	};

	const closeWalletSetting = () => {
		setShowWalletSettings(false);
	};

	const resetForm = () => {
		setChoiceAction("expense");
		setAddValue("");
		setAddText("");
	};

	const getInputCashFlowListItemValue = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		const getTargetValue = event.target.value;
		setAddValue(getTargetValue);
	};

	const getInputCashFlowListItemText = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		const getTargetValue = event.target.value;
		setAddText(getTargetValue);
	};

	const addToListElement = (event: FormEvent, maxValue: number) => {
		event.preventDefault();
		let typeAction: ActionType = (id, name, value, tags) =>
			addExpense(id, name, value, tags, false);

		if (choiceAction === "revenue") {
			typeAction = (id, name, value, tags) => addRevenue(id, name, value, tags);
		}

		const changedSalary = Number(addValue);

		if (addValue !== "" && addText !== "" && changedSalary <= maxValue) {
			typeAction(uuidv4(), addText, Number(addValue), []);
			resetForm();
			closeWalletSetting();
		}
	};

	return (
		<WalletContainer>
			<WalletHeader>
				<WalletHeaderTitle>Miesięczne saldo</WalletHeaderTitle>
				<WalletHeaderButton onClick={openWalletSetting}>
					<WalletHeaderSvg src="/add.svg" />
				</WalletHeaderButton>
			</WalletHeader>

			<SalaryElement
				valueOfSalary={setMaximumValue(sumSalary, maxValue)}
				valueOfBills={setMaximumValue(sumBills, maxValue)}
				valueOfRest={setMaximumValue(restSalary, maxValue)}
			>
				<EditorWallet
					show={showWalletSettings}
					submitForm={(event) => addToListElement(event, maxValue)}
					choiceAction={setChoiceAction}
					checkedAction={choiceAction}
					onChangeValueInput={getInputCashFlowListItemValue}
					onChangeTextInput={getInputCashFlowListItemText}
					resetValue={addValue}
					resetText={addText}
					maxValue={maxValue}
				/>
			</SalaryElement>
		</WalletContainer>
	);
}
