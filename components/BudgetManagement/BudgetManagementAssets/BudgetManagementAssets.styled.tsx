import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, SIZES, WEIGHT } from "@/styles/constants";
import { FlexColumn, FlexRow } from "@/styles/mixins.styled";
import styled from "styled-components";

export const BudgetManagementAssetsContainer = styled.div`
	${FlexColumn}
	gap: 15px;

	width: 100%;
	padding: 15px;

	@media ${devices.xl} {
		padding: 30px;
	}

	background-color: ${({ theme }) => theme.backgroundElement};
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: ${BORDER_RADIUS};
	position: relative;
`;

export const BudgetManagementAssetsWrapper = styled.div`
	@media ${devices.sm} {
		flex: 1 1 75%;
	}
`;

export const BudgetManagementAssetsList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;

	@media ${devices.sm} {
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
	}

	height: 100%;
	list-style: none;
	font-size: ${SIZES.tabAssetsText};
	font-weight: ${WEIGHT.medium};
`;

export const BudgetManagementAssetsListItem = styled.li`
	${FlexColumn}
	gap: 5px;

	padding: 15px 10px;

	@media ${devices.md} {
		padding: 15px;
	}

	background-color: ${({ theme }) => theme.backgroundElement};
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: ${BORDER_RADIUS};
`;
