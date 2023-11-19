import { type CashFlowItemType } from "../CashFlow.types";

import CashFlowItemStyledTags from "../CashFlowTags";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import {
	CashFlowItemStyled,
	CashFlowItemStyledWrapper,
	CashFlowItemStyledWrapperExpenseOptions,
	CashFlowItemStyledWrapperRevenueOptions,
	CashFlowItemStyledName,
	CashFlowItemStyledValue,
	CashFlowItemStyledChecker,
} from "./CashFlowItem.styled";
import { CashFlowButton } from "../CashFlow.styled";

const CashFlowItem = ({
	id,
	name,
	value,
	tags,
	isPaid,
	type,
}: CashFlowItemType) => {
	const { checkExpenses, removeExpenses, removeRevenue } = useAppContext();
	const isType = type === "expense";

	return (
		<CashFlowItemStyled>
			<CashFlowItemStyledWrapper>
				<CashFlowItemStyledName>{name}</CashFlowItemStyledName>
				<CashFlowItemStyledValue $type={type}>
					{isType ? `-${value} PLN` : `${value} PLN`}
				</CashFlowItemStyledValue>
				{isType ? (
					<CashFlowItemStyledWrapperExpenseOptions>
						<CashFlowItemStyledChecker
							$isPaid={isPaid}
							status={isPaid}
							action={() => checkExpenses(id)}
						/>
						<CashFlowButton
							action={() => removeExpenses(id)}
							svgUrl="/remove.svg"
						/>
					</CashFlowItemStyledWrapperExpenseOptions>
				) : (
					<CashFlowItemStyledWrapperRevenueOptions>
						<CashFlowButton
							action={() => removeRevenue(id)}
							svgUrl="/remove.svg"
						/>
					</CashFlowItemStyledWrapperRevenueOptions>
				)}
			</CashFlowItemStyledWrapper>

			{tags && <CashFlowItemStyledTags tags={tags} />}
		</CashFlowItemStyled>
	);
};

export default CashFlowItem;
