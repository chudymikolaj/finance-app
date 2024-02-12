"use client";

import { useEffect, useState } from "react";

import { type TabsOfRevenues, type TabsOfExpenses } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

import { useAppContext, useAppContextDateList } from "@/lib/ThemeProviderContext/actions";

import { filterDate } from "@/utils/filterDate";

import CashFlowList from "./CashFlowList";
import CashFlowSummary from "./CashFlowSummary";

import { CashFlowContainer, CashFlowWrapper } from "./CashFlow.styled";
import CashFlowAccordion from "./CashFlowAccordion";

const CashFlowComponent = () => {
	const { expenses, revenues, filterDateCashFlowList, updateExpenses, updateRevenues, updateRestRevenues } =
		useAppContext();

	const { fromDate, toDate } = useAppContextDateList();

	const [showAccordion, setShowAccordion] = useState("revenues");
	const handleShowAccrodion = (index: string) =>
		setShowAccordion((prevState) => (prevState === index ? "revenues" : index));

	const [filtredExpenses, setFiltredExpenses] = useState<TabsOfExpenses[]>([]);
	const [sumExpenses, setSumExpenses] = useState("0");

	const [lenghtExpenses, setLenghtExpenses] = useState(0);
	const [filtredRevenuses, setFiltredRevenuses] = useState<TabsOfRevenues[]>([]);
	const [sumRevenuses, setSumRevenuses] = useState("0");
	const [lenghtRevenuses, setLenghtRevenuses] = useState(0);

	const [paidExpenses, setPaidExpenses] = useState(0);

	const sortByDate = (objA: TabsOfExpenses, objB: TabsOfExpenses) =>
		new Date(objB.date).getTime() - new Date(objA.date).getTime();

	useEffect(() => {
		const filtredExpenses = expenses
			.filter(({ date }) => filterDate(String(date), fromDate, toDate))
			.sort((objA, objB) => sortByDate(objA, objB));
		const filtredRevenues = revenues
			.filter(({ date }) => filterDate(String(date), fromDate, toDate))
			.sort((objA, objB) => sortByDate(objA, objB));

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

		const lenghtRevenues = revenues.filter(({ date }) => filterDate(date, fromDate, toDate)).length;
		const lenghtExpenses = expenses.filter(({ date }) => filterDate(date, fromDate, toDate)).length;

		const countUnPaidExpenses = expenses.filter(
			({ date, isPaid }) => filterDate(date, fromDate, toDate) && isPaid === true
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
