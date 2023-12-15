"use client";

import styled from "styled-components";
import { devices } from "@/styles/breakpoints";
import { FlexColumn } from "@/styles/mixins.styled";

export const BudgetContainer = styled.div`
	${FlexColumn}
	gap: 18px;

	@media ${devices.xl} {
		gap: 30px;
	}

	width: 100%;
`;