"use client";

import styled from "styled-components";
import { BORDER_RADIUS } from "@/styles/constants";
import { FlexCenter } from "@/styles/mixins.styled";

export const InputLabel = styled.label`
	width: 100%;
`;

export const InputElement = styled.input`
	width: 100%;
	max-width: calc(100%);
	padding: 10px 16px;
	background-color: ${({ theme }) => theme.colorElement_5};
	border: unset;
	border-radius: ${BORDER_RADIUS};
	font-size: 14px;
	color: ${({ theme }) => theme.color};
`;

export const InputElementWithSymbol = styled(InputElement)`
	padding: 10px 56px 10px 16px;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	appearance: none;
`;

export const InputElementWrapper = styled.div`
	width: 100%;
	border-radius: ${BORDER_RADIUS};
	position: relative;
	overflow: hidden;
`;

export const PercentageSymbol = styled.div`
	${FlexCenter}

	width: 40px;
	height: calc(100% - 2px);
	background-color: ${({ theme }) => theme.colorElement_5};
	border-radius-top-right: ${BORDER_RADIUS};
	border-radius-bottom-right: ${BORDER_RADIUS};
	position: absolute;
	top: 1px;
	right: 1px;
	bottom: 1px;
	pointer-events: none;
`;
