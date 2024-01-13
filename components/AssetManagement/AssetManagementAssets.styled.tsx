import styled from "styled-components";

import ButtonComponent from "../Buttons/Button";

import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, CUBICS, SIZES } from "@/styles/constants";
import { FlexColumn, FlexRowStart } from "@/styles/mixins.styled";

export const AssetCategoriesContainer = styled.div`
	${FlexColumn}
	gap: 15px;

	width: 100%;
	height: auto;
	padding: 15px;

	@media ${devices.xl} {
		padding: 30px;
	}

	background-color: ${({ theme }) => theme.backgroundElement};
	border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: ${BORDER_RADIUS};
`;

export const AssetCategoriesCategories = styled.div`
	${FlexRowStart};

	gap: 8px;

	@media ${devices.xl} {
		gap: 15px;
	}

	width: 100%;
	border-top: 1px solid ${({ theme }) => theme.backgroundElement};
	border-bottom: 1px solid ${({ theme }) => theme.backgroundElement};

	.slick-slider {
		width: 100%;
		margin: auto;
	}

	.slick-dots {
		bottom: -15px;
	}

	.slick-dots li {
		margin: 0;
	}

	.slick-prev,
	.slick-next {
		z-index: 10;
	}

	.slick-prev {
		left: -5px;
	}
	.slick-next {
		right: -5px;
	}
`;

export const AssetCategoriesCategory = styled.div`
	padding: 5px;
	display: block;
	flex: 1;
`;

export const AssetCategoriesCategoryButton = styled(ButtonComponent)`
	${FlexColumn}
	gap: 8px;

	width: 100%;
	height: 100%;
	padding: 15px;
	aspect-ratio: 3/2;
	background-color: ${({ theme }) => theme.backgroundElement_5};
	border-color: ${({ theme }) => theme.borderColor};
	color: ${({ theme }) => theme.color};
	transition: opacity 250ms ${CUBICS.easyOut};
	opacity: 0.8;

	&:hover {
		opacity: 1;
	}
`;

export const AssetCategoriesCategoryName = styled.div`
	font-size: ${SIZES.tabNameFontSize};
`;

export const AssetCategoriesCategoryValue = styled.div`
	font-size: ${SIZES.tabValueFontSize};
`;

export const AssetCategoriesCategoryProgress = styled.div`
	width: 50%;
	height: 4px;
	background-color: ${({ theme }) => theme.backgroundElement_5};
	border-radius: ${BORDER_RADIUS};
	position: relative;
	overflow: hidden;
`;

export const AssetCategoriesCategoryProgressBar = styled.div<{
	$progress: number;
	$color: string;
}>`
	width: ${({ $progress }) => $progress}%;
	height: 100%;
	background-color: ${({ $color }) => $color};
	border-radius: ${BORDER_RADIUS};
	position: absolute;
`;

export const AssetCategoriesCategoryCircleColor = styled.div<{
	$color: string;
}>`
	min-width: 10px;
	width: 10px;
	min-height: 10px;
	height: 10px;
	background-color: ${({ $color, theme }) =>
		$color ? $color : theme.backgroundElement};
	border-radius: 100%;
`;
