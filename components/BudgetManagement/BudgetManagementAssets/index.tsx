"use client";

import React, { useEffect, useState } from "react";
import { PieChart, type PieChartProps } from "react-minimal-pie-chart";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { type BudgetAllocation } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

import {
	BudgetManagementAssetsContainer,
	BudgetManagementAssetsWrapper,
	BudgetManagementAssetsList,
	BudgetManagementAssetsListItem,
	ChartWrapper,
} from "./BudgetManagementAssets.styled";

const BudgetManagementAssets = () => {
	const MIN_VALUE_OF_COUNT = 10;
	const LINE_WIDTH_CHART = 50;

	const { budgetAllocations, wallet } = useAppContext();

	const [calcedBudget, setCalcedBudget] = useState<BudgetAllocation[]>([]);
	const isBudgetAllocation = calcedBudget.length !== 0;
	const [hovered, setHovered] = useState<number | undefined>(undefined);
	const [chartPie, setChartPie] = useState([
		{
			title: "Puste",
			share: 0,
			value: 1,
			color: "#7e7e7e",
		},
	]);

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

	const data = chartPie.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "#7e7e7e",
			};
		}
		return entry;
	});

	const PieCartsOptions: PieChartProps = {
		data: data,
		lineWidth: LINE_WIDTH_CHART,
		animate: true,
		animationDuration: 250,
		segmentsStyle: { transition: "stroke 250ms", cursor: "pointer" },
		label: ({ dataEntry }) => Math.round(dataEntry.percentage) + "%",
		labelPosition: 100 - LINE_WIDTH_CHART / 2,
		labelStyle: {
			fill: "#ffffff",
			opacity: 0.8,
			pointerEvents: "none",
			fontSize: "5px",
		},
		onMouseOver: (_, index) => {
			setHovered(index);
		},
		onMouseOut: () => {
			setHovered(undefined);
		},
	};

	useEffect(() => {
		const calcBudget = mapBudget(budgetAllocations, wallet.restRevenues);
		setCalcedBudget(calcBudget);

		if (wallet.restRevenues > MIN_VALUE_OF_COUNT) {
			setChartPie(calcBudget);
		}
	}, [wallet.restRevenues, budgetAllocations]);

	return (
		<BudgetManagementAssetsContainer>
			<BudgetManagementAssetsWrapper>
				<BudgetManagementAssetsList>
					{isBudgetAllocation ? (
						calcedBudget.map((asset) => (
							<BudgetManagementAssetsListItem key={asset.title}>
								<span>{asset.title}</span>
								<span>{asset.value.toFixed(2)} PLN</span>
							</BudgetManagementAssetsListItem>
						))
					) : (
						<div>Ładowanie alokacji budżetu</div>
					)}
				</BudgetManagementAssetsList>
			</BudgetManagementAssetsWrapper>
			<ChartWrapper>
				<PieChart {...PieCartsOptions} />
			</ChartWrapper>
		</BudgetManagementAssetsContainer>
	);
};

export default BudgetManagementAssets;
