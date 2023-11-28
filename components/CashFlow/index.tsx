"use client";

import { Suspense, useEffect, useState } from "react";

import CashFlowSummary from "./CashFlowSummary";
import CashFlowList from "./CashFlowList";
import CashFlowHeader from "./CashFlowHeader";

import {
	CashFlowContainer,
	CashFlowTabs,
	CashFlowTab,
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
		<CashFlowContainer>
			<CashFlowTabs>
				<CashFlowTab
					onClick={() => setuseTab("expenses")}
					$isActive={useTab === "expenses"}
				>
					Wydatki
				</CashFlowTab>
				<CashFlowTab
					onClick={() => setuseTab("revenues")}
					$isActive={useTab === "revenues"}
				>
					Przychód
				</CashFlowTab>
			</CashFlowTabs>

			<CashFlowHeader />

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
		</CashFlowContainer>
	);
};

function Loader() {
	return <p>Ładowanie...</p>;
}

export default CashFlowComponent;
