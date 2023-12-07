import Wallet from "@/components/Wallet";
import CashFlow from "@/components/CashFlow";
import BudgetManagmentComponent from "@/components/BudgetManagement";

import {
	DashboardContainer,
	DashboardLeftColumn,
	DashboardRightColumn,
} from "./dashboard.styled";

export default function Dashboard() {
	return (
		<DashboardContainer>
			<DashboardLeftColumn>
				<Wallet />
				<CashFlow />
			</DashboardLeftColumn>
			<DashboardRightColumn>
				<BudgetManagmentComponent />
			</DashboardRightColumn>
		</DashboardContainer>
	);
}
