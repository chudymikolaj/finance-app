import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import moment from "moment";

import ButtonRefSVG from "@/components/Buttons/ButtonRefSvg";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import useOutsideClick from "@/utils/useOutsideClick";
import Popup from "@/components/Popup";

import { CashFlowHeaderPropsType } from "./CashFlowHeader.types";

import {
	CashFlowHeader,
	CashFlowHeaderButtons,
	CashFlowHeaderMonth,
	CashFlowHeaderOptions,
	CashFlowHeaderTitle,
	CashFlowSortByDataSort,
	CashFlowSortByDateForm,
	CashFlowSortByDateInput,
	CashFlowSortByDateLabel,
} from "./CashFlowHeader.styled";

const CashFlowHeaderComponent = ({ title }: CashFlowHeaderPropsType) => {
	const { filterCashFlowList, filterDateCashFlowList } = useAppContext();

	const refHandleDateSorting = useRef<HTMLDivElement | null>(null);
	const refHandleButtonDateSorting = useRef<HTMLButtonElement | null>(null);

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
		setShowDateSorting((prevState) => !prevState);
	};

	useOutsideClick({
		isVisible: showDateSorting,
		setIsVisible: setShowDateSorting,
		refs: [refHandleButtonDateSorting, refHandleDateSorting],
	});

	return (
		<CashFlowHeader>
			<CashFlowHeaderTitle>{title}</CashFlowHeaderTitle>
			<CashFlowHeaderOptions>
				<CashFlowHeaderMonth>{getCurrentDate}</CashFlowHeaderMonth>
				<CashFlowHeaderButtons>
					<ButtonRefSVG
						ref={refHandleButtonDateSorting}
						action={handleOpenSortByDate}
						svgUrl="/more_vert.svg"
					/>
				</CashFlowHeaderButtons>
			</CashFlowHeaderOptions>

			<Popup
				show={showDateSorting}
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
			</Popup>
		</CashFlowHeader>
	);
};

export default CashFlowHeaderComponent;
