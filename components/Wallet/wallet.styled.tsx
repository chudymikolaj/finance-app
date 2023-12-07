"use client";

import styled from "styled-components";

import SVGimage from "@/components/SvgIcon";

import { CUBICS, SIZES, WEIGHT } from "@/styles/constants";
import { FlexColumn, FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";

export const WalletContainer = styled.div`
	${FlexColumn};

	width: 100%;
	max-width: 500px;
	margin: 80px auto 50px;
`;

export const WalletHeader = styled.div`
	${FlexRowSpaceBetweenCenter};

	margin: 0 0 25px;
`;

export const WalletHeaderTitle = styled.h1`
	font-size: ${SIZES.headerText};
	font-weight: ${WEIGHT.semiBold};
`;

export const WalletHeaderSvg = styled(SVGimage)``;
export const WalletHeaderButton = styled.button`
	transition: opacity ${CUBICS.easyOut} 250ms, transform ${CUBICS.easyOut} 250ms;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		transform: scale(0.75);
		opacity: 0.25;
	}
`;
