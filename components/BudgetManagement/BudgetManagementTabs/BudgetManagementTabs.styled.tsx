"use client";

import styled from "styled-components";

import ButtonSVG from "@/components/Buttons/ButtonSVG";
import {
	BORDER_RADIUS,
	CUBICS,
	FONT_SIZE_BUTTONS,
	SIZES,
	WEIGHT,
} from "@/styles/constants";
import {
	FlexCenter,
	FlexColumnStart,
	FlexRow,
	FlexRowAlignCenter,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

export const BudgetManagementTabsContainer = styled.div`
	padding: 18px 0;

	@media ${devices.lg} {
		padding: 30px 0;
	}
`;

export const BudgetManagementTabsWrapper = styled.div`
	${FlexCenter}

	width: 100%;
	margin: auto;
`;

export const BudgetManagementTabsTab = styled.div`
	width: 100%;
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
	gap: 10px;

	width: 100%;
	margin: 30px auto;
`;

export const BudgetManagementTabsTabListItem = styled.li`
	${FlexRowSpaceBetweenCenter}
	gap: 10px;

	width: 100%;
	padding: 15px;
	background-color: ${({ theme }) => theme.colorElement_6};
	border-radius: ${BORDER_RADIUS};
	font-weight: ${WEIGHT.medium};
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

export const BudgetManagementTabsButton = styled(ButtonSVG)`
	transition: opacity ${CUBICS.easyOut} 250ms, transform ${CUBICS.easyOut} 250ms;
	font-size: ${FONT_SIZE_BUTTONS};

	&:hover {
		opacity: 0.8;
	}

	&:active {
		transform: scale(0.75);
		opacity: 0.25;
	}

	div {
		height: 15px;
		width: 15px;
		${FlexCenter}
	}

	svg {
		height: 15px;
		width: 15px;
	}
`;
