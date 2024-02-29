import { type CashFlowSummaryComponentType } from "./CashFlowSummary.types";
import {
	CashFlowSummaryStyled,
	CashFlowSummaryWrapperStyled,
	CashFlowSummaryNameStyled,
	CashFlowSummaryValueExpensiveStyled,
	CashFlowSummaryValueIncomeStyled,
	CashFlowSummaryStatsStyled,
} from "./CashFlowSummary.styled";

const CashFlowSummaryComponent = ({
	children,
	sumList,
	paidBoolean,
	countLenght,
	tabActive,
}: CashFlowSummaryComponentType) => {
	const isTab = tabActive === "expenses";

	return (
		<>
			{children}

			<CashFlowSummaryStyled>
				{isTab ? (
					<>
						<CashFlowSummaryWrapperStyled>
							<CashFlowSummaryNameStyled>Suma wydatków:</CashFlowSummaryNameStyled>
							<CashFlowSummaryValueExpensiveStyled>-{sumList}</CashFlowSummaryValueExpensiveStyled>
						</CashFlowSummaryWrapperStyled>
						<CashFlowSummaryWrapperStyled>
							<CashFlowSummaryNameStyled>Zapłacone:</CashFlowSummaryNameStyled>
							<CashFlowSummaryStatsStyled>
								{paidBoolean} / {countLenght}
							</CashFlowSummaryStatsStyled>
						</CashFlowSummaryWrapperStyled>
					</>
				) : (
					<>
						<CashFlowSummaryWrapperStyled>
							<CashFlowSummaryNameStyled>Suma przychodu:</CashFlowSummaryNameStyled>
							<CashFlowSummaryValueIncomeStyled>{sumList}</CashFlowSummaryValueIncomeStyled>
						</CashFlowSummaryWrapperStyled>
						<CashFlowSummaryWrapperStyled>
							<CashFlowSummaryNameStyled>Ilość:</CashFlowSummaryNameStyled>
							<CashFlowSummaryStatsStyled>{countLenght}</CashFlowSummaryStatsStyled>
						</CashFlowSummaryWrapperStyled>
					</>
				)}
			</CashFlowSummaryStyled>
		</>
	);
};

export default CashFlowSummaryComponent;
