"use client";

import styled from "styled-components";

import { BORDER_RADIUS, SIZES } from "@/styles/constants";
import { FlexCenter } from "@/styles/mixins.styled";

export const InputLabel = styled.label`
	width: 100%;
`;

export const InputElement = styled.input<{ $bgColor?: "light" | "dark" }>`
	width: 100%;
	max-width: calc(100%);
	padding: 12px 16px;
	background-color: ${({ $bgColor, theme }) =>
		$bgColor === "light"
			? theme.formLabelLightBackground
			: theme.formLabelBackground};
	border: unset;
	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.inputFontSize};
	color: ${({ theme }) => theme.color};
`;

export const InputElementWithSymbol = styled(InputElement)`
	padding: 12px 56px 12px 16px;

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

export const PercentageSymbol = styled.div<{ $bgColor?: boolean }>`
	${FlexCenter}

	width: 40px;
	height: 100%;
	background-color: ${({ $bgColor, theme }) =>
		$bgColor !== false
			? theme.formLabelLightBackground
			: theme.formLabelBackground};
	border-top-right-radius: ${BORDER_RADIUS};
	border-bottom-right-radius: ${BORDER_RADIUS};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	pointer-events: none;
`;
