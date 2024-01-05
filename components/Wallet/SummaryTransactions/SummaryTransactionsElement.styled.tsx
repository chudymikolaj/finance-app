import styled from "styled-components";

import { SIZES, WEIGHT } from "@/styles/constants";

import {
	FlexColumn,
	FlexColumnSpaceBetweenStretch,
	FlexRowSpaceBetweenStretch,
} from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

const COUNT_COLUMNS = 3;
const GAP_COLUMNS = "30px";

export const SummaryTransactionsContainer = styled.div`
	position: relative;
	z-index: 1;
`;

export const SummaryTransactionsCalculation = styled.div`
	${FlexColumnSpaceBetweenStretch};

	@media ${devices.md} {
		${FlexRowSpaceBetweenStretch};
	}

	position: relative;
	gap: 30px;
	color: ${(props) => props.theme.color};
`;

export const SummaryTransactionsCalculationColumn = styled.div`
	${FlexColumn};

	width: 100%;
	flex: 1 1 calc((100% - ${GAP_COLUMNS}) / ${COUNT_COLUMNS});
`;

export const SummaryTransactionsCalculationColumnHeader = styled.div`
	margin: 0 0 10px;
	font-size: ${SIZES.smallText};
	font-weight: ${WEIGHT.light};
`;

export const SummaryTransactionsCalculationColumnValue = styled.div<{
	$red?: boolean;
}>`
	font-size: ${SIZES.bigText};
	font-weight: ${WEIGHT.medium};
	color: ${(props) => (props.$red ? props.theme.redColor : props.theme.color)};
	overflow: hidden;
	overflow-wrap: break-word;
`;
