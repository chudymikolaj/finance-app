"use client";

import styled from "styled-components";

import { devices } from "@/styles/breakpoints";
import {
	BORDER_RADIUS,
	SIZES,
	WEIGHT,
} from "@/styles/constants";
import {
	FlexCenter,
	FlexColumn,
	FlexColumnStart,
	FlexRow,
	FlexRowAlignCenter,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";

export const BudgetManagementTabsContainer = styled.div`
	padding: 16px 0 0;

	@media ${devices.xl} {
		padding: 30px 0 0;
	}

	height: 100%;
	display: block;
`;

export const BudgetManagementTabsWrapper = styled.div`
	${FlexCenter}

	width: 100%;
	height: 100%;
	margin: auto;
`;

export const BudgetManagementTabsTab = styled.div`
	${FlexColumn}
	width: 100%;
	height: 100%;
`;

export const BudgetManagementTabsTabName = styled.h3<{ $color: string }>`
	${FlexRowAlignCenter}
	gap: 15px;

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

export const BudgetManagementTabsTabList = styled.ul`
	${FlexColumnStart}
	gap: 6px;

	width: 100%;
	height: 100%;
	padding: 16px 0 6px;

	@media ${devices.xl} {
		padding: 18px 0 6px;
	}

	font-size: ${SIZES.tabAssetsText};
	font-weight: ${WEIGHT.medium};
	overflow-y: auto;
`;

export const BudgetManagementTabsTabListItem = styled.li`
	${FlexRowSpaceBetweenCenter}
	gap: 10px;

	width: 100%;
	padding: 10px;

	@media ${devices.xl} {
		padding: 15px;
	}

	background-color: ${({ theme }) => theme.colorElement_6};
	border-radius: ${BORDER_RADIUS};
`;

export const BudgetManagementTabsTabListItemName = styled.div`
	width: 100%;
	max-width: calc(60% - 20px);

	@media ${devices["2xl"]} {
		max-width: calc(70% - 20px);
	}
`;

export const BudgetManagementTabsTabListItemValue = styled.div`
	width: 100%;
	max-width: calc(40% - 20px);

	@media ${devices["2xl"]} {
		max-width: calc(20% - 20px);
	}
`;

export const BudgetManagementTabsTabListItemButtons = styled.div`
	${FlexRow}
	gap: 10px;

	width: 40px;
`;