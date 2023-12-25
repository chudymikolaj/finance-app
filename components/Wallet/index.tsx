"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import {
	type ActionType,
	type FormActionType,
	type InputCashFlowType,
	type ShowWalletEditorType,
} from "./wallet.types";

import ButtonRefSvg from "@/components/Buttons/ButtonRefSvg";
import setMaximumValue from "@/utils/setMaximumValue";
import EditorWallet from "./EditorWallet";
import SalaryElement from "./SalaryElement";

import {
	WalletContainer,
	WalletHeader,
	WalletHeaderTitle,
} from "./wallet.styled";

export default function Wallet() {
	const { constants, wallet, addExpense, addRevenue } = useAppContext();

	const maxValue = constants?.maxValue;
	const sumRevenues = wallet?.sumRevenues;
	const sumBills = wallet?.sumBills;
	const restRevenues = wallet?.restRevenues;

	const showWalletEditorRef = useRef<HTMLDivElement | null>(null);
	const showWalletButtonEditorRef = useRef<HTMLButtonElement | null>(null);

	const [showWalletEditor, setShowWalletEditor] =
		useState<ShowWalletEditorType>(false);
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

		let typeAction: ActionType = (id, name, value, tags) =>
			addExpense(id, name, value, tags, false, currentDate);

		if (formAction.type === "revenue") {
			typeAction = (id, name, value, tags) =>
				addRevenue(id, name, value, tags, currentDate);
		}

		const changedSalary = Number(formAction.value);

		if (
			formAction.value !== "" &&
			formAction.text !== "" &&
			changedSalary <= maxValue
		) {
			typeAction(uuidv4(), formAction.text, Number(formAction.value), []);
			resetForm();
			setShowWalletEditor(false);
		}
	};

	const handleOpenEditor = () => {
		setShowWalletEditor((prevState) => !prevState);
	};

	const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
		const target = event.target as Node; // Typecast the event target

		if (
			showWalletEditorRef.current &&
			!showWalletEditorRef.current.contains(target) &&
			showWalletButtonEditorRef.current &&
			!showWalletButtonEditorRef.current.contains(target)
		) {
			setShowWalletEditor(false);
		}
	};

	useEffect(() => {
		if (showWalletEditor) {
			document.addEventListener("mousedown", handleOutsideClick);
			document.addEventListener("touchstart", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
		};
	}, [showWalletEditor]);

	return (
		<WalletContainer>
			<WalletHeader>
				<WalletHeaderTitle>Miesięczne saldo</WalletHeaderTitle>
				<ButtonRefSvg
					ref={showWalletButtonEditorRef}
					svgUrl="/add.svg"
					action={handleOpenEditor}
					$big
				/>
			</WalletHeader>

			<SalaryElement
				valueOfSalary={setMaximumValue(sumRevenues, maxValue)}
				valueOfBills={setMaximumValue(sumBills, maxValue)}
				valueOfRest={setMaximumValue(restRevenues, maxValue)}
			>
				<EditorWallet
					show={showWalletEditor}
					getRef={showWalletEditorRef}
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
			</SalaryElement>
		</WalletContainer>
	);
}
