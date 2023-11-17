import styled from "styled-components";

import Button from "@/components/Buttons/Button";

import { BORDER_RADIUS_10 } from "@/styles/constants";
import { FlexRow } from "@/styles/mixins.styled";

const TAG_TYPE_GREEN = "#5d8c71";
const TAG_TYPE_RED = "#FF6969";
const FONT_SIZE_BUTTONS = "10px";

export const CashFlowItemStyledTags = styled.div`
	${FlexRow}
	gap: 5px;
`;

export const CashFlowItemStyledTag = styled(Button)<{ $type?: string }>`
	padding: 2px 5px;
	border-radius: ${BORDER_RADIUS_10};
	background-color: ${(props) =>
		props.$type === "bill" ? TAG_TYPE_RED : TAG_TYPE_GREEN};
	font-size: ${FONT_SIZE_BUTTONS};
	color: #ffffff;

	&:disabled {
		cursor: default;
	}
`;
