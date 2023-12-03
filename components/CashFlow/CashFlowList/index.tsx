import { useAppContextDateList } from "@/lib/ThemeProviderContext/actions";

import {
	type CashFlowListType,
	type CashFlowItemType,
} from "../CashFlow.types";

import CashFlowItem from "../CashFlowItem";
import CashFlowOnEmptyComponent from "../CashFlowOnEmpty";

import List from "./CashFlowList.styled";
import { filterDate } from "@/utils/filterDate";

const CashFlowList = ({ type, items }: CashFlowListType) => {
	const { fromDate, toDate } = useAppContextDateList();

	if (items === undefined || items.length === 0) {
		return <CashFlowOnEmptyComponent text={type} />;
	}

	return (
		<List>
			{items
				.filter((item) => filterDate(String(item.date), fromDate, toDate))
				.map((item: CashFlowItemType) => (
					<CashFlowItem
						key={item.id}
						id={item.id}
						name={item.name}
						value={item.value}
						tags={item.tags}
						isPaid={item.isPaid}
						type={type}
					/>
				))}
		</List>
	);
};

export default CashFlowList;
