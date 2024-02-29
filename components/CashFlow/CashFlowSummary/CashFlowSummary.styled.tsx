import styled from "styled-components";
import { WEIGHT } from "@/styles/constants";
import { FlexCenter, FlexColumnStart, FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

const FontWeightBold = WEIGHT.bold;

export const CashFlowSummaryStyled = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 10px;

	@media ${devices.md} {
		gap: 20px;
	}

	width: 100%;
`;

export const CashFlowSummaryWrapperStyled = styled.div`
	${FlexColumnStart}

	gap: 10px;
	flex: 1 1 50%;

	@media ${devices.md} {
		${FlexCenter}

		gap: 5px;
		text-align: center;
	}

	font-size: 12px;
`;

export const CashFlowSummaryNameStyled = styled.span`
	font-weight: ${FontWeightBold};
`;

export const CashFlowSummaryValueExpensiveStyled = styled.span`
	font-weight: ${FontWeightBold};
	color: ${(props) => props.theme.redColor};
`;

export const CashFlowSummaryValueIncomeStyled = styled.span`
	font-weight: ${FontWeightBold};
	color: ${(props) => props.theme.greenColor};
`;

export const CashFlowSummaryStatsStyled = styled.span`
	font-weight: ${FontWeightBold};
`;
