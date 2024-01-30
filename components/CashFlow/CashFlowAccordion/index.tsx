import React, { useState } from "react";

import { type CashFlowAccordionType } from "./CashFlowAccordion.types";

import {
	CashFlowTabAccordion,
	CashFlowTabAccordionContent,
	CashFlowTabAccordionHeader,
} from "./CashFlowAccordion.styled";

const CashFlowAccordion = ({
	title,
	isOpen,
	children,
	handleOpenAccordion,
}: CashFlowAccordionType) => {
	return (
		<CashFlowTabAccordion $isActive={isOpen}>
			<CashFlowTabAccordionHeader onClick={handleOpenAccordion}>
				{title}
			</CashFlowTabAccordionHeader>

			{isOpen && (
				<CashFlowTabAccordionContent>{children}</CashFlowTabAccordionContent>
			)}
		</CashFlowTabAccordion>
	);
};

export default CashFlowAccordion;
