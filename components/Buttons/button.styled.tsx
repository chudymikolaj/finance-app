"use client";

import { CUBICS } from "@/styles/constants";
import { FlexCenter } from "@/styles/mixins.styled";
import styled from "styled-components";

export const Button = styled.button<{ $big?: boolean }>`
	${FlexCenter}
	height: ${(props) => (props.$big ? `20px` : `15px`)};
	width: ${(props) => (props.$big ? `20px` : `15px`)};

	transition: opacity ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.8;
	}

	svg {
		transition: opacity ${CUBICS.easyOut} 250ms,
			transform ${CUBICS.easyOut} 250ms;
	}

	&:active svg {
		transform: scale(0.75);
		opacity: 0.25;
	}
`;
