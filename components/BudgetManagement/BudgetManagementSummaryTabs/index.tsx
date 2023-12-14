import {
	BudgetManagementSummaryTabsContainer,
	BudgetManagementSummaryTabsName,
	BudgetManagementSummaryTabsValue,
} from "./BudgetManagementSummaryTabs.styled";

const BudgetManagementSummaryTabsComponent = ({ value }: { value: number }) => {
	return (
		<BudgetManagementSummaryTabsContainer>
			<BudgetManagementSummaryTabsName>
				Saldo żelaznej rezerwy:
			</BudgetManagementSummaryTabsName>
			<BudgetManagementSummaryTabsValue>
				{value} PLN
			</BudgetManagementSummaryTabsValue>
		</BudgetManagementSummaryTabsContainer>
	);
};

export default BudgetManagementSummaryTabsComponent;
