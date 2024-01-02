"use client";

import { useRef, useState } from "react";

import ButtonSVG from "@/components/Buttons/ButtonSvg";
import PopupInsideElementComponent from "@/components/PopupInsideComponent";
import useOutsideClick from "@/utils/useOutsideClick";

import {
	BudgetHeader,
	BudgetHeaderTitle,
} from "./BudgetManagementHeader.styled";
import { FormChangeWalletProportions } from "@/components/Forms";

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
				<ButtonSVG
					action={handleOpenPopup}
					svgUrl="./settings.svg"
					$big
				/>
			</BudgetHeader>
			<PopupInsideElementComponent
				ref={BudgetManagementPopupRef}
				showPopup={openPopup}
			>
				<FormChangeWalletProportions closePopup={handleClosePopup} />
			</PopupInsideElementComponent>
		</>
	);
};

export default BudgetManagementHeader;
