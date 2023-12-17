"use client";

import { devices } from "@/styles/breakpoints";
import { SIZES, WEIGHT } from "@/styles/constants";
import { FlexColumnCenter, FlexRowAlignCenter } from "@/styles/mixins.styled";
import styled from "styled-components";

export const BudgetManagementSummaryTabsContainer = styled.div`
	${FlexColumnCenter}
	gap: 4px;

	width: 100%;
	padding: 18px 0 0;

	@media ${devices.xl} {
		${FlexRowAlignCenter}
	}

	border-top: 1px solid ${({ theme }) => theme.colorElement_5};
	text-align: center;
	font-size: ${SIZES.tabSummary};
	font-weight: ${WEIGHT.medium};
`;
export const BudgetManagementSummaryTabsName = styled.span``;
export const BudgetManagementSummaryTabsValue = styled.span`
	color: ${({ theme }) => theme.colorGreen};
`;
