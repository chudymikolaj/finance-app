"use client";

import { devices } from "@/styles/breakpoints";
import { SIZES, WEIGHT } from "@/styles/constants";
import { FlexColumnCenter, FlexRowAlignCenter } from "@/styles/mixins.styled";
import styled from "styled-components";

export const AssetManagementSummaryTabsContainer = styled.div`
	${FlexColumnCenter}
	gap: 4px;

	width: 100%;
	padding: 16px 0 0;

	@media ${devices.sm} {
		${FlexRowAlignCenter}
	}

	@media ${devices.xl} {
		padding: 18px 0 0;
	}

	border-top: 1px solid ${({ theme }) => theme.backgroundElement};
	text-align: center;
	font-size: ${SIZES.tabSummary};
	font-weight: ${WEIGHT.medium};
`;

export const AssetManagementSummaryTabsName = styled.span``;

export const AssetManagementSummaryTabsValue = styled.span`
	color: ${({ theme }) => theme.greenColor};
`;
