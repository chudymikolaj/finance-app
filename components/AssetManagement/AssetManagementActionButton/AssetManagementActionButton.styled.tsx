"use client";

import styled from "styled-components";

import ButtonSubmit from "@/components/Buttons/ButtonSubmit";

export const AssetManagementActionButtonContainer = styled.div`
	width: 100%;
	padding: 15px 0 0;
	border-top: 1px solid ${({ theme }) => theme.lineColor};
	text-align: center;
`;

export const AssetManagementActionButton = styled(ButtonSubmit)``;
