"use client";

import styled from "styled-components";

export const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.lineColor};
`;
