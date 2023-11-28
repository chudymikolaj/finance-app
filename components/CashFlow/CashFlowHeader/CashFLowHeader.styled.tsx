import styled from "styled-components";

import Button from "@/components/Buttons/Button";

import {
	FlexRow,
	FlexRowSpaceBetween,
	FlexRowAlignCenter,
	FlexCenter,
} from "@/styles/mixins.styled";

import { FONT_SIZE_BUTTONS } from "@/styles/constants";

export const FlowCashContainer = styled.div`
	margin: auto;
`;

export const FlowCashHeader = styled.div`
	${FlexRowSpaceBetween}

	padding: 10px 0;
	margin: 0 auto 10px;
	border-bottom: 1px solid ${(props) => props.theme.colorElement_5};
	gap: 15px;
`;

export const FlowCashHeaderTitle = styled.div`
	font-size: 22px;
	font-weight: 800;
`;

export const FlowCashHeaderOptions = styled.div`
	${FlexRowAlignCenter}
	gap: 10px;
`;

export const FlowCashHeaderMonth = styled.div`
	font-size: 22px;
	font-weight: 800;
`;

export const FlowCashHeaderButtons = styled.div`
	${FlexRow}
	gap: 5px;
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
