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

const budgetAlocationOptions = [
	{
		id: "zelazna-rezerwa",
		title: "Żelazna rezerwa",
		share: 0.3,
		value: 0,
		color: "#5D8C71",
	},
	{
		id: "inwestycje",
		title: "Inwestycje",
		share: 0.2,
		value: 0,
		color: "#FF6969",
	},
	{
		id: "oszczednosci",
		title: "Oszczędności",
		share: 0.1,
		value: 0,
		color: "#9747FF",
	},
	{
		id: "reszta",
		title: "Reszta",
		share: 0.4,
		value: 0,
		color: "#67aded",
	},
];

const BudgetManagementAssets = () => {
	const MIN_VALUE_OF_COUNT = 10;
	const LINE_WIDTH_CHART = 50;

	const { updateBudgetAllocations, budgetAllocations, wallet } =
		useAppContext();

	const isBudgetAllocations = budgetAllocations.length > 0;
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
		const calcedBudget = mapBudget(budgetAlocationOptions, wallet.restRevenues);

		updateBudgetAllocations(calcedBudget);

		if (wallet.restRevenues > MIN_VALUE_OF_COUNT) {
			setChartPie(calcedBudget);
		}
	}, [wallet.restRevenues]);

	return (
		<BudgetManagementAssetsContainer>
			<BudgetManagementAssetsWrapper>
				<BudgetManagementAssetsList>
					{isBudgetAllocations ? (
						budgetAllocations.map((asset) => (
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