"use client";

import styled from "styled-components";

import ButtonSVG from "@/components/Buttons/ButtonSVG";
import { CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import { FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";

export const BudgetHeader = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 30px;
`;

export const BudgetHeaderTitle = styled.div`
	font-size: ${SIZES.headerText};
	font-weight: ${WEIGHT.bold};
`;

export const ButtonOptions = styled(ButtonSVG)`
	transition: opacity ${CUBICS.easyOut} 250ms, transform ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		transform: scale(0.75);
		opacity: 0.25;
	}
`;
