import styled from "styled-components";

import ButtonComponent from "@/components/Buttons/Button";
import { devices } from "@/styles/breakpoints";
import { CUBICS, SIZES } from "@/styles/constants";
import { FlexColumn, FlexRowAlignCenter } from "@/styles/mixins.styled";

export const BudgetCategoriesContainer = styled.div`
	${FlexColumn}
	height: 100%;
`;

export const BudgetCategoriesCategories = styled.div`
	${FlexRowAlignCenter};
	flex-wrap: wrap;

	gap: 8px;
	padding: 16px 0;

	@media ${devices.xl} {
		gap: 20px;
		padding: 20px 0;
	}

	border-top: 1px solid ${({ theme }) => theme.colorElement_5};
	border-bottom: 1px solid ${({ theme }) => theme.colorElement_5};
`;

export const BudgetCategoriesCategory = styled.div`
	font-size: ${SIZES.tabAssetsText};
`;

export const BudgetCategoriesCategoryButton = styled(ButtonComponent)<{
	$active: boolean;
}>`
	${FlexRowAlignCenter}
	gap: 8px;

	width: auto;
	height: auto;
	color: #fffffe;
	opacity: ${({ $active }) => ($active ? 0.5 : 1)};
	transition: opacity 250ms ${CUBICS.easyOut};
`;

export const BudgetCategoriesCategoryCircleColor = styled.div<{
	$color: string;
}>`
	width: 10px;
	height: 10px;
	background-color: ${({ $color }) => ($color ? $color : "#333")};
	border-radius: 100%;
`;
