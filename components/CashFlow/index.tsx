"use client";

import { Suspense, useEffect, useState } from "react";

import CashFlowSummary from "./CashFlowSummary";
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
	const {
		expenses,
		revenues,
		updateExpenses,
		updateRevenues,
		updateRestRevenues,
	} = useAppContext();
	const [useTab, setuseTab] = useState("expenses");
	const [sumExpenses, setSumExpenses] = useState("0");
	const [lenghtExpenses, setLenghtExpenses] = useState(0);
	const [sumRevenuses, setSumRevenuses] = useState("0");
	const [lenghtRevenuses, setLenghtRevenuses] = useState(0);
	const [paidExpenses, setPaidExpenses] = useState(0);

	const isExpenses = useTab === "expenses";
	const isRevenues = useTab === "revenues";

	useEffect(() => {
		const countExpenses = expenses.reduce((val, currentValue) => {
			return val + currentValue.value;
		}, 0);

		const countRevenues = revenues.reduce((val, currentValue) => {
			return val + currentValue.value;
		}, 0);

		const countUnPaidExpenses = expenses.filter((item) => {
			return item.isPaid === true;
		});

		setSumExpenses(`${String(countExpenses)} PLN`);
		setPaidExpenses(countUnPaidExpenses.length);
		setLenghtExpenses(expenses.length);

		setSumRevenuses(`${String(countRevenues)} PLN`);
		setLenghtRevenuses(revenues.length);

		updateExpenses(countExpenses);
		updateRevenues(countRevenues);
		updateRestRevenues(countRevenues, countExpenses);
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
					<CashFlowSummary
						sumList={sumExpenses}
						paidBoolean={paidExpenses}
						countLenght={lenghtExpenses}
						tabActive={useTab}
					>
						<CashFlowList
							type="expense"
							items={expenses}
						/>
					</CashFlowSummary>
				)}
				{isRevenues && (
					<CashFlowSummary
						sumList={sumRevenuses}
						countLenght={lenghtRevenuses}
						tabActive={useTab}
					>
						<CashFlowList
							type="revenues"
							items={revenues}
						/>
					</CashFlowSummary>
				)}
			</Suspense>
		</FlowCashContainer>
	);
};

function Loader() {
	return <p>Ładowanie...</p>;
}

export default CashFlowComponent;
