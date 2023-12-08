"use client";

import styled from "styled-components";

import Button from "@/components/Buttons/Button";
import { CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import { FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

export const BudgetHeader = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 30px;
`;

export const BudgetHeaderTitle = styled.div`
	font-size: ${SIZES.normalText};
	font-weight: ${WEIGHT.bold};

	@media ${devices.lg} {
		font-size: ${SIZES.headerText};
	}
`;

export const ButtonOptions = styled(Button)`
	transition: opacity ${CUBICS.easyOut} 250ms, transform ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		transform: scale(0.75);
		opacity: 0.25;
	}
`;
