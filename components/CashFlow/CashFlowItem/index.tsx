import { type CashFlowItemType } from "../CashFlow.types";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import CashFlowItemTags from "../CashFlowTags";

import {
	CashFlowItem,
	CashFlowItemChecker,
	CashFlowItemName,
	CashFlowItemValue,
	CashFlowItemWrapper,
	CashFlowItemWrapperExpenseOptions,
	CashFlowItemWrapperRevenueOptions,
	CashFlowItemButton,
} from "./CashFlowItem.styled";
import { forwardRef } from "react";

const CashFlowItemComponent = forwardRef<HTMLLIElement, CashFlowItemType>(
	({ id, name, value, tags, isPaid, type }, ref) => {
		const { checkExpenses, removeExpenses, removeRevenue } = useAppContext();
		const isType = type === "expense";

		return (
			<CashFlowItem ref={ref}>
				<CashFlowItemWrapper>
					<CashFlowItemName $type={type}>{name}</CashFlowItemName>

					<CashFlowItemValue $type={type}>
						{isType ? `-${value} PLN` : `${value} PLN`}
					</CashFlowItemValue>

					{isType ? (
						<CashFlowItemWrapperExpenseOptions>
							<CashFlowItemChecker
								$isPaid={isPaid}
								status={isPaid}
								action={() => checkExpenses(id)}
							/>
							<CashFlowItemButton
								action={() => removeExpenses(id)}
								svgUrl="/remove.svg"
							/>
						</CashFlowItemWrapperExpenseOptions>
					) : (
						<CashFlowItemWrapperRevenueOptions>
							<CashFlowItemButton
								action={() => removeRevenue(id)}
								svgUrl="/remove.svg"
							/>
						</CashFlowItemWrapperRevenueOptions>
					)}
				</CashFlowItemWrapper>

				{tags && <CashFlowItemTags tags={tags} />}
			</CashFlowItem>
		);
	}
);

export default CashFlowItemComponent;
