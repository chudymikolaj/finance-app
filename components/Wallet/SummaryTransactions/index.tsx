import type SummaryTransactionsElementType from "./SummaryTransactionsElement.types";

import {
	SummaryTransactionsContainer,
	SummaryTransactionsCalculation,
	SummaryTransactionsCalculationColumn,
	SummaryTransactionsCalculationColumnHeader,
	SummaryTransactionsCalculationColumnValue,
} from "./SummaryTransactionsElement.styled";

const SummaryTransactions = ({
	valueOfTranactions,
	valueOfBills,
	valueOfRest,
}: SummaryTransactionsElementType) => {
	return (
		<SummaryTransactionsContainer>
			<SummaryTransactionsCalculation>
				<SummaryTransactionsCalculationColumn>
					<SummaryTransactionsCalculationColumnHeader>
						Przychód
					</SummaryTransactionsCalculationColumnHeader>
					<SummaryTransactionsCalculationColumnValue>
						{valueOfTranactions} <sub>PLN</sub>
					</SummaryTransactionsCalculationColumnValue>
				</SummaryTransactionsCalculationColumn>
				<SummaryTransactionsCalculationColumn>
					<SummaryTransactionsCalculationColumnHeader>
						Wydatki
					</SummaryTransactionsCalculationColumnHeader>
					<SummaryTransactionsCalculationColumnValue $red>
						{valueOfBills} <sub>PLN</sub>
					</SummaryTransactionsCalculationColumnValue>
				</SummaryTransactionsCalculationColumn>
				<SummaryTransactionsCalculationColumn>
					<SummaryTransactionsCalculationColumnHeader>
						Reszta
					</SummaryTransactionsCalculationColumnHeader>
					<SummaryTransactionsCalculationColumnValue>
						{valueOfRest} <sub>PLN</sub>
					</SummaryTransactionsCalculationColumnValue>
				</SummaryTransactionsCalculationColumn>
			</SummaryTransactionsCalculation>
		</SummaryTransactionsContainer>
	);
};

export default SummaryTransactions;
