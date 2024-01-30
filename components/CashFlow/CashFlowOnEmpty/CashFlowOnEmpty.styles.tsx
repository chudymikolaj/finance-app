import styled from "styled-components";

import { FlexCenter } from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

export const CashFlowStyledEmpty = styled.div`
	${FlexCenter}

	height: 100px;

	@media ${devices.xl} {
		height: 236px;
	}

	padding: 0 0 15px;
	border-top: 1px solid ${({ theme }) => theme.borderColor};
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const CashFlowStyledEmptyText = styled.div`
	text-align: center;
`;
