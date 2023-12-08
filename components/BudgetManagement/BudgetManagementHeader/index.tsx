import React from "react";
import {
	BudgetHeader,
	BudgetHeaderTitle,
	ButtonOptions,
} from "./BudgetManagementHeader.styled";

const BudgetManagementHeader = () => {
	return (
		<BudgetHeader>
			<BudgetHeaderTitle>Zarządzanie budżetem</BudgetHeaderTitle>
			<ButtonOptions svgUrl="./settings.svg" />
		</BudgetHeader>
	);
};

export default BudgetManagementHeader;
