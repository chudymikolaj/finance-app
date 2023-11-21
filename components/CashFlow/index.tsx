"use client";

import { Suspense, useEffect, useState } from "react";

import CashFlowList from "./CashFlowList";

import {
	FlowCashContainer,
	FlowCashHeader,
	FlowCashHeaderTitle,
	FlowCashHeaderOptions,
	FlowCashHeaderMonth,
	FlowCashHeaderButtons,
	FlowCashTabs,
	FlowCashTab,
	CashFlowButton,
} from "./CashFlow.styled";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";

const CashFlowComponent = () => {
	const [useTab, setuseTab] = useState("expenses");
	const { expenses, revenues, updateExpenses, updateRevenues } =
		useAppContext();
	const isExpenses = useTab === "expenses";
	const isRevenues = useTab === "revenues";

	useEffect(() => {
		const sumRevenues = revenues.reduce((val, currentValue) => {
			return val + currentValue.value;
		}, 0);

		const sumExpenses = expenses.reduce((val, currentValue) => {
			return val + currentValue.value;
		}, 0);

		updateExpenses(sumExpenses);
		updateRevenues(sumRevenues);
	}, [revenues, expenses]);

	return (
		<FlowCashContainer>
			<FlowCashTabs>
				<FlowCashTab
					onClick={() => setuseTab("expenses")}
					$isActive={useTab === "expenses"}
				>
					Wydatki
				</FlowCashTab>
				<FlowCashTab
					onClick={() => setuseTab("revenues")}
					$isActive={useTab === "revenues"}
				>
					Przychód
				</FlowCashTab>
			</FlowCashTabs>

			<FlowCashHeader>
				<FlowCashHeaderTitle>Wydatki na miesiąc</FlowCashHeaderTitle>
				<FlowCashHeaderOptions>
					<FlowCashHeaderMonth>09.2023</FlowCashHeaderMonth>
					<FlowCashHeaderButtons>
						<CashFlowButton svgUrl="/add.svg" />
						<CashFlowButton svgUrl="/more_vert.svg" />
					</FlowCashHeaderButtons>
				</FlowCashHeaderOptions>
			</FlowCashHeader>

			<Suspense fallback={<Loader />}>
				{isExpenses && (
					<CashFlowList
						type="expense"
						items={expenses}
					/>
				)}
				{isRevenues && (
					<CashFlowList
						type="revenues"
						items={revenues}
					/>
				)}
			</Suspense>
		</FlowCashContainer>
	);
};

function Loader() {
	return <p>Ładowanie...</p>;
}

export default CashFlowComponent;
