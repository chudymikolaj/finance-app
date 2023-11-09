"use client"

import styled from "styled-components";

import SVGimage from "@/components/SvgIcon";

import { SIZES, WEIGHT } from "@/styles/constants";
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
export const WalletHeaderButton = styled.button``;