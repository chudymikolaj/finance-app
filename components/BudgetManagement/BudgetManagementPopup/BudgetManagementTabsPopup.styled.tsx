import ButtonSVG from "@/components/Buttons/ButtonSVG";
import { devices } from "@/styles/breakpoints";

import {
	BORDER_RADIUS,
	CUBICS,
	FONT_SIZE_BUTTONS,
	SIZES,
	WEIGHT,
} from "@/styles/constants";

import {
	ButtonSubmit,
	FlexCenter,
	FlexColumnSpaceBetween,
	FlexColumnStart,
	FlexRowSpaceBetween,
} from "@/styles/mixins.styled";

import styled from "styled-components";

export const BudgetManagementTabsPopupPosition = styled.div`
	${FlexCenter}

	width: 100%;
	height: 100%;
	padding: 15px;
	background-color: ${({ theme }) => theme.colorElement_6};

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

export const BudgetManagementTabsPopupContainer = styled.div`
	${FlexColumnSpaceBetween}
	gap: 20px;

	width: 100%;
	max-width: 500px;
	padding: 16px;
	background-color: ${({ theme }) => theme.colorElement};
	border: 1px solid ${({ theme }) => theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
	position: relative;
`;

export const BudgetManagementTabsPopupForm = styled.form`
	${FlexColumnStart}
	gap: 10px;

	width: 100%;
`;

export const BudgetManagementTabsPopupHeader = styled.div`
	${FlexRowSpaceBetween}
	gap: 10px;
`;

export const BudgetManagementTabsPopupTitle = styled.h3`
	font-weight: ${WEIGHT.bold};
	font-size: ${SIZES.tabName};
`;

export const BudgetManagementTabsPopupClose = styled(ButtonSVG)`
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
		${FlexCenter}
		height: 20px;
		width: 20px;
	}

	svg {
		height: 20px;
		width: 20px;
	}
`;

export const BudgetManagementTabsPopupLabel = styled.label`
	width: 100%;
`;

export const BudgetManagementTabsPopupInput = styled.input`
	width: 100%;
	max-width: calc(100%);
	padding: 10px 16px;
	background-color: ${({ theme }) => theme.colorElement_5};
	border: unset;
	border-radius: 5px;
	font-size: 14px;
	color: ${({ theme }) => theme.color};
`;

export const BudgetManagementTabsPopupSubmit = styled.button`
	${ButtonSubmit}

	background-color: ${({ theme }) => theme.colorButton};
	color: ${({ theme }) => theme.colorButtonFont};
	transition: background-color 250ms ${CUBICS.easyOut};

	&:hover {
		background-color: ${({ theme }) => theme.colorElement_5};
	}
`;
