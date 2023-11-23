import { type CashFlowSummaryComponentType } from "./CashFlowSummary.types";
import {
	CashFlowSummaryStyled,
	CashFlowSummaryWrapperStyled,
	CashFlowSummaryNameStyled,
	CashFlowSummaryValueExpensiveStyled,
	CashFlowSummaryValueRevenueStyled,
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
							<CashFlowSummaryNameStyled>
								Suma przychodu:
							</CashFlowSummaryNameStyled>
							<CashFlowSummaryValueExpensiveStyled>
								{sumList}
							</CashFlowSummaryValueExpensiveStyled>
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
							<CashFlowSummaryNameStyled>
								Suma wydatków:
							</CashFlowSummaryNameStyled>
							<CashFlowSummaryValueRevenueStyled>
								{sumList}
							</CashFlowSummaryValueRevenueStyled>
						</CashFlowSummaryWrapperStyled>
						<CashFlowSummaryWrapperStyled>
							<CashFlowSummaryNameStyled>Ilość:</CashFlowSummaryNameStyled>
							<CashFlowSummaryStatsStyled>
								{countLenght}
							</CashFlowSummaryStatsStyled>
						</CashFlowSummaryWrapperStyled>
					</>
				)}
			</CashFlowSummaryStyled>
		</>
	);
};

export default CashFlowSummaryComponent;
