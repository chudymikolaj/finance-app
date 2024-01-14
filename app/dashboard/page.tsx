import Wallet from "@/components/Wallet";
import CashFlow from "@/components/CashFlow";
import BudgetManagmentComponent from "@/components/BudgetManagement";
import AssetManagement from "@/components/AssetManagement";

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
				<AssetManagement />
			</DashboardRightColumn>
		</DashboardContainer>
	);
}
