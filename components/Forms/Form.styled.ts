"use client";

import styled from "styled-components";

import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import { BORDER_RADIUS, CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import {
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

export const FormElementSubmit = styled(ButtonSubmit)`
	margin: 15px auto 0;
	padding: 12px 16px;
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
