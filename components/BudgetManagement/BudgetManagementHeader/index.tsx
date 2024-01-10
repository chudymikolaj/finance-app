"use client";

import { useRef, useState } from "react";
import useOutsideClick from "@/utils/useOutsideClick";

import {
	BudgetHeader,
	BudgetHeaderTitle,
	BudgetHeaderButton,
} from "./BudgetManagementHeader.styled";
import { FormChangeWalletProportions } from "@/components/Forms";
import Popup from "@/components/Popup";

const BudgetManagementHeader = () => {
	const [openPopup, setOpenPopup] = useState(false);
	const BudgetManagementPopupRef = useRef(null);

	const handleOpenPopup = () => setOpenPopup(true);
	const handleClosePopup = () => setOpenPopup(false);

	useOutsideClick({
		isVisible: openPopup,
		setIsVisible: setOpenPopup,
		refs: [BudgetManagementPopupRef],
	});

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
			<Popup
				ref={BudgetManagementPopupRef}
				show={openPopup}
			>
				<FormChangeWalletProportions closePopup={handleClosePopup} />
			</Popup>
		</>
	);
};

export default BudgetManagementHeader;
