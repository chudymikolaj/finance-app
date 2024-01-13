"use client";

import styled from "styled-components";

import Link from "next/link";
import { SIZES, WEIGHT } from "@/styles/constants";
import { FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";

export const AssetHeader = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 30px;
`;

export const AssetHeaderTitle = styled.div`
	font-size: ${SIZES.headerText};
	font-weight: ${WEIGHT.bold};
`;

export const AssetHeaderButton = styled(Link)`
	font-size: ${SIZES.smallText};
`;
