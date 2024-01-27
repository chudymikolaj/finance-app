"use client";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS } from "@/styles/constants";
import styled from "styled-components";

export const LoginPageContainer = styled.div`
	min-height: calc(100vh - 91px - 30px);
	display: grid;
	grid-template-columns: 1fr;

	@media ${devices.xl} {
		grid-template-columns: 1fr 1fr;
	}

	justify-content: center;
	align-items: center;
	gap: 30px;
`;

export const LoginPageImage = styled.div`
	width: 100%;
	max-width: 520px;

	@media ${devices.xl} {
		max-width: unset;
	}

	height: 100%;
	margin: auto;
	position: relative;
	overflow: hidden;

	img {
		object-fit: cover;
		border-radius: ${BORDER_RADIUS};
	}

	&:after {
		content: "";
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to top,
			${({ theme }) => theme.backgroundColor},
			rgba(0, 0, 0, 0)
		);
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const LoginPageFormWrapper = styled.div`
	width: 100%;
	max-width: 520px;
	margin: auto;
`;
