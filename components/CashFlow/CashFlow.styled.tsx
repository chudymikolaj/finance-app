import styled from "styled-components";

import {
	FlexRow,
	FlexRowStart,
	FlexColumnStart,
	FlexColumnSpaceBetween,
} from "@/styles/mixins.styled";

import { CUBICS } from "@/styles/constants";

export const CashFlowContainer = styled.div`
	${FlexColumnStart}

	width: 100%;
	height: 100%;
	margin: auto;
`;

export const CashFlowTabs = styled.div`
	${FlexRowStart}
	gap: 15px;
`;

export const CashFlowTab = styled.div<{ $isActive: boolean }>`
	${FlexRow}

	opacity: ${(props) => (props.$isActive ? 0.4 : 1)};
	transition: opacity ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.4;
	}

	font-size: 12px;
	cursor: pointer;
`;

export const CashFlowLists = styled.div`
	${FlexColumnSpaceBetween}

	width: 100%;
	height: 100%;
`;
