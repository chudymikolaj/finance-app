"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import moment from "moment";

import PopupComponent from "@/components/Popup";
import ButtonRefSVG from "@/components/Buttons/ButtonRefSvg";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import { IntroDashboardPropsType } from "./IntroDashboard.types";

import {
	IntroDashboard,
	IntroDashboardButtons,
	IntroDashboardMonth,
	IntroDashboardOptions,
	IntroDashboardTitle,
	IntroDashboardSortByDataSort,
	IntroDashboardSortByDateForm,
	IntroDashboardSortByDateInput,
	IntroDashboardSortByDateLabel,
} from "./IntroDashboard.styled";

const IntroDashboardComponent = ({ title }: IntroDashboardPropsType) => {
	const { filterCashFlowList, filterDateCashFlowList } = useAppContext();

	const [showDateSorting, setShowDateSorting] = useState(false);
	const [dateFromFilter, setDateFromFilter] = useState(
		filterDateCashFlowList.fromDate
	);
	const [dateToFilter, setDateToFilter] = useState(
		filterDateCashFlowList.toDate
	);

	const GET_TODAY_DATE_FORMAT = moment().format("YYYY-MM-DD");
	const GET_FILTER_FROM_DATE = filterDateCashFlowList.fromDate;
	const GET_FILTER_TO_DATE = filterDateCashFlowList.toDate;
	const getCurrentDate = `${GET_FILTER_FROM_DATE} - ${GET_FILTER_TO_DATE}`;

	const resetCalendarDate = () => {
		setShowDateSorting(false);
	};

	const onChangeDateFrom = (event: ChangeEvent<HTMLInputElement>) => {
		setDateFromFilter(event.target.value);
	};

	const onChangeDateTo = (event: ChangeEvent<HTMLInputElement>) => {
		setDateToFilter(event.target.value);
	};

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();

		const filterDate = {
			fromDate: dateFromFilter,
			toDate: dateToFilter,
		};

		filterCashFlowList(filterDate);
		resetCalendarDate();
	};

	const handleOpenSortByDate = () => {
		setShowDateSorting(true);
	};

	const handleCloseSortByDate = () => {
		setShowDateSorting(false);
	};

	return (
		<>
			<IntroDashboard>
				<IntroDashboardTitle>{title}</IntroDashboardTitle>
				<IntroDashboardOptions>
					<IntroDashboardMonth>{getCurrentDate}</IntroDashboardMonth>
					<IntroDashboardButtons>
						<ButtonRefSVG
							action={handleOpenSortByDate}
							svgUrl="/more_vert.svg"
						/>
					</IntroDashboardButtons>
				</IntroDashboardOptions>
			</IntroDashboard>

			<PopupComponent
				openPopup={showDateSorting}
				closePopup={handleCloseSortByDate}
			>
				<IntroDashboardSortByDateForm onSubmit={onSubmit}>
					<IntroDashboardSortByDateLabel htmlFor="sort-by-date-from">
						Od:
					</IntroDashboardSortByDateLabel>
					<IntroDashboardSortByDateInput
						id="sort-by-date-from"
						type="date"
						value={dateFromFilter}
						max={dateToFilter}
						onChange={onChangeDateFrom}
					/>
					<IntroDashboardSortByDateLabel htmlFor="sort-by-date-to">
						Do:
					</IntroDashboardSortByDateLabel>
					<IntroDashboardSortByDateInput
						id="sort-by-date-to"
						type="date"
						value={dateToFilter}
						min={dateFromFilter}
						max={GET_TODAY_DATE_FORMAT}
						onChange={onChangeDateTo}
					/>
					<IntroDashboardSortByDataSort>Sortuj</IntroDashboardSortByDataSort>
				</IntroDashboardSortByDateForm>
			</PopupComponent>
		</>
	);
};

export default IntroDashboardComponent;
