import { type CashFlowItemType } from "../CashFlow.types";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import CashFlowItemStyledTags from "../CashFlowTags";
import ButtonSVG from "@/components/Buttons/ButtonSvg";

import {
	CashFlowItemStyled,
	CashFlowItemStyledChecker,
	CashFlowItemStyledName,
	CashFlowItemStyledValue,
	CashFlowItemStyledWrapper,
	CashFlowItemStyledWrapperExpenseOptions,
	CashFlowItemStyledWrapperRevenueOptions,
} from "./CashFlowItem.styled";

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
						<ButtonSVG
							action={() => removeExpenses(id)}
							svgUrl="/remove.svg"
						/>
					</CashFlowItemStyledWrapperExpenseOptions>
				) : (
					<CashFlowItemStyledWrapperRevenueOptions>
						<ButtonSVG
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
