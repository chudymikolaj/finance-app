"use client";

import React, { useEffect, useState } from "react";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { type BudgetAllocation } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";
import BudgetHeader from "./BudgetManagementHeader";

import {
	BudgetManagementAssetsContainer,
	BudgetManagementAssetsWrapper,
	BudgetManagementAssetsList,
	BudgetManagementAssetsListItem,
	BudgetManagementAssetsListItemValue,
} from "./BudgetManagementComponent.styled";
import { Line } from "@/components/Line/Line.styles";

const BudgetManagementAssets = () => {
	const { budgetAllocations, wallet } = useAppContext();

	const [calcedBudget, setCalcedBudget] = useState<BudgetAllocation[]>([]);
	const isBudgetAllocation = calcedBudget.length !== 0;

	const multiplier = (amount: number) => amount * 100;
	const mapBudget = (arr: BudgetAllocation[], value: number) => {
		let valueTest = value;

		const result = arr.map((item) => {
			return {
				...item,
				value: Number(valueTest * item.share),
			};
		});

		return result;
	};

	useEffect(() => {
		const calcBudget = mapBudget(budgetAllocations, wallet.restRevenues);
		setCalcedBudget(calcBudget);
	}, [wallet.restRevenues, budgetAllocations]);

	return (
		<BudgetManagementAssetsContainer>
			<BudgetHeader />
			<Line />
			<BudgetManagementAssetsWrapper>
				<BudgetManagementAssetsList>
					{isBudgetAllocation ? (
						calcedBudget.map((asset) => (
							<BudgetManagementAssetsListItem key={asset.title}>
								<p>{asset.title}</p>
								<BudgetManagementAssetsListItemValue $color={asset.color}>
									<span>{multiplier(asset.share)}% - </span>
									<span>{asset.value.toFixed(2)} PLN</span>
								</BudgetManagementAssetsListItemValue>
							</BudgetManagementAssetsListItem>
						))
					) : (
						<div>Ładowanie alokacji budżetu</div>
					)}
				</BudgetManagementAssetsList>
			</BudgetManagementAssetsWrapper>
		</BudgetManagementAssetsContainer>
	);
};

export default BudgetManagementAssets;
