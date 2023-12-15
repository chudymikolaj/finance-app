import {
	BudgetManagementActionButtonContainer,
	BudgetManagementActionButton,
} from "./BudgetManagementActionButton.styled";

const BudgetManagementActionButtonComponent = ({
	action,
}: {
	action: () => void;
}) => {
	return (
		<BudgetManagementActionButtonContainer>
			<BudgetManagementActionButton action={action}>
				Dodaj nowe aktywo
			</BudgetManagementActionButton>
		</BudgetManagementActionButtonContainer>
	);
};

export default BudgetManagementActionButtonComponent;
