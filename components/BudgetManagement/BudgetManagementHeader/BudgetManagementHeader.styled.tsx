"use client";

import styled from "styled-components";

import ButtonSVG from "@/components/Buttons/ButtonSvg";
import { SIZES, WEIGHT } from "@/styles/constants";
import { FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";

export const BudgetHeader = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 30px;
`;

export const BudgetHeaderTitle = styled.div`
	font-size: ${SIZES.headerText};
	font-weight: ${WEIGHT.bold};
`;

export const BudgetHeaderButton = styled(ButtonSVG)`
	width: 119px;
	min-width: 119px;
	height: 30px;

	svg {
		width: 15px;
		height: 15px;
	}
`;
