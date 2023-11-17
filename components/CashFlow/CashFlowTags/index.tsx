import { type CashFlowItemTagsType } from "../CashFlow.types";

import {
	CashFlowItemStyledTags,
	CashFlowItemStyledTag,
} from "./CashFlowTags.styled";

const CashFlowItemStyledTagsComponent = ({ tags }: CashFlowItemTagsType) => {
	if (tags === undefined) {
		return;
	}

	return (
		<CashFlowItemStyledTags>
			{tags.map(({ name, type }) => (
				<CashFlowItemStyledTag
					key={name}
					name={name}
					$type={type}
					disabled
				/>
			))}
		</CashFlowItemStyledTags>
	);
};

export default CashFlowItemStyledTagsComponent;
