import { css } from "styled-components";
import { devices } from "./breakpoints";
import { BORDER_RADIUS, SIZES, WEIGHT } from "./constants";

export const FlexRow = css`
	display: flex;
	flex-direction: row;
`;

export const FlexColumn = css`
	display: flex;
	flex-direction: column;
`;

export const FlexColumnStart = css`
	${FlexColumn};
	justify-content: flex-start;
	align-items: flex-start;
`;

export const FlexColumnCenter = css`
	${FlexColumn};
	justify-content: center;
	align-items: center;
`;

export const FlexRowStart = css`
	${FlexRow};
	justify-content: flex-start;
`;

export const FlexRowCenter = css`
	${FlexRow};
	align-items: center;
`;

export const FlexRowSpaceBetween = css`
	${FlexRow};
	justify-content: space-between;
`;

export const FlexRowSpaceBetweenCenter = css`
	${FlexRowSpaceBetween};
	align-items: center;
`;

export const FlexRowSpaceBetweenStretch = css`
	${FlexRowSpaceBetween};
	align-items: stretch;
`;

export const FlexColumnSpaceBetween = css`
	${FlexColumn};
	justify-content: space-between;
`;

export const FlexColumnSpaceBetweenStretch = css`
	${FlexColumnSpaceBetween};
	align-items: stretch;
`;

export const FlexCenter = css`
	${FlexRow};
	justify-content: center;
	align-items: center;
`;

export const FlexRowAlignCenter = css`
	${FlexRow};
	justify-content: center;
	align-items: center;
`;

export const Button = css`
	width: 100%;
	height: auto;
	padding: 12px 16px;
	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.submitFontSize};
`;

export const ButtonPopUp = css`
	height: auto;
	padding: 8px 16px;

	@media ${devices.xl} {
		padding: 8px 20px;
	}

	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.buttonFontSize};
`;

export const ScrollBarColor = css`
	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.scrollBarColor};
		border-radius: 3px;
		outline: 1px solid ${(props) => props.theme.scrollBarColor};
	}
`;
