"use client";

import styled from "styled-components";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import { FlexColumn, FlexRow } from "@/styles/mixins.styled";

export const CashFlowTabAccordionHeader = styled.div`
	${FlexRow}

	width: 100%;
	padding: 20px;

	@media ${devices.md} {
		padding: 30px;
	}

	transition: opacity ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.4;
	}

	font-size: ${SIZES.accordionHeader};
	font-weight: ${WEIGHT.medium};
	cursor: pointer;
`;

export const CashFlowTabAccordionContent = styled.div`
	margin: 0 15px 15px;

	@media ${devices.md} {
		margin: 0 30px 30px;
	}

	${FlexColumn}
	gap: 15px;
`;

export const CashFlowTabAccordion = styled.div<{ $isActive: boolean }>`
	width: 100%;
	height: auto;
	background-color: ${(props) => props.theme.backgroundElement};
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: ${BORDER_RADIUS};
	opacity: ${(props) => (props.$isActive ? 1 : 0.5)};

	&:first-child {
		border-bottom: unset;
	}

	&:last-child {
		border-radius: ${BORDER_RADIUS};
	}

	overflow: hidden;
`;
