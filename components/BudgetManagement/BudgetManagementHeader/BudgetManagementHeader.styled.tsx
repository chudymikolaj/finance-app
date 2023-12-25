"use client";

import styled from "styled-components";

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
