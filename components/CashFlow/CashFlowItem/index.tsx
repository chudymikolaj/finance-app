import { type CashFlowItemType } from "../CashFlow.types";

import CashFlowItemStyledTags from "../CashFlowTags";

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
	return (
		<CashFlowItemStyled>
			<CashFlowItemStyledWrapper>
				<CashFlowItemStyledName>{name}</CashFlowItemStyledName>
				<CashFlowItemStyledValue $type={type}>
					{type ? `-${value} PLN` : `${value} PLN`}
				</CashFlowItemStyledValue>
				<CashFlowItemStyledWrapperValueAndOptions>
					<CashFlowItemStyledChecker $isPaid={isPaid} />
					<CashFlowButton svgUrl="/more_vert.svg" />
				</CashFlowItemStyledWrapperValueAndOptions>
			</CashFlowItemStyledWrapper>

			{tags && <CashFlowItemStyledTags tags={tags} />}
		</CashFlowItemStyled>
	);
};

export default CashFlowItem;
