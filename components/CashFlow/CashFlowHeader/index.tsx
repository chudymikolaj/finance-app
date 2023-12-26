import moment from "moment";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

import ButtonRefSVG from "@/components/Buttons/ButtonRefSvg";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import useOutsideClick from "@/utils/useOutsideClick";
import {
	CashFlowHeader,
	CashFlowHeaderButtons,
	CashFlowHeaderMonth,
	CashFlowHeaderOptions,
	CashFlowHeaderTitle,
	CashFlowSortByDataSort,
	CashFlowSortByDate,
	CashFlowSortByDateForm,
	CashFlowSortByDateInput,
	CashFlowSortByDateLabel,
} from "./CashFlowHeader.styled";

const CashFlowHeaderComponent = () => {
	const { filterCashFlowList } = useAppContext();

	const refHandleDateSorting = useRef<HTMLDivElement | null>(null);
	const refHandleButtonDateSorting = useRef<HTMLButtonElement | null>(null);
	const [showDateSorting, setShowDateSorting] = useState(false);

	const GET_FIRST_DAY_MONTH = moment().startOf("month").format("YYYY-MM-DD");
	const GET_TODAY_DATE_FORMAT = moment().format("YYYY-MM-DD");

	const [dateFromFilter, setDateFromFilter] = useState(GET_FIRST_DAY_MONTH);
	const [dateToFilter, setDateToFilter] = useState(GET_TODAY_DATE_FORMAT);

	const resetCalendarDate = () => {
		setShowDateSorting(false);
		setDateFromFilter(GET_FIRST_DAY_MONTH);
		setDateToFilter(GET_TODAY_DATE_FORMAT);
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
		setShowDateSorting((prevState) => !prevState);
	};

	useOutsideClick({
		isVisible: showDateSorting,
		setIsVisible: setShowDateSorting,
		refs: [refHandleButtonDateSorting, refHandleDateSorting],
	});

	return (
		<CashFlowHeader>
			<CashFlowHeaderTitle>Wydatki na miesiąc</CashFlowHeaderTitle>
			<CashFlowHeaderOptions>
				<CashFlowHeaderMonth>09.2023</CashFlowHeaderMonth>
				<CashFlowHeaderButtons>
					<ButtonRefSVG
						ref={refHandleButtonDateSorting}
						action={handleOpenSortByDate}
						svgUrl="/more_vert.svg"
					/>
				</CashFlowHeaderButtons>
			</CashFlowHeaderOptions>

			<CashFlowSortByDate
				$animate={showDateSorting}
				ref={refHandleDateSorting}
			>
				<CashFlowSortByDateForm onSubmit={onSubmit}>
					<CashFlowSortByDateLabel htmlFor="sort-by-date-from">
						Od:
					</CashFlowSortByDateLabel>
					<CashFlowSortByDateInput
						id="sort-by-date-from"
						type="date"
						value={dateFromFilter}
						max={dateToFilter}
						onChange={onChangeDateFrom}
					/>
					<CashFlowSortByDateLabel htmlFor="sort-by-date-to">
						Do:
					</CashFlowSortByDateLabel>
					<CashFlowSortByDateInput
						id="sort-by-date-to"
						type="date"
						value={dateToFilter}
						min={dateFromFilter}
						max={GET_TODAY_DATE_FORMAT}
						onChange={onChangeDateTo}
					/>
					<CashFlowSortByDataSort>Sortuj</CashFlowSortByDataSort>
				</CashFlowSortByDateForm>
			</CashFlowSortByDate>
		</CashFlowHeader>
	);
};

export default CashFlowHeaderComponent;
