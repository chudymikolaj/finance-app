import { useSession } from "next-auth/react";
import { forwardRef } from "react";

import { type CashFlowItemType } from "../CashFlow.types";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import CashFlowItemTags from "../CashFlowTags";

import {
	CashFlowItem,
	CashFlowItemButton,
	CashFlowItemChecker,
	CashFlowItemName,
	CashFlowItemValue,
	CashFlowItemWrapper,
	CashFlowItemWrapperExpenseOptions,
	CashFlowItemWrapperRevenueOptions,
} from "./CashFlowItem.styled";

const CashFlowItemComponent = forwardRef<HTMLLIElement, CashFlowItemType>(
	({ id, name, value, tags, isPaid, type }, ref) => {
		const { checkExpenses, removeExpenses, removeRevenue } = useAppContext();
		const { data: sessions } = useSession();

		const GET_JWT = (sessions as any)?.jwt;
		const isType = type === "expense";

		return (
			<CashFlowItem ref={ref}>
				<CashFlowItemWrapper>
					<CashFlowItemName $type={type}>{name}</CashFlowItemName>

					<CashFlowItemValue $type={type}>{isType ? `-${value} PLN` : `${value} PLN`}</CashFlowItemValue>

					{isType ? (
						<CashFlowItemWrapperExpenseOptions>
							<CashFlowItemChecker
								$isPaid={isPaid}
								status={isPaid}
								action={() => checkExpenses(id)}
							/>
							<CashFlowItemButton
								action={() => removeExpenses(id, GET_JWT)}
								svgUrl="/remove.svg"
							/>
						</CashFlowItemWrapperExpenseOptions>
					) : (
						<CashFlowItemWrapperRevenueOptions>
							<CashFlowItemButton
								action={() => removeRevenue(id, GET_JWT)}
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
