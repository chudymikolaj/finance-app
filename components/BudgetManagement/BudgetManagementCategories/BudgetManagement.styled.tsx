import { CUBICS } from "@/styles/constants";
import { devices } from "@/styles/breakpoints";
import { FlexRowAlignCenter } from "@/styles/mixins.styled";
import styled from "styled-components";

export const BudgetCategoriesContainer = styled.div``;

export const BudgetCategoriesCategories = styled.div`
	${FlexRowAlignCenter};
	flex-wrap: wrap;

	gap: 8px;

	@media ${devices.xl} {
		gap: 20px;
	}

	padding: 20px 0;
	border-top: 1px solid ${(props) => props.theme.colorElement_5};
	border-bottom: 1px solid ${(props) => props.theme.colorElement_5};
`;

export const BudgetCategoriesCategory = styled.div``;

export const BudgetCategoriesCategoryButton = styled.button<{
	$active: boolean;
}>`
	${FlexRowAlignCenter}
	gap: 8px;

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
