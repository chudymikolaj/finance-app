"use client";

import Button from "@/components/Buttons/Button";
import { CUBICS } from "@/styles/constants";
import { Button as ButtonStyle } from "@/styles/mixins.styled";
import styled from "styled-components";

export const BudgetManagementActionButtonContainer = styled.div`
	padding: 18px 0;
	border-top: 1px solid ${({ theme }) => theme.colorElement_5};
	text-align: center;
`;

export const BudgetManagementActionButton = styled(Button)`
	${ButtonStyle}

	background-color: ${({ theme }) => theme.colorButton};
	color: ${({ theme }) => theme.colorButtonFont};
	transition: background-color 250ms ${CUBICS.easyOut};

	&:hover {
		background-color: ${({ theme }) => theme.colorElement_5};
	}
`;
