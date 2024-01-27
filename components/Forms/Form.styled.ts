"use client";

import styled from "styled-components";
import Link from "next/link";

import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import { BORDER_RADIUS, SIZES, WEIGHT } from "@/styles/constants";
import { FlexColumnStart } from "@/styles/mixins.styled";
import { devices } from "@/styles/breakpoints";

export const FormElement = styled.form`
	${FlexColumnStart}

	width: 100%;
`;

export const FormElementHeader = styled.div`
	${FlexColumnStart}

	width: 100%;
	margin: 0 0 30px;

	@media ${devices.xl} {
		margin: 0 0 60px;
	}
`;

export const FormElementTitle = styled.h1`
	margin: 0 0 15px;
	font-weight: ${WEIGHT.bold};
	font-size: ${SIZES.loginTitle};
	line-height: 1.3;
`;

export const FormElementSubTitle = styled.h3`
	font-size: ${SIZES.loginSubTitle};
`;

export const FormElementForgetPassword = styled.p`
	margin: 0 0 0 auto;
	font-size: ${SIZES.smallText};
`;

export const FormElementSingInAccount = styled.div`
	width: 100%;
	margin: 30px auto 0;
	font-size: ${SIZES.smallText};
	font-weight: ${WEIGHT.light};
	text-align: center;
`;

export const FormElementSingInAccountLink = styled(Link)`
	color: ${({ theme }) => theme.linkFormColor};
`;

export const FormElementSubmit = styled(ButtonSubmit)`
	margin: 40px auto 0;
	padding: 12px 16px;
`;

export const ErrorMessage = styled.div`
	width: 100%;
	padding: 12px 10px;

	@media ${devices.xl} {
		padding: 12px 16px;
	}

	margin: 0 auto 30px;
	border: 1px solid ${({ theme }) => theme.redColor};
	border-radius: ${BORDER_RADIUS};
	display: block;
	text-align: center;
	font-size: ${SIZES.smallText};
	color: ${({ theme }) => theme.redColor};
`;
