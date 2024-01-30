import styled from "styled-components";

import { FlexColumn, ScrollBarColor } from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

export const ListComponent = styled.div`
	padding: 15px 0;
	border-top: 1px solid ${({ theme }) => theme.borderColor};
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const List = styled.ul`
	${FlexColumn}
	height: 100px;

	@media ${devices["2xl"]} {
		height: 204px;
	}

	gap: 6px;
	overflow-y: auto;

	${ScrollBarColor}
`;
