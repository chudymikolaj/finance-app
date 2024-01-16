import styled from "styled-components";

import { BORDER_RADIUS, SIZES, CUBICS, WEIGHT } from "@/styles/constants";
import ButtonComponent from "@/components/Buttons/Button";

import { devices } from "@/styles/breakpoints";

import {
	FlexRow,
	FlexRowAlignCenter,
	FlexColumn,
	FlexRowSpaceBetweenCenter,
} from "@/styles/mixins.styled";

export const IntroDashboard = styled.div`
	${FlexRowSpaceBetweenCenter}

	width: 100%;
	padding: 40px 0;

	@media ${devices.xl} {
		padding: 80px 0 40px;
	}
`;

export const IntroDashboardTitle = styled.div`
	font-size: ${SIZES.introDashboardHeader};
	font-weight: ${WEIGHT.bold};
`;

export const IntroDashboardMonth = styled.div`
	padding: 0 0 0 10px;
	font-size: ${SIZES.introDashboardDate};
	font-weight: ${WEIGHT.bold};
`;

export const IntroDashboardOptions = styled.div`
	${FlexRowAlignCenter}
	gap: 10px;
`;

export const IntroDashboardButtons = styled.div`
	${FlexRow}

	gap: 5px;

	button {
		width: 32px;
		height: 30px;
	}
`;

export const IntroDashboardSortByDateForm = styled.form`
	${FlexColumn}
	gap: 10px;
`;

export const IntroDashboardSortByDateLabel = styled.label`
	display: block;
	font-size: ${SIZES.smallText};
`;

export const IntroDashboardSortByDateInput = styled.input`
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

export const IntroDashboardSortByDataSort = styled(ButtonComponent)`
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
