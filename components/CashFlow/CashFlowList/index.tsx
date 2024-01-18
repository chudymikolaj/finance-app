import { useRef } from "react";

import {
	type CashFlowListType,
	type CashFlowItemType,
} from "../CashFlow.types";

import CashFlowItem from "../CashFlowItem";
import CashFlowOnEmptyComponent from "../CashFlowOnEmpty";

import { ListComponent, List } from "./CashFlowList.styled";

const CashFlowList = ({ type, items, href = "/" }: CashFlowListType) => {
	const listRef = useRef<HTMLUListElement>(null);
	const itemRef = useRef<HTMLLIElement>(null);

	if (items === undefined || items.length === 0) {
		return <CashFlowOnEmptyComponent text={type} />;
	}

	return (
		<ListComponent>
			<List ref={listRef}>
				{items.map((item: CashFlowItemType, index) => (
					<CashFlowItem
						key={item.id}
						ref={index === 0 ? itemRef : null}
						id={item.id}
						name={item.name}
						value={item.value}
						tags={item.tags}
						isPaid={item.isPaid}
						type={type}
					/>
				))}
			</List>
		</ListComponent>
	);
};

export default CashFlowList;
