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
	CashFlowItemWrapperIncomesOptions,
} from "./CashFlowItem.styled";
import removeItemAxios from "@/utils/fetch/removeItemAxios";

const CashFlowItemComponent = forwardRef<HTMLLIElement, CashFlowItemType>(
	({ id, name, value, tags, isPaid, type }, ref) => {
		const { checkExpenses, removeExpenses, removeIncome } = useAppContext();
		const { data: sessions } = useSession();

		const GET_JWT = (sessions as any)?.jwt;
		const isType = type === "expense";

		const handleRemoveExpense = (id: number, jwt: string) => {
			removeExpenses(id, jwt);
			removeItemAxios(id, jwt, "/api/monetary-expenses");
		};

		const handleRemoveIncomes = (id: number, jwt: string) => {
			removeIncome(id, jwt);
			removeItemAxios(id, jwt, "/api/monetary-incomes");
		};

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
								action={() => checkExpenses(id, GET_JWT)}
							/>
							<CashFlowItemButton
								action={() => handleRemoveExpense(id, GET_JWT)}
								svgUrl="/remove.svg"
							/>
						</CashFlowItemWrapperExpenseOptions>
					) : (
						<CashFlowItemWrapperIncomesOptions>
							<CashFlowItemButton
								action={() => handleRemoveIncomes(id, GET_JWT)}
								svgUrl="/remove.svg"
							/>
						</CashFlowItemWrapperIncomesOptions>
					)}
				</CashFlowItemWrapper>

				{tags && <CashFlowItemTags tags={tags} />}
			</CashFlowItem>
		);
	}
);

export default CashFlowItemComponent;
