import Link from "next/link";
import styled from "styled-components";

import { FlexColumn } from "@/styles/mixins.styled";
import { SIZES } from "@/styles/constants";
import { devices } from "@/styles/breakpoints";

export const ListComponent = styled.div`
	padding: 0 0 15px;
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const List = styled.ul`
	${FlexColumn}

	padding: 0 0 15px;

	@media ${devices.md} {
		padding: 5px 0 20px;
	}

	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
	gap: 5px;
	overflow: hidden;
`;

export const GoToFullList = styled(Link)`
	width: 100%;
	padding: 4px 0;
	margin: 17px auto 0;
	display: block;
	text-align: center;
	font-size: ${SIZES.smallText};
`;
