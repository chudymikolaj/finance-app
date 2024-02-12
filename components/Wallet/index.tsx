"use client";

import { useSession } from "next-auth/react";
import { useState, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import setMaximumValue from "@/utils/setMaximumValue";
import EditorWallet from "./EditorWallet";
import SummaryTransactions from "./SummaryTransactions";

import {
	type ActionType,
	type FormActionType,
	type InputCashFlowType,
	type ShowWalletEditorType,
} from "./wallet.types";

import {
	WalletContainer,
	WalletSummary,
	WalletSummaryButton,
	WalletSummaryHeader,
	WalletSummaryTitle,
} from "./wallet.styled";

const WalletComponent = () => {
	const { data: session }: any = useSession();
	const { constants, wallet, addExpense, addRevenue } = useAppContext();

	const maxValue = constants?.maxValue;
	const sumRevenues = wallet?.sumRevenues;
	const sumBills = wallet?.sumBills;
	const restRevenues = wallet?.restRevenues;

	const [showWalletEditor, setShowWalletEditor] = useState<ShowWalletEditorType>(false);
	const [formAction, setFormAction] = useState<FormActionType>({
		type: "expense",
		value: "",
		text: "",
	});

	const choiceTypes = [
		{
			name: "Wydatki",
			slug: "expense",
		},
		{
			name: "Przychody",
			slug: "revenue",
		},
	];

	const resetForm = () => {
		setFormAction({
			type: "expense",
			value: "",
			text: "",
		});
	};

	const getInputCashFlowListItemType = (event: InputCashFlowType) => {
		const getTargetValue = event.target.value;
		setFormAction((prevState) => ({
			...prevState,
			type: getTargetValue,
		}));
	};

	const getInputCashFlowListItemValue = (event: InputCashFlowType) => {
		const getTargetValue = event.target.value;
		setFormAction((prevState) => ({
			...prevState,
			value: getTargetValue,
		}));
	};

	const getInputCashFlowListItemText = (event: InputCashFlowType) => {
		const getTargetValue = event.target.value;
		setFormAction((prevState) => ({
			...prevState,
			text: getTargetValue,
		}));
	};

	const addToListElement = (event: FormEvent, maxValue: number) => {
		event.preventDefault();
		const currentDate = new Date().toJSON().slice(0, 10);

		let typeAction: ActionType = (id, name, value, tags, userID, userJWT) =>
			addExpense(id, name, value, tags, false, currentDate, userID, userJWT);

		if (formAction.type === "revenue") {
			typeAction = (id, name, value, tags, userID, userJWT) =>
				addRevenue(id, name, value, tags, currentDate, userID, userJWT);
		}

		const changedSalary = Number(formAction.value);

		if (formAction.value !== "" && formAction.text !== "" && changedSalary <= maxValue) {
			const getUserID = session?.id;
			const getUserJWT = session?.jwt;

			typeAction(uuidv4(), formAction.text, Number(formAction.value), [], getUserID, getUserJWT);
			resetForm();
			setShowWalletEditor(false);
		}
	};

	const handleOpenEditor = () => {
		setShowWalletEditor(true);
	};

	const handleCloseEditor = () => {
		setShowWalletEditor(false);
	};

	return (
		<WalletContainer>
			<WalletSummary>
				<WalletSummaryHeader>
					<WalletSummaryTitle>Miesięczne saldo</WalletSummaryTitle>
					<WalletSummaryButton
						name="Dodaj transakcje"
						svgUrl="/add.svg"
						action={handleOpenEditor}
						$big
					/>
				</WalletSummaryHeader>

				<SummaryTransactions
					valueOfTranactions={setMaximumValue(sumRevenues, maxValue)}
					valueOfBills={setMaximumValue(sumBills, maxValue)}
					valueOfRest={setMaximumValue(restRevenues, maxValue)}
				/>
			</WalletSummary>

			<EditorWallet
				openPopup={showWalletEditor}
				closePopup={handleCloseEditor}
				submitForm={(event) => addToListElement(event, maxValue)}
				maxValue={maxValue}
				choiceTypes={choiceTypes}
				checkedAction={formAction.type}
				resetValue={formAction.value}
				resetText={formAction.text}
				onChangeType={getInputCashFlowListItemType}
				onChangeValueInput={getInputCashFlowListItemValue}
				onChangeTextInput={getInputCashFlowListItemText}
			/>
		</WalletContainer>
	);
};

export default WalletComponent;
