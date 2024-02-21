"use client";

import styled from "styled-components";
import ButtonSVG from "@/components/Buttons/ButtonSvg";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, SIZES, WEIGHT } from "@/styles/constants";
import {
	FlexCenter,
	FlexColumn,
	FlexColumnStart,
	FlexRow,
	FlexRowAlignCenter,
	FlexRowSpaceBetweenCenter,
	ScrollBarColor,
} from "@/styles/mixins.styled";

export const AssetManagementTabsContainer = styled.div`
	width: 100%;
`;

export const AssetManagementTabsWrapper = styled.div`
	${FlexCenter}
`;

export const AssetManagementTabsTab = styled.div`
	${FlexColumn}
	width: 100%;
	height: 100%;
`;

export const AssetManagementTabsTabName = styled.h3<{ $color: string }>`
	${FlexRowAlignCenter}
	gap: 15px;

	width: 100%;
	padding: 0 0 15px;
	margin: 0 auto 15px;

	@media ${devices.md} {
		padding: 0 0 25px;
		margin: 0 auto 25px;
	}

	border-bottom: 1px solid ${({ theme }) => theme.lineColor};
	font-size: ${SIZES.tabName};
	font-weight: ${WEIGHT.semiBold};

	&:before {
		content: "";
		width: 15px;
		height: 15px;
		background-color: ${({ $color }) => ($color ? $color : "#333")};
		display: inline-block;
		border-radius: 15px;
	}
`;
