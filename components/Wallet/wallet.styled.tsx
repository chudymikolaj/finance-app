"use client";

import styled from "styled-components";
import ButtonRefSvg from "@/components/Buttons/ButtonRefSvg";

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
	padding: 15px;

	@media ${devices.md} {
		padding: 30px;
	}

	@media ${devices.xl} {
		max-width: 500px;
	}

	margin: 0 auto 30px;
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
	flex: 1;
	font-size: ${SIZES.headerText};
	font-weight: ${WEIGHT.medium};
`;

export const WalletSummaryButton = styled(ButtonRefSvg)`
	min-width: 140px;
	width: 140px;
	max-width: 140px;
	height: 30px;
	flex: 1;
`;
