"use client";

import { useEffect, useState } from "react";

import { type TabsOfIncome, type TabsOfExpenses } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

import { useAppContext, useAppContextDateList } from "@/lib/ThemeProviderContext/actions";

import { filterDate } from "@/utils/filterDate";

import CashFlowList from "./CashFlowList";
import CashFlowSummary from "./CashFlowSummary";

import { CashFlowContainer, CashFlowWrapper } from "./CashFlow.styled";
import CashFlowAccordion from "./CashFlowAccordion";

const CashFlowComponent = () => {
	const { expenses, incomes, filterDateCashFlowList, updateExpenses, updateIncomes, updateRestIncomes } =
		useAppContext();

	const { fromDate, toDate } = useAppContextDateList();

	const [showAccordion, setShowAccordion] = useState("incomes");
	const handleShowAccrodion = (index: string) =>
		setShowAccordion((prevState) => (prevState === index ? "incomes" : index));

	const [filtredExpenses, setFiltredExpenses] = useState<TabsOfExpenses[]>([]);
	const [sumExpenses, setSumExpenses] = useState("0");

	const [lenghtExpenses, setLenghtExpenses] = useState(0);
	const [filtredIncomes, setFiltredIncomes] = useState<TabsOfIncome[]>([]);
	const [sumIncomes, setSumIncomes] = useState("0");
	const [lenghtIncomes, setLenghtIncomes] = useState(0);

	const [paidExpenses, setPaidExpenses] = useState(0);

	const sortByDate = (objA: TabsOfExpenses, objB: TabsOfExpenses) =>
		new Date(objB.date).getTime() - new Date(objA.date).getTime();

	useEffect(() => {
		const filtredExpenses = expenses
			.filter(({ date }) => filterDate(String(date), fromDate, toDate))
			.sort((objA, objB) => sortByDate(objA, objB));
		const filtredIncomes = incomes
			.filter(({ date }) => filterDate(String(date), fromDate, toDate))
			.sort((objA, objB) => sortByDate(objA, objB));

		const countIncomes = incomes
			.filter(({ date }) => filterDate(date, fromDate, toDate))
			.reduce((val, currentValue) => {
				return val + currentValue.value;
			}, 0);

		const countExpenses = expenses
			.filter(({ date }) => filterDate(date, fromDate, toDate))
			.reduce((val, currentValue) => {
				return val + currentValue.value;
			}, 0);

		const lenghtIncomes = incomes.filter(({ date }) => filterDate(date, fromDate, toDate)).length;
		const lenghtExpenses = expenses.filter(({ date }) => filterDate(date, fromDate, toDate)).length;

		const countUnPaidExpenses = expenses.filter(
			({ date, isPaid }) => filterDate(date, fromDate, toDate) && isPaid === true
		).length;

		setFiltredExpenses(filtredExpenses);
		setSumExpenses(`${String(countExpenses)} PLN`);
		setPaidExpenses(countUnPaidExpenses);
		setLenghtExpenses(lenghtExpenses);

		setFiltredIncomes(filtredIncomes);
		setSumIncomes(`${String(countIncomes)} PLN`);
		setLenghtIncomes(lenghtIncomes);

		updateExpenses(countExpenses);
		updateIncomes(countIncomes);
		updateRestIncomes(countIncomes, countExpenses);
	}, [incomes, expenses, filterDateCashFlowList]);

	return (
		<CashFlowContainer>
			<CashFlowWrapper>
				<CashFlowAccordion
					title="Przychód"
					isOpen={showAccordion === "incomes"}
					handleOpenAccordion={() => handleShowAccrodion("incomes")}
				>
					<CashFlowSummary
						sumList={sumIncomes}
						countLenght={lenghtIncomes}
						tabActive="incomes"
					>
						<CashFlowList
							type="incomes"
							items={filtredIncomes}
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
