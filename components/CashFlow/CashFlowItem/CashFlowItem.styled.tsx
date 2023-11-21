import styled from "styled-components";

import CheckExpenseButtonStyled from "@/components/Buttons/CheckExpenseButton";
import { BORDER_RADIUS, FONT_SIZE_BUTTONS } from "@/styles/constants";
import { FlexColumn, FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

const BUTTON_CASHFLOW_ITEM = "#EEEEEE";
const BUTTON_CASHFLOW_ITEM_ACTIVE = "#1F2126";
const COLOR_BUTTON_CASHFLOW_ITEM_ACTIVE = "#5d8c71";
const COLOR_BUTTON_CASHFLOW_ITEM_UNACTIVE = "#1F2126";
const COLOR_EXPENSE_VALUE_CASHFLOW_ITEM = "#FF6969";
const COLOR_INCOME_VALUE_CASHFLOW_ITEM = "#5d8c71";

export const CashFlowItemStyled = styled.li`
	${FlexColumn}
	gap: 5px;
`;

export const CashFlowItemStyledWrapper = styled.div`
	${FlexRowSpaceBetweenCenter}
	flex-wrap: wrap;
	gap: 5px;
`;

export const CashFlowItemStyledName = styled.span`
	flex: 1 0 100%;

	@media ${devices.md} {
		flex: 1 0 calc(100% - 215px);
	}
`;

export const CashFlowItemStyledValue = styled.span<{
	$type?: string;
}>`
	flex: 0 0 100px;
	color: ${(props) =>
		props.$type === "expense"
			? COLOR_EXPENSE_VALUE_CASHFLOW_ITEM
			: COLOR_INCOME_VALUE_CASHFLOW_ITEM};
`;

export const CashFlowItemStyledWrapperExpenseOptions = styled.div`
	${FlexRowSpaceBetweenCenter}
	flex: 0 0 auto;
	gap: 10px;
`;

export const CashFlowItemStyledWrapperRevenueOptions = styled.div`
	${FlexRowSpaceBetweenCenter}
	flex: 0 0 auto;
	gap: 10px;
`;

export const CashFlowItemStyledChecker = styled(CheckExpenseButtonStyled)<{
	$isPaid?: boolean;
}>`
	width: 80px;
	padding: 5px 6px;
	background-color: ${(props) =>
		props.$isPaid ? BUTTON_CASHFLOW_ITEM_ACTIVE : BUTTON_CASHFLOW_ITEM};
	border-radius: ${BORDER_RADIUS};
	font-size: ${FONT_SIZE_BUTTONS};
	opacity: ${(props) => (props.$isPaid ? 0.5 : 1)};
	color: ${(props) =>
		props.$isPaid
			? COLOR_BUTTON_CASHFLOW_ITEM_ACTIVE
			: COLOR_BUTTON_CASHFLOW_ITEM_UNACTIVE};
`;
