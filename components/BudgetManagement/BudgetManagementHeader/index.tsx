"use client";

import { useState } from "react";

import { FormChangeWalletProportions } from "@/components/Forms";
import PopupComponent from "@/components/Popup";

import {
	BudgetHeader,
	BudgetHeaderTitle,
	BudgetHeaderButton,
} from "./BudgetManagementHeader.styled";

const BudgetManagementHeader = () => {
	const [openPopup, setOpenPopup] = useState(false);

	const handleOpenPopup = () => setOpenPopup(true);
	const handleClosePopup = () => setOpenPopup(false);

	return (
		<>
			<BudgetHeader>
				<BudgetHeaderTitle>Zarządzanie budżetem</BudgetHeaderTitle>
				<BudgetHeaderButton
					action={handleOpenPopup}
					name="Zmień opcje"
					svgUrl="./settings.svg"
					$big
				/>
			</BudgetHeader>
			<PopupComponent
				openPopup={openPopup}
				closePopup={handleClosePopup}
			>
				<FormChangeWalletProportions closePopup={handleClosePopup} />
			</PopupComponent>
		</>
	);
};

export default BudgetManagementHeader;
