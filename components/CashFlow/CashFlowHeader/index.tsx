import {
	useState,
	useRef,
	useEffect,
	type ChangeEvent,
	type FormEvent,
} from "react";
import moment from "moment";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";

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
	const { filterCashFlowList } = useAppContext();

	const refHandleDateSorting = useRef<HTMLDivElement>(null);
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

	const onMouseEnter = () => {
		setShowDateSorting(true);
	};

	const onMouseLeave = () => {
		setShowDateSorting(false);
	};

	useEffect(() => {
		const handler = (event: MouseEvent | TouchEvent) => {
			if (
				showDateSorting &&
				refHandleDateSorting.current &&
				!refHandleDateSorting.current.contains(event.target as Node)
			) {
				setShowDateSorting(false);
			}
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [showDateSorting]);

	return (
		<CashFlowHeader>
			<CashFlowHeaderTitle>Wydatki na miesiąc</CashFlowHeaderTitle>
			<CashFlowHeaderOptions>
				<CashFlowHeaderMonth>09.2023</CashFlowHeaderMonth>
				<CashFlowHeaderButtons>
					<CashFlowButton
						svgUrl="/more_vert.svg"
						onMouseDown={onMouseEnter}
					/>
				</CashFlowHeaderButtons>
			</CashFlowHeaderOptions>

			<CashFlowSortByDate
				$animate={showDateSorting}
				ref={refHandleDateSorting}
				onMouseLeave={onMouseLeave}
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
