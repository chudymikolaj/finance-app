"use client";

import { useEffect, useState } from "react";

import { type TabsOfExpensesAndRevenues as ObjectListType } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

import {
	useAppContext,
	useAppContextDateList,
} from "@/lib/ThemeProviderContext/actions";

import { filterDate } from "@/utils/filterDate";

import CashFlowSummary from "./CashFlowSummary";
import CashFlowList from "./CashFlowList";

import { CashFlowContainer, CashFlowWrapper } from "./CashFlow.styled";
import CashFlowAccordion from "./CashFlowAccordion";

const expensesList: ObjectListType[] = [
	{
		id: "test",
		name: "test",
		value: 2500,
		date: "2024-01-01",
	},
];
const revenuesList: ObjectListType[] = [
	{
		id: "test",
		name: "test",
		value: 5000,
		date: "2024-01-02",
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

	const [showAccordion, setShowAccordion] = useState("revenues");
	const handleShowAccrodion = (index: string) =>
		setShowAccordion((prevState) => (prevState === index ? "revenues" : index));

	const [filtredExpenses, setFiltredExpenses] = useState<ObjectListType[]>([]);
	const [sumExpenses, setSumExpenses] = useState("0");

	const [lenghtExpenses, setLenghtExpenses] = useState(0);
	const [filtredRevenuses, setFiltredRevenuses] = useState<ObjectListType[]>(
		[]
	);
	const [sumRevenuses, setSumRevenuses] = useState("0");
	const [lenghtRevenuses, setLenghtRevenuses] = useState(0);

	const [paidExpenses, setPaidExpenses] = useState(0);

	useEffect(() => {
		updateRevenuesList(revenuesList);
		updateExpensesList(expensesList);
	}, []);

	useEffect(() => {
		const filtredExpenses = expenses.filter(({ date }) =>
			filterDate(String(date), fromDate, toDate)
		);

		const filtredRevenues = revenues.filter(({ date }) =>
			filterDate(String(date), fromDate, toDate)
		);

		const countRevenues = revenues
			.filter(({ date }) => filterDate(date, fromDate, toDate))
			.reduce((val, currentValue) => {
				return val + currentValue.value;
			}, 0);

		const countExpenses = expenses
			.filter(({ date }) => filterDate(date, fromDate, toDate))
			.reduce((val, currentValue) => {
				return val + currentValue.value;
			}, 0);

		const lenghtRevenues = revenues.filter(({ date }) =>
			filterDate(date, fromDate, toDate)
		).length;

		const lenghtExpenses = expenses.filter(({ date }) =>
			filterDate(date, fromDate, toDate)
		).length;

		const countUnPaidExpenses = expenses.filter(
			({ date, isPaid }) =>
				filterDate(date, fromDate, toDate) && isPaid === true
		).length;

		setFiltredExpenses(filtredExpenses);
		setSumExpenses(`${String(countExpenses)} PLN`);
		setPaidExpenses(countUnPaidExpenses);
		setLenghtExpenses(lenghtExpenses);

		setFiltredRevenuses(filtredRevenues);
		setSumRevenuses(`${String(countRevenues)} PLN`);
		setLenghtRevenuses(lenghtRevenues);

		updateExpenses(countExpenses);
		updateRevenues(countRevenues);
		updateRestRevenues(countRevenues, countExpenses);
	}, [revenues, expenses, filterDateCashFlowList]);

	return (
		<CashFlowContainer>
			<CashFlowWrapper>
				<CashFlowAccordion
					title="Przychód"
					isOpen={showAccordion === "revenues"}
					handleOpenAccordion={() => handleShowAccrodion("revenues")}
				>
					<CashFlowSummary
						sumList={sumRevenuses}
						countLenght={lenghtRevenuses}
						tabActive="revenues"
					>
						<CashFlowList
							type="revenues"
							items={filtredRevenuses}
							href="/historia-przychodow"
						/>
					</CashFlowSummary>
				</CashFlowAccordion>

				<CashFlowAccordion
					title="Wydatki"
					isOpen={showAccordion === "expenses"}
					handleOpenAccordion={() => handleShowAccrodion("expenses")}
				>
					<CashFlowSummary
						sumList={sumExpenses}
						paidBoolean={paidExpenses}
						countLenght={lenghtExpenses}
						tabActive="expenses"
					>
						<CashFlowList
							type="expense"
							items={filtredExpenses}
							href="/historia-wydatkow"
						/>
					</CashFlowSummary>
				</CashFlowAccordion>
			</CashFlowWrapper>
		</CashFlowContainer>
	);
};

export default CashFlowComponent;
