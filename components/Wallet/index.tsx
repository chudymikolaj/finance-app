"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

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
	const { constants, wallet, changeSalary } = useAppContext();

	const maxValue = constants?.maxValue;
	const sumSalary = wallet?.sumSalary;
	const sumBills = wallet?.sumBills;
	const restSalary = wallet?.restSalary;

	const [showWalletSettings, setShowWalletSettings] = useState<boolean>(false);
	const [newSalary, setNewSalary] = useState<string>("");

	const openWalletSetting = () => {
		setShowWalletSettings((prevState) => !prevState);
	};

	const closeWalletSetting = () => {
		setShowWalletSettings(false);
	};

	const getInputSalaryValue = (event: ChangeEvent<HTMLInputElement>) => {
		const getTargetValue = event.target.value;
		setNewSalary(getTargetValue);
	};

	const changeAndCloseSalarySetting = (event: FormEvent, maxValue: number) => {
		event.preventDefault();

		const changedSalary = Number(newSalary);

		if (newSalary !== "" && changedSalary <= maxValue) {
			changeSalary(changedSalary);
			setNewSalary("");
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
					submitForm={(event) => changeAndCloseSalarySetting(event, maxValue)}
					onChangeInput={getInputSalaryValue}
					resetValue={newSalary}
					maxValue={maxValue}
				/>
			</SalaryElement>
		</WalletContainer>
	);
}
