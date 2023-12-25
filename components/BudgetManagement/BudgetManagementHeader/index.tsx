import {
	BudgetHeader,
	BudgetHeaderTitle,
} from "./BudgetManagementHeader.styled";

import ButtonSVG from "@/components/Buttons/ButtonSvg";

const BudgetManagementHeader = () => {
	return (
		<BudgetHeader>
			<BudgetHeaderTitle>Zarządzanie budżetem</BudgetHeaderTitle>
			<ButtonSVG
				svgUrl="./settings.svg"
				$big
			/>
		</BudgetHeader>
	);
};

export default BudgetManagementHeader;
