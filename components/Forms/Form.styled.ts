"use client";

import styled from "styled-components";

import ButtonComponent from "@/components/Buttons/Button";
import { BORDER_RADIUS, CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import {
	ButtonSubmit,
	FlexColumnStart,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";

export const FormElement = styled.form`
	${FlexColumnStart}
	gap: 15px;

	width: 100%;
`;

export const FormElementHeader = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 10px;

	width: 100%;
	margin: 0 auto 25px;
`;

export const FormElementTitle = styled.h3`
	font-weight: ${WEIGHT.bold};
	font-size: ${SIZES.tabName};
`;

export const FormElementSubmit = styled(ButtonComponent)`
	${ButtonSubmit}

	margin: 15px auto 0;
	padding: 12px 16px;
	background-color: ${({ theme }) => theme.activeButtonColor};
	border: 0;
	justify-content: center;
	color: ${({ theme }) => theme.buttonColorFont};
	text-align: center;
	transition: background-color 250ms ${CUBICS.easyOut};

	&:hover {
		background-color: ${({ theme }) => theme.formLabelBackground};
	}
`;

export const ErrorMessage = styled.div`
	width: 100%;
	padding: 9px;
	border: 1px solid ${({ theme }) => theme.redColor};
	border-radius: ${BORDER_RADIUS};
	display: block;
	text-align: center;
	color: ${({ theme }) => theme.redColor};
`;
