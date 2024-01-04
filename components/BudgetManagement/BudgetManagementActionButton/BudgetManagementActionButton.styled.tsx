"use client";

import Button from "@/components/Buttons/Button";
import { CUBICS } from "@/styles/constants";
import { Button as ButtonStyle } from "@/styles/mixins.styled";
import styled from "styled-components";

export const BudgetManagementActionButtonContainer = styled.div`
	padding: 18px 0;
	border-top: 1px solid ${({ theme }) => theme.backgroundElement};
	text-align: center;
`;

export const BudgetManagementActionButton = styled(Button)`
	${ButtonStyle}

	background-color: ${({ theme }) => theme.buttonColor};
	color: ${({ theme }) => theme.buttonColorFont};
	transition: background-color 250ms ${CUBICS.easyOut};

	&:hover {
		background-color: ${({ theme }) => theme.backgroundElement};
	}
`;
