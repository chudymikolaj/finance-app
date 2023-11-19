import styled from "styled-components";

import { SIZES, WEIGHT, BORDER_RADIUS } from "@/styles/constants";

import {
	FlexColumn,
	FlexColumnSpaceBetweenStretch,
	FlexRowSpaceBetweenStretch,
} from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

const COUNT_COLUMNS = 3;
const GAP_COLUMNS = "30px";

export const SalaryContainer = styled.div`
	position: relative;
	z-index: 1;
`;

export const SalaryCalculation = styled.div`
	${FlexColumnSpaceBetweenStretch};

	@media ${devices.md} {
		${FlexRowSpaceBetweenStretch};
	}

	position: relative;
	gap: 5px;
	z-index: 2;
	color: ${(props) => props.theme.color};
`;

export const SalaryCalculationColumn = styled.div`
	${FlexColumn};

	width: 100%;
	padding: 18px 20px;
	background-color: ${(props) => props.theme.colorElement};
	border: 1px solid ${(props) => props.theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
	flex: 1 0 calc((100% - ${GAP_COLUMNS}) / ${COUNT_COLUMNS});
`;

export const SalaryCalculationColumnHeader = styled.div`
	margin: 0 0 15px;
	font-size: ${SIZES.normalText};
	font-weight: ${WEIGHT.light};
`;

export const SalaryCalculationColumnValue = styled.div<{ $red?: boolean }>`
	font-size: ${SIZES.bigText};
	font-weight: ${WEIGHT.medium};
	color: ${(props) => (props.$red ? props.theme.colorRed : props.theme.color)};
	overflow: hidden;
	overflow-wrap: break-word;
`;
