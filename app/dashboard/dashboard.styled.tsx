"use client";

import styled from "styled-components";

import { devices } from "@/styles/breakpoints";
import { FlexColumnStart } from "@/styles/mixins.styled";

export const DashboardContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 100%;
	justify-content: center;
	gap: 20px;

	@media ${devices.md} {
		grid-template-columns: 600px;
		gap: 30px;
	}

	@media ${devices.xl} {
		grid-template-columns: 500px 1fr;
	}

	@media ${devices["2xl"]} {
		grid-template-columns: 500px 1fr;
	}
`;

export const DashboardLeftColumn = styled.div`
	${FlexColumnStart};
	overflow: hidden;
`;

export const DashboardRightColumn = styled.div`
	${FlexColumnStart};
	overflow: hidden;
`;
