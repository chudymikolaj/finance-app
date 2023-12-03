"use client";

import { Suspense, useEffect, useState } from "react";

import { type TabsOfExpensesAndRevenues } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

import {
	useAppContext,
	useAppContextDateList,
} from "@/lib/ThemeProviderContext/actions";

import { filterDate } from "@/utils/filterDate";

import CashFlowSummary from "./CashFlowSummary";
import CashFlowList from "./CashFlowList";
import CashFlowHeader from "./CashFlowHeader";

import {
	CashFlowContainer,
	CashFlowTabs,
	CashFlowTab,
} from "./CashFlow.styled";

const expensesList: TabsOfExpensesAndRevenues[] = [
	{
		id: "test",
		name: "test",
		value: 5000,
		date: "2023-12-03",
	},
];
const revenuesList: TabsOfExpensesAndRevenues[] = [
	{
		id: "test",
		name: "test",
		value: 5000,
		date: "2023-12-03",
	},
];

const CashFlowComponent = () => {
	const {
		expenses,
		revenues,
		filterDateCashFlowList,
		updateRevenuesList,
		updateExpensesList,
		updateExpenses,
		updateRevenues,
		updateRestRevenues,
	} = useAppContext();

	const { fromDate, toDate } = useAppContextDateList();

	const [useTab, setuseTab] = useState("expenses");
	const [sumExpenses, setSumExpenses] = useState("0");
	const [lenghtExpenses, setLenghtExpenses] = useState(0);
	const [sumRevenuses, setSumRevenuses] = useState("0");
	const [lenghtRevenuses, setLenghtRevenuses] = useState(0);
	const [paidExpenses, setPaidExpenses] = useState(0);

	const isExpenses = useTab === "expenses";
	const isRevenues = useTab === "revenues";

	useEffect(() => {
		updateRevenuesList(revenuesList);
		updateExpensesList(expensesList);
	}, []);

	useEffect(() => {
		const countRevenues = revenues
			.filter((item) => filterDate(item.date, fromDate, toDate))
			.reduce((val, currentValue) => {
				return val + currentValue.value;
			}, 0);

		const countExpenses = expenses
			.filter((item) => filterDate(item.date, fromDate, toDate))
			.reduce((val, currentValue) => {
				return val + currentValue.value;
			}, 0);

		const lenghtRevenues = revenues.filter((item) =>
			filterDate(item.date, fromDate, toDate)
		).length;

		const lenghtExpenses = expenses.filter((item) =>
			filterDate(item.date, fromDate, toDate)
		).length;

		const countUnPaidExpenses = expenses.filter(
			(item) => filterDate(item.date, fromDate, toDate) && item.isPaid === true
		).length;

		setSumExpenses(`${String(countExpenses)} PLN`);
		setPaidExpenses(countUnPaidExpenses);
		setLenghtExpenses(lenghtExpenses);

		setSumRevenuses(`${String(countRevenues)} PLN`);
		setLenghtRevenuses(lenghtRevenues);

		updateExpenses(countExpenses);
		updateRevenues(countRevenues);
		updateRestRevenues(countRevenues, countExpenses);
	}, [revenues, expenses, filterDateCashFlowList]);

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
