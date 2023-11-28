import styled from "styled-components";

import Button from "@/components/Buttons/Button";

import { FlexRow, FlexRowStart, FlexCenter } from "@/styles/mixins.styled";

import { CUBICS, FONT_SIZE_BUTTONS } from "@/styles/constants";

export const CashFlowContainer = styled.div`
	margin: auto;
`;

export const CashFlowTabs = styled.div`
	${FlexRowStart}
	gap: 15px;
`;

export const CashFlowTab = styled.div<{ $isActive: boolean }>`
	${FlexRow}

	opacity: ${(props) => (props.$isActive ? 0.4 : 1)};
	transition: opacity ${CUBICS};
	font-size: 12px;
	cursor: pointer;
`;

export const CashFlowButton = styled(Button)`
	font-size: ${FONT_SIZE_BUTTONS};

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
