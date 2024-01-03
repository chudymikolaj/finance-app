"use client";

import { BORDER_RADIUS, CUBICS, SIZES } from "@/styles/constants";
import { FlexRowAlignCenter } from "@/styles/mixins.styled";
import styled from "styled-components";

export const Button = styled.button`
	${FlexRowAlignCenter}
	gap: 10px;

	padding: 6px 10px;
	border: 1px solid ${({ theme }) => theme.colorButtonBorder};
	border-radius: ${BORDER_RADIUS};
	transition: opacity ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.8;
	}

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

export const ButtonName = styled.span`
	font-size: ${SIZES.buttonFontSize};
	color: ${({ theme }) => theme.colorButtonFont};
`;
