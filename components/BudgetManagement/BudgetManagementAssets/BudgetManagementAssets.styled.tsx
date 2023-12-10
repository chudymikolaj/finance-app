import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, WEIGHT } from "@/styles/constants";
import { FlexRow, FlexColumn, FlexColumnCenter } from "@/styles/mixins.styled";
import styled from "styled-components";

export const BudgetManagementAssetsContainer = styled.div`
	${FlexColumn}

	@media ${devices.sm} {
		${FlexRow}
	}

	gap: 10px;

	margin: 30px auto 0;
`;

export const BudgetManagementAssetsWrapper = styled.div`
	@media ${devices.sm} {
		flex: 1 1 50%;
	}

	@media ${devices.xl} {
		width: calc(100% - 298px);
	}
`;

export const BudgetManagementAssetsList = styled.ul`
	${FlexColumn}
	gap: 10px;
	list-style: none;
	font-weight: ${WEIGHT.medium};
`;

export const BudgetManagementAssetsListItem = styled.li`
	${FlexColumnCenter}
	gap: 5px;
	flex: 1 1 50%;

	height: 250px;
	padding: 15px;
	background-color: ${({ theme }) => theme.colorElement_6};
	border-radius: ${BORDER_RADIUS};
`;

const maxSizeChart = "298px";

export const ChartWrapper = styled.div`
	width: 100%;
	padding: 15px;
	background-color: ${({ theme }) => theme.colorElement_6};
	border-radius: ${BORDER_RADIUS};
	flex: 1 1 50%;
	text-align: center;

	svg {
		max-width: calc(${maxSizeChart} - 30px);
		max-height: calc(${maxSizeChart} - 30px);
	}
`;
