import BudgetHeader from "./BudgetManagementHeader";
import BudgetAssets from "./BudgetManagementAssets";

import { BudgetContainer } from "./BudgetManagementComponent.styled";

const BudgetManagementComponent = () => {
	return (
		<BudgetContainer>
			<BudgetHeader />
			<BudgetAssets />
		</BudgetContainer>
	);
};

export default BudgetManagementComponent;
