"use client";

import styled from "styled-components";

import { BORDER_RADIUS, SIZES, WEIGHT } from "@/styles/constants";
import { devices } from "@/styles/breakpoints";

import {
	FlexColumn,
	FlexColumnSpaceBetween,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";

export const WalletContainer = styled.div`
	${FlexColumn};

	width: 100%;

	@media ${devices.xl} {
		max-width: 500px;
	}

	padding: 30px;
	margin: 0 auto 50px;
	background-color: ${(props) => props.theme.backgroundElement};
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: ${BORDER_RADIUS};
	position: relative;
`;

export const WalletSummary = styled.div`
	${FlexColumnSpaceBetween};
	gap: 15px;
`;

export const WalletSummaryHeader = styled.div`
	${FlexRowSpaceBetweenCenter};
	flex-wrap: wrap;
	gap: 15px;

	&:after {
		content: "";
		width: 100%;
		height: 1px;
		position: relative;
		background-color: ${(props) => props.theme.borderColor};
	}
`;
export const WalletSummaryTitle = styled.h1`
	font-size: ${SIZES.headerText};
	font-weight: ${WEIGHT.medium};
`;
