import styled from "styled-components";

import { FlexCenter } from "@/styles/mixins.styled";

export const CashFlowStyledEmpty = styled.div`
	${FlexCenter}

	height: 224px;
	padding: 0 0 15px;
	border-top: 1px solid ${({ theme }) => theme.borderColor};
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const CashFlowStyledEmptyText = styled.div`
	text-align: center;
`;
