"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import BudgetManagementTabs from "../BudgetManagementTabs";

import {
	BudgetCategoriesContainer,
	BudgetCategoriesCategories,
	BudgetCategoriesCategoryButton,
	BudgetCategoriesCategory,
	BudgetCategoriesCategoryCircleColor,
} from "./BudgetManagement.styled";

const assetsTabsList = [
	{
		id: "zelazna-rezerwa",
		title: "Żelazna rezerwa",
		value: 4500,
		color: "#5D8C71",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 4500,
			},
		],
	},
	{
		id: "inwestycje",
		title: "Inwestycje",
		value: 25000,
		color: "#FF6969",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 25000,
			},
		],
	},
	{
		id: "oszczednosci",
		title: "Oszczędności",
		value: 15000,
		color: "#9747FF",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 15000,
			},
		],
	},
	{
		id: "reszta",
		title: "Reszta",
		value: 5000,
		color: "#67aded",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 5000,
			},
		],
	},
];

const BudgetCategoriesComponent = () => {
	const { updateBudgetListTabs, budgetTabLists } = useAppContext();

	const isAssets = budgetTabLists.length > 0;
	const [activeCategory, setActiveCategory] = useState("");

	useEffect(() => {
		if (!isAssets) {
			updateBudgetListTabs(assetsTabsList);
		}

		setActiveCategory(assetsTabsList[0]?.id);
	}, []);

	return (
		<BudgetCategoriesContainer>
			<BudgetCategoriesCategories>
				{isAssets ? (
					budgetTabLists.map(({ id, title, color }) => (
						<BudgetCategoriesCategory key={id}>
							<BudgetCategoriesCategoryButton
								onClick={() => setActiveCategory(id)}
								$active={id === activeCategory}
							>
								<BudgetCategoriesCategoryCircleColor
									$color={color}
								></BudgetCategoriesCategoryCircleColor>
								<span>{title}</span>
							</BudgetCategoriesCategoryButton>
						</BudgetCategoriesCategory>
					))
				) : (
					<BudgetCategoriesCategory>
						<span>Wczytywanie kategorii</span>
					</BudgetCategoriesCategory>
				)}
			</BudgetCategoriesCategories>

			<BudgetManagementTabs
				activeTab={activeCategory}
				budgetTabLists={budgetTabLists}
			/>
		</BudgetCategoriesContainer>
	);
};

export default BudgetCategoriesComponent;
