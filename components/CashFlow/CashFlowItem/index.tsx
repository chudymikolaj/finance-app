import { type CashFlowItemType } from "../CashFlow.types";

import CashFlowItemStyledTags from "../CashFlowTags";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import {
	CashFlowItemStyled,
	CashFlowItemStyledWrapper,
	CashFlowItemStyledWrapperValueAndOptions,
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
	const { checkExpenses } = useAppContext();

	return (
		<CashFlowItemStyled>
			<CashFlowItemStyledWrapper>
				<CashFlowItemStyledName>{name}</CashFlowItemStyledName>
				<CashFlowItemStyledValue $type={type}>
					{type ? `-${value} PLN` : `${value} PLN`}
				</CashFlowItemStyledValue>
				<CashFlowItemStyledWrapperValueAndOptions>
					<CashFlowItemStyledChecker
						$isPaid={isPaid}
						status={isPaid}
						action={() => checkExpenses(id)}
					/>
					<CashFlowButton svgUrl="/more_vert.svg" />
				</CashFlowItemStyledWrapperValueAndOptions>
			</CashFlowItemStyledWrapper>

			{tags && <CashFlowItemStyledTags tags={tags} />}
		</CashFlowItemStyled>
	);
};

export default CashFlowItem;
