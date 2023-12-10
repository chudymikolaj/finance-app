"use client";

import React, { useEffect, useState } from "react";
import { PieChart, type PieChartProps } from "react-minimal-pie-chart";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { type Asset } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

import {
	BudgetManagementAssetsContainer,
	BudgetManagementAssetsWrapper,
	BudgetManagementAssetsList,
	BudgetManagementAssetsListItem,
	ChartWrapper,
} from "./BudgetManagementAssets.styled";

const assetsValue = [
	{
		title: "Żelazna rezerwa",
		share: 0.3,
		value: 4500,
		color: "#5D8C71",
		lists: [
			{
				title: "PLN",
				value: 5000,
			},
		],
	},
	{
		title: "Inwestycje",
		share: 0.2,
		value: 25000,
		color: "#FF6969",
		lists: [
			{
				title: "PLN",
				value: 5000,
			},
		],
	},
	{
		title: "Oszczędności",
		share: 0.1,
		value: 15000,
		color: "#9747FF",
		lists: [
			{
				title: "PLN",
				value: 5000,
			},
		],
	},
	{
		title: "Reszta",
		share: 0.4,
		value: 5000,
		color: "#67aded",
		lists: [
			{
				title: "PLN",
				value: 5000,
			},
		],
	},
];

const BudgetManagementAssets = () => {
	const MIN_VALUE_OF_COUNT = 10;
	const LINE_WIDTH_CHART = 50;

	const { updateAssets, assets, wallet } = useAppContext();

	const [hovered, setHovered] = useState<number | undefined>(undefined);
	const [chartPie, setChartPie] = useState([
		{
			title: "Puste",
			share: 0,
			value: 1,
			color: "#7e7e7e",
		},
	]);

	const mapBudget = (arr: Asset[], value: number) => {
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
		const calcedBudget = mapBudget(assetsValue, wallet.restRevenues);

		updateAssets(calcedBudget);

		if (wallet.restRevenues > MIN_VALUE_OF_COUNT) {
			setChartPie(calcedBudget);
		}
	}, [wallet.restRevenues]);

	return (
		<BudgetManagementAssetsContainer>
			<BudgetManagementAssetsWrapper>
				<BudgetManagementAssetsList>
					{assets.map((asset) => (
						<BudgetManagementAssetsListItem key={asset.title}>
							<span>{asset.title}</span>
							<span>{asset.value.toFixed(2)} PLN</span>
						</BudgetManagementAssetsListItem>
					))}
				</BudgetManagementAssetsList>
			</BudgetManagementAssetsWrapper>
			<ChartWrapper>
				<PieChart {...PieCartsOptions} />
			</ChartWrapper>
		</BudgetManagementAssetsContainer>
	);
};

export default BudgetManagementAssets;
