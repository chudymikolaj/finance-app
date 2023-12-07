import {
	BudgetContainer,
	BudgetHeader,
	BudgetHeaderTitle,
	ButtonOptions,
} from "./BudgetManagment.styled";

const BudgetManagmentComponent = () => {
	return (
		<BudgetContainer>
			<BudgetHeader>
				<BudgetHeaderTitle>Zarządzanie budżetem</BudgetHeaderTitle>
				<ButtonOptions svgUrl="./settings.svg" />
			</BudgetHeader>
		</BudgetContainer>
	);
};

export default BudgetManagmentComponent;
