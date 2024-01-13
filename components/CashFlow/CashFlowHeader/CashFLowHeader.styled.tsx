import styled from "styled-components";

import { BORDER_RADIUS, SIZES, CUBICS, WEIGHT } from "@/styles/constants";
import ButtonComponent from "@/components/Buttons/Button";

import {
	FlexRow,
	FlexRowAlignCenter,
	FlexColumn,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";

export const CashFlowContainer = styled.div`
	margin: auto;
`;

export const CashFlowHeader = styled.div`
	${FlexRowSpaceBetweenCenter}

	width: 100%;
	padding: 15px 0;
	border-top: 1px solid ${({ theme }) => theme.lineColor};
	border-bottom: 1px solid ${({ theme }) => theme.lineColor};
	position: relative;

	&:after {
		content: "";
		width: 100%;
		height: 1px;
		border-bottom: 1px solid ${(props) => props.theme.backgroundElement};
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;

export const CashFlowHeaderTitle = styled.div`
	font-size: ${SIZES.cashFlowHeader};
`;

export const CashFlowHeaderOptions = styled.div`
	${FlexRowAlignCenter}
	gap: 10px;
`;

export const CashFlowHeaderMonth = styled.div`
	padding: 0 0 0 10px;
	font-size: ${SIZES.cashFlowHeader};
`;

export const CashFlowHeaderButtons = styled.div`
	${FlexRow}

	gap: 5px;

	button {
		width: 32px;
		height: 30px;
	}
`;

export const CashFlowSortByDateForm = styled.form`
	${FlexColumn}
	gap: 10px;
`;

export const CashFlowSortByDateLabel = styled.label`
	display: block;
	font-size: ${SIZES.smallText};
`;

export const CashFlowSortByDateInput = styled.input`
	padding: 12px 16px;
	background-color: ${(props) => props.theme.formLabelBackground};
	border: 0;
	border-radius: ${BORDER_RADIUS};
	font-family: inherit;
	color: ${(props) => props.theme.formLabelInputFontColor};

	&::-webkit-calendar-picker-indicator {
		filter: invert(1);
		cursor: pointer;
	}
`;

export const CashFlowSortByDataSort = styled(ButtonComponent)`
	width: 100%;
	height: auto;
	padding: 12px 16px;
	background-color: ${(props) => props.theme.activeButtonColor};
	border: unset;
	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.smallText};
	font-weight: ${WEIGHT.medium};
	color: ${(props) => props.theme.activeButtonColorFont};
	transition: background-color ${CUBICS.easyOut} 200ms;

	&:hover {
		background-color: ${(props) => props.theme.backgroundElement};
	}
`;
