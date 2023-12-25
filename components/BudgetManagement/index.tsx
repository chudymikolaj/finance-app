import BudgetAssets from "./BudgetManagementAssets";
import BudgetCategories from "./BudgetManagementCategories";
import BudgetHeader from "./BudgetManagementHeader";

import { BudgetContainer } from "./BudgetManagementComponent.styled";

const BudgetManagementComponent = () => {
	return (
		<BudgetContainer>
			<BudgetHeader />
			<BudgetAssets />
			<BudgetCategories />
		</BudgetContainer>
	);
};

export default BudgetManagementComponent;
