"use client";

import styled from "styled-components";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS } from "@/styles/constants";
import { FlexColumnStart } from "@/styles/mixins.styled";

export const DashboardContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 80px 0 0;
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;

	@media ${devices.lg} {
		grid-template-columns: 1fr 1fr;
		gap: 5vh;
	}

	@media ${devices.xl} {
		grid-template-columns: 500px 1fr;
	}

	@media ${devices["2xl"]} {
		grid-template-columns: 500px 1fr;
		gap: 100px;
	}
`;

export const DashboardLeftColumn = styled.div`
	${FlexColumnStart};

	width: 100%;
	height: 100%;
`;

export const DashboardRightColumn = styled.div`
	${FlexColumnStart};

	width: 100%;
	height: 100%;
	padding: 18px 20px;

	@media ${devices.lg} {
		padding: 30px;
	}

	background-color: ${({ theme }) => theme.colorElement};
	border: 1px solid ${({ theme }) => theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
`;
