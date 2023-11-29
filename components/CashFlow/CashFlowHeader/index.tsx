import { useState, type ChangeEvent, type FormEvent } from "react";

import {
	CashFlowHeader,
	CashFlowHeaderTitle,
	CashFlowHeaderOptions,
	CashFlowHeaderMonth,
	CashFlowHeaderButtons,
	CashFlowSortByDate,
	CashFlowButton,
	CashFlowSortByDateForm,
	CashFlowSortByDateLabel,
	CashFlowSortByDateInput,
	CashFlowSortByDataSort,
} from "./CashFlowHeader.styled";

const CashFlowHeaderComponent = () => {
	const currentDate = new Date();
	const FIRST_DAY_OF_MONTH = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		1
	);

	const GET_FIRST_DAY_MONTH = `${FIRST_DAY_OF_MONTH.getFullYear()}-${(
		FIRST_DAY_OF_MONTH.getMonth() + 1
	)
		.toString()
		.padStart(2, "0")}-${FIRST_DAY_OF_MONTH.getDate()
		.toString()
		.padStart(2, "0")}`;

	const GET_TODAY_DATE_FORMAT = `${currentDate.getFullYear()}-${(
		currentDate.getMonth() + 1
	)
		.toString()
		.padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

	const [showDateSorting, setShowDateSorting] = useState(false);
	const [dateFromFilter, setDateFromFilter] = useState(GET_FIRST_DAY_MONTH);
	const [dateToFilter, setDateToFilter] = useState(GET_TODAY_DATE_FORMAT);

	const resetCalendarDate = () => {
		setShowDateSorting(false);
		setDateFromFilter(GET_FIRST_DAY_MONTH);
		setDateToFilter(GET_TODAY_DATE_FORMAT);
	};

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log("dateFromFilter: " + dateFromFilter);
		console.log("dateToFilter: " + dateToFilter);
		resetCalendarDate();
	};

	const onChangeDateFrom = (event: ChangeEvent<HTMLInputElement>) => {
		setDateFromFilter(event.target.value);
	};

	const onChangeDateTo = (event: ChangeEvent<HTMLInputElement>) => {
		setDateToFilter(event.target.value);
	};

	return (
		<CashFlowHeader>
			<CashFlowHeaderTitle>Wydatki na miesiąc</CashFlowHeaderTitle>
			<CashFlowHeaderOptions>
				<CashFlowHeaderMonth>09.2023</CashFlowHeaderMonth>
				<CashFlowHeaderButtons>
					<CashFlowButton
						svgUrl="/more_vert.svg"
						action={() => setShowDateSorting((prevState) => !prevState)}
					/>
				</CashFlowHeaderButtons>
			</CashFlowHeaderOptions>

			<CashFlowSortByDate $animate={showDateSorting}>
				<CashFlowSortByDateForm onSubmit={onSubmit}>
					<CashFlowSortByDateLabel htmlFor="sort-by-date">
						Od:
					</CashFlowSortByDateLabel>
					<CashFlowSortByDateInput
						id="sort-by-date"
						type="date"
						max={GET_TODAY_DATE_FORMAT}
						value={dateFromFilter}
						onChange={onChangeDateFrom}
					/>
					<CashFlowSortByDateLabel htmlFor="sort-by-date">
						Do:
					</CashFlowSortByDateLabel>
					<CashFlowSortByDateInput
						id="sort-by-date"
						type="date"
						max={GET_TODAY_DATE_FORMAT}
						value={dateToFilter}
						onChange={onChangeDateTo}
					/>
					<CashFlowSortByDataSort>Sortuj</CashFlowSortByDataSort>
				</CashFlowSortByDateForm>
			</CashFlowSortByDate>
		</CashFlowHeader>
	);
};

export default CashFlowHeaderComponent;
