import styled from "styled-components";
import { BORDER_RADIUS, WEIGHT } from "@/styles/constants";
import {
	FlexCenter,
	FlexColumnStart,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

const FontWeightBold = WEIGHT.bold;

export const CashFlowSummaryStyled = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 10px;

	@media ${devices.md} {
		gap: 20px;
	}

	width: 100%;
	padding: 18px 20px;
	margin: 20px auto 0;

	background-color: ${(props) => props.theme.colorElement};
	border: 1px solid ${(props) => props.theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
`;

export const CashFlowSummaryWrapperStyled = styled.div`
	${FlexColumnStart}

	gap: 10px;
	flex: 1 0 50%;

	@media ${devices.md} {
		${FlexCenter}

		gap: 5px;
		text-align: center;
	}

	font-size: 14px;
`;

export const CashFlowSummaryNameStyled = styled.span`
	font-weight: ${FontWeightBold};
`;

export const CashFlowSummaryValueExpensiveStyled = styled.span`
	font-weight: ${FontWeightBold};
	color: ${(props) => props.theme.colorRed};
`;

export const CashFlowSummaryValueRevenueStyled = styled.span`
	font-weight: ${FontWeightBold};
	color: ${(props) => props.theme.colorGreen};
`;

export const CashFlowSummaryStatsStyled = styled.span`
	font-weight: ${FontWeightBold};
`;
