import React, { useState } from "react";

import { type CashFlowAccordionType } from "./CashFlowAccordion.types";

import {
	CashFlowTabAccordion,
	CashFlowTabAccordionContent,
	CashFlowTabAccordionHeader,
} from "./CashFlowAccordion.styled";

const CashFlowAccordion = ({
	title,
	isOpenInitially = false,
	children,
}: CashFlowAccordionType) => {
	const [isOpen, setIsOpen] = useState(isOpenInitially);

	const handleOpenAccordion = () => setIsOpen((prevState) => !prevState);

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
