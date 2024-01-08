import styled from "styled-components";

import CheckExpenseButton from "@/components/Buttons/CheckExpenseButton";
import ButtonSVG from "@/components/Buttons/ButtonSvg";

import {
	BORDER_RADIUS,
	CUBICS,
	FONT_SIZE_BUTTONS,
	SIZES,
} from "@/styles/constants";
import { FlexColumn, FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

// @ts-ignore
const BUTTON_CASHFLOW_ITEM_UNACTIVE = ({ theme }) =>
	theme.unactiveBackgroundColor;
// @ts-ignore
const BUTTON_CASHFLOW_ITEM_ACTIVE = ({ theme }) => theme.activeBackgroundColor;
// @ts-ignore
const COLOR_BUTTON_CASHFLOW_ITEM_ACTIVE = ({ theme }) => theme.activeColor;
// @ts-ignore
const COLOR_BUTTON_CASHFLOW_ITEM_UNACTIVE = ({ theme }) => theme.unactiveColor;
// @ts-ignore
const COLOR_EXPENSE_VALUE_CASHFLOW_ITEM = ({ theme }) => theme.redColor;
// @ts-ignore
const COLOR_INCOME_VALUE_CASHFLOW_ITEM = ({ theme }) => theme.greenColor;

export const CashFlowItem = styled.li`
	${FlexColumn}
	gap: 5px;
`;

export const CashFlowItemWrapper = styled.div`
	${FlexRowSpaceBetweenCenter}
	flex-wrap: wrap;
	gap: 10px;
	min-height: 20px;
`;

export const CashFlowItemName = styled.span<{
	$type?: string;
}>`
	display: block;
	gap: 10px;
	flex: 1 0 100%;
	display: inline;
	white-space: nowrap; /* ensure no wrapping */
	overflow: hidden;
	text-overflow: ellipsis;

	@media ${devices.md} {
		flex: 1 0 calc(100% - 225px);
	}
`;

export const CashFlowItemValue = styled.span<{
	$type?: string;
}>`
	flex: 0 0 auto;
	max-width: 100px;
	line-height: 15px;
	font-size: ${SIZES.cashFlowItemValue};
	color: ${({ $type }) =>
		$type === "expense"
			? COLOR_EXPENSE_VALUE_CASHFLOW_ITEM
			: COLOR_INCOME_VALUE_CASHFLOW_ITEM};
`;

export const CashFlowItemWrapperExpenseOptions = styled.div`
	${FlexRowSpaceBetweenCenter}
	flex: 0 0 auto;
	gap: 10px;
`;

export const CashFlowItemWrapperRevenueOptions = styled.div`
	${FlexRowSpaceBetweenCenter}
	flex: 0 0 auto;
	gap: 10px;
`;

export const CashFlowItemChecker = styled(CheckExpenseButton)<{
	$isPaid?: boolean;
}>`
	width: 80px;
	padding: 4px;
	background-color: ${({ $isPaid }) =>
		$isPaid ? BUTTON_CASHFLOW_ITEM_UNACTIVE : BUTTON_CASHFLOW_ITEM_ACTIVE};
	border-radius: ${BORDER_RADIUS};
	font-size: ${FONT_SIZE_BUTTONS};
	opacity: ${({ $isPaid }) => ($isPaid ? 0.85 : 1)};
	color: ${({ $isPaid }) =>
		$isPaid
			? COLOR_BUTTON_CASHFLOW_ITEM_UNACTIVE
			: COLOR_BUTTON_CASHFLOW_ITEM_ACTIVE};

	transition: opacity ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.85;
	}
`;

export const CashFlowItemButton = styled(ButtonSVG)`
	padding: 3px 3px;
	border: unset;

	transition: background-color ${CUBICS.easyOut} 250ms;

	&:hover {
		background-color: ${({ theme }) => theme.backgroundPopup_5};
	}

	div,
	svg {
		width: 14px;
		height: 14px;
	}
`;
