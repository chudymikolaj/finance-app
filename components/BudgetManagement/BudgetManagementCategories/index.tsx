"use client";

import React, { useState } from "react";
import { useAppContextAssets } from "@/lib/ThemeProviderContext/actions";

import {
	BudgetCategoriesContainer,
	BudgetCategoriesCategories,
	BudgetCategoriesCategoryButton,
	BudgetCategoriesCategory,
	BudgetCategoriesCategoryCircleColor,
} from "./BudgetManagement.styled";

const BudgetCategoriesComponent = () => {
	const assets = useAppContextAssets();
	const isAssets = assets.length > 0;
	const [activeCategory, setActiveCategory] = useState(0);

	return (
		<BudgetCategoriesContainer>
			<BudgetCategoriesCategories>
				{isAssets ? (
					assets.map((cat, id) => (
						<BudgetCategoriesCategory key={id}>
							<BudgetCategoriesCategoryButton
								onClick={() => setActiveCategory(id)}
								$active={id === activeCategory}
							>
								<BudgetCategoriesCategoryCircleColor
									$color={cat.color}
								></BudgetCategoriesCategoryCircleColor>
								<span>{cat.title}</span>
							</BudgetCategoriesCategoryButton>
						</BudgetCategoriesCategory>
					))
				) : (
					<BudgetCategoriesCategory>
						<span>Wczytywanie kategorii</span>
					</BudgetCategoriesCategory>
				)}
			</BudgetCategoriesCategories>
		</BudgetCategoriesContainer>
	);
};

export default BudgetCategoriesComponent;
