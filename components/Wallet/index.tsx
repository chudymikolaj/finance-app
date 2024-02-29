"use client";

import { useSession } from "next-auth/react";
import { useState, type FormEvent } from "react";

import refreshMonetaryIncomesAxios from "@/utils/fetch/refreshMonetaryIncomesAxios";
import refreshMonetaryExpensesAxios from "@/utils/fetch/refreshMonetaryExpensesAxios";
import createCashFlowItemAxios from "@/utils/fetch/createCashFlowItemAxios";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import setMaximumValue from "@/utils/setMaximumValue";

import EditorWallet from "./EditorWallet";
import SummaryTransactions from "./SummaryTransactions";

import { type FormActionType, type InputCashFlowType, type ShowWalletEditorType } from "./wallet.types";

import {
	WalletContainer,
	WalletSummary,
	WalletSummaryButton,
	WalletSummaryHeader,
	WalletSummaryTitle,
} from "./wallet.styled";

const WalletComponent = () => {
	const { data: session }: any = useSession();
	const { constants, wallet, updateIncomesList, updateExpensesList } = useAppContext();

	const maxValue = constants?.maxValue;
	const sumIncomes = wallet?.sumIncomes;
	const sumBills = wallet?.sumBills;
	const restIncomes = wallet?.restIncomes;

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
			slug: "income",
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
		const changedSalary = Number(formAction.value);

		if (formAction.value !== "" && formAction.text !== "" && changedSalary <= maxValue) {
			const getUserID = session?.id;
			const getUserJWT = session?.jwt;

			const newCashFlowItem = {
				name: formAction.text,
				value: Number(formAction.value),
				date: currentDate,
				users_permissions_user: {
					connect: [getUserID],
				},
			};

			if (formAction.type === "income") {
				createCashFlowItemAxios(newCashFlowItem, getUserJWT, "/api/monetary-incomes");
				refreshMonetaryIncomesAxios(session, updateIncomesList);
			}

			if (formAction.type === "expense") {
				createCashFlowItemAxios(newCashFlowItem, getUserJWT, "/api/monetary-expenses");
				refreshMonetaryExpensesAxios(session, updateExpensesList);
			}

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
					valueOfTranactions={setMaximumValue(sumIncomes, maxValue)}
					valueOfBills={setMaximumValue(sumBills, maxValue)}
					valueOfRest={setMaximumValue(restIncomes, maxValue)}
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
