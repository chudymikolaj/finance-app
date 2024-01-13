"use client";

import styled from "styled-components";

import Button from "@/components/Buttons/Button";

import { CUBICS } from "@/styles/constants";
import { ButtonSubmit } from "@/styles/mixins.styled";

export const AssetManagementActionButtonContainer = styled.div`
	width: 100%;
	padding: 15px 0 0;
	border-top: 1px solid ${({ theme }) => theme.lineColor};
	text-align: center;
`;

export const AssetManagementActionButton = styled(Button)`
	${ButtonSubmit}

	background-color: ${({ theme }) => theme.activeButtonColor};
	border: unset;
	color: ${({ theme }) => theme.buttonColorFont};
	transition: background-color 250ms ${CUBICS.easyOut};

	&:hover {
		background-color: ${({ theme }) => theme.backgroundPopup_5};
	}
`;
