"use client";

import { BORDER_RADIUS, CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import { FlexCenter, FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";
import styled from "styled-components";

export const Button = styled.button`
	${FlexCenter}
	gap: 10px;

	padding: 6px 10px;
	background-color: ${({ theme }) => theme.buttonColor};
	border: 1px solid ${({ theme }) => theme.buttonColorBorder};
	border-radius: ${BORDER_RADIUS};
	transition: opacity ${CUBICS.easyOut} 250ms;
`;

export const ButtonSvg = styled(Button)`
	${FlexRowSpaceBetweenCenter}

	div {
		width: auto;
		height: auto;
	}

	svg {
		height: 10px;
		width: 10px;
		transition: opacity ${CUBICS.easyOut} 250ms,
			transform ${CUBICS.easyOut} 250ms;
	}

	&:active svg {
		transform: scale(0.75);
		opacity: 0.25;
	}
`;

export const ButtonSubmit = styled.button`
	width: 100%;
	height: auto;
	padding: 12px 16px;
	background-color: ${(props) => props.theme.activeButtonColor};
	border: unset;
	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.submitFontSize};
	font-weight: ${WEIGHT.medium};
	transition: background-color ${CUBICS.easyOut} 200ms;
	color: ${({ theme }) => theme.buttonSubmitColorFont};

	&:hover {
		background-color: ${(props) => props.theme.formLabelLightBackground};
		color: ${({ theme }) => theme.buttonActiveSubmitColorFont};
	}
`;

export const ButtonName = styled.span`
	font-size: ${SIZES.buttonFontSize};
	font-weight: ${WEIGHT.medium};
	color: ${({ theme }) => theme.buttonColorFont};
`;
