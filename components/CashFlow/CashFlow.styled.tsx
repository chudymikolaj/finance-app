import styled from "styled-components";

import Button from "@/components/Buttons/Button";

import {
	FlexRow,
	FlexRowStart,
	FlexCenter,
	FlexColumnStart,
	FlexColumnSpaceBetween,
} from "@/styles/mixins.styled";

import { CUBICS, FONT_SIZE_BUTTONS } from "@/styles/constants";

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

export const CashFlowButton = styled(Button)`
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
