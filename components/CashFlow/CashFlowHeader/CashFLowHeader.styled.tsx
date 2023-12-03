import styled from "styled-components";

import Button from "@/components/Buttons/Button";

import { BORDER_RADIUS, SIZES, CUBICS } from "@/styles/constants";

import {
	FlexRow,
	FlexRowSpaceBetween,
	FlexRowAlignCenter,
	FlexCenter,
	FlexColumn,
} from "@/styles/mixins.styled";

import { FONT_SIZE_BUTTONS } from "@/styles/constants";

export const CashFlowContainer = styled.div`
	margin: auto;
`;

export const CashFlowHeader = styled.div`
	${FlexRowSpaceBetween}

	padding: 10px 0;
	margin: 0 auto 20px;
	gap: 15px;
	position: relative;

	&:after {
		content: "";
		width: 100%;
		height: 1px;
		border-bottom: 1px solid ${(props) => props.theme.colorElement_5};
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;

export const CashFlowHeaderTitle = styled.div`
	font-size: 22px;
	font-weight: 800;
`;

export const CashFlowHeaderOptions = styled.div`
	${FlexRowAlignCenter}
	gap: 10px;
`;

export const CashFlowHeaderMonth = styled.div`
	font-size: 22px;
	font-weight: 800;
`;

export const CashFlowHeaderButtons = styled.div`
	${FlexRow}
	gap: 5px;
`;

export const CashFlowSortByDate = styled.div<{ $animate?: boolean }>`
	width: 100%;
	margin: auto;
	padding: 16px;
	background-color: ${(props) => props.theme.colorElement};
	border: 1px solid ${(props) => props.theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
	visibility: ${(props) => (props.$animate ? "visible" : "hidden")};
	opacity: ${(props) => (props.$animate ? "1" : "0")};
	position: absolute;
	top: 36px;
	left: 0;
	transform: ${(props) =>
		props.$animate ? "translateY(5px)" : "translateY(0)"};
	transition: transform ${CUBICS.easyOut} 200ms, opacity ${CUBICS.easyOut} 200ms,
		visibility ${CUBICS.easyOut} 200ms;
	z-index: 1;
`;

export const CashFlowSortByDateForm = styled.form`
	${FlexColumn}
	gap: 10px;
`;

export const CashFlowSortByDateLabel = styled.label`
	display: block;
`;
export const CashFlowSortByDateInput = styled.input`
	padding: 10px 16px;
	background-color: ${(props) => props.theme.colorElement_5};
	border: 0;
	border-radius: ${BORDER_RADIUS};
	font-family: inherit;
	color: ${(props) => props.theme.color};

	&::-webkit-calendar-picker-indicator {
		filter: invert(1);
		cursor: pointer;
	}
`;

export const CashFlowSortByDataSort = styled.button`
	width: 100%;
	padding: 10px 16px;
	background-color: ${(props) => props.theme.colorBackgroundActiveButton};
	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.smallText};
	color: ${(props) => props.theme.colorTextActiveButton};
	transition: background-color ${CUBICS.easyOut} 200ms;

	&:hover {
		background-color: ${(props) => props.theme.colorElement_5};
	}
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
