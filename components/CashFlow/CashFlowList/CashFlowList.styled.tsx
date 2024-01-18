import styled from "styled-components";

import { FlexColumn, ScrollBarColor } from "@/styles/mixins.styled";

export const ListComponent = styled.div`
	padding: 15px 0;
	border-top: 1px solid ${({ theme }) => theme.borderColor};
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const List = styled.ul`
	${FlexColumn}
	height: 190px;
	gap: 6px;
	overflow-y: scroll;
	padding: 0 10px 0 0;

	${ScrollBarColor}
`;
