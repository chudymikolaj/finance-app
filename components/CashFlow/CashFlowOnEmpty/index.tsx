import { CashFlowStyledEmpty, CashFlowStyledEmptyText } from "./CashFlowOnEmpty.styles";

const CashFlowOnEmptyComponent = ({ text }: { text: string }) => {
	let textOfElement = "Pusta lista wydatków";

	if (text === "incomes") {
		textOfElement = "Pusta lista przychodów";
	}

	return (
		<CashFlowStyledEmpty>
			<CashFlowStyledEmptyText>{textOfElement}</CashFlowStyledEmptyText>
		</CashFlowStyledEmpty>
	);
};

export default CashFlowOnEmptyComponent;
