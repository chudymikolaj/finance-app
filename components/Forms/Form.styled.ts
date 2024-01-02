"use client";

import styled from "styled-components";
import ButtonComponent from "@/components/Buttons/Button";
import { BORDER_RADIUS, CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import {
	ButtonSubmit,
	FlexColumnStart,
	FlexRowSpaceBetween,
} from "@/styles/mixins.styled";

export const FormElement = styled.form`
	${FlexColumnStart}
	gap: 10px;

	width: 100%;
`;

export const FormElementHeader = styled.div`
	${FlexRowSpaceBetween}
	gap: 10px;

	width: 100%;
`;

export const FormElementTitle = styled.h3`
	font-weight: ${WEIGHT.bold};
	font-size: ${SIZES.tabName};
`;

export const FormElementSubmit = styled(ButtonComponent)`
	${ButtonSubmit}

	background-color: ${({ theme }) => theme.colorButton};
	color: ${({ theme }) => theme.colorButtonFont};
	transition: background-color 250ms ${CUBICS.easyOut};

	&:hover {
		background-color: ${({ theme }) => theme.colorElement_5};
	}
`;

export const ErrorMessage = styled.div`
	width: 100%;
	padding: 9px;
	border: 1px solid ${({ theme }) => theme.colorRed};
	border-radius: ${BORDER_RADIUS};
	display: block;
	text-align: center;
	color: ${({ theme }) => theme.colorRed};
`;
