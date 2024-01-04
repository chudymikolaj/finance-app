"use client";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS } from "@/styles/constants";
import { FlexCenter, FlexColumnSpaceBetween } from "@/styles/mixins.styled";

import styled from "styled-components";

export const PopupInsideElementWrapper = styled.div`
	${FlexCenter}

	width: 100%;
	height: 100%;
	padding: 15px;
	background-color: ${({ theme }) => theme.backgroundElement_5};
	border-radius: ${BORDER_RADIUS};
	position: fixed;

	@media ${devices.md} {
		padding: 20px;
		position: absolute;
	}

	@media ${devices.xl} {
		padding: 0;
	}

	top: 0;
	left: 0;
	z-index: 10;
	backdrop-filter: blur(2px);
`;

export const PopupInsideElementContainer = styled.div`
	${FlexColumnSpaceBetween}
	gap: 20px;

	width: 100%;
	max-width: 500px;
	padding: 16px;
	background-color: ${({ theme }) => theme.backgroundElement_5};
	border: 1px solid ${({ theme }) => theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
	position: relative;
`;
