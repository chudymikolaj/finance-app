import Wallet from "@/components/Wallet";
import CashFlow from "@/components/CashFlow";
import { IntroDashboardComponent } from "@/components/Intro";
import BudgetManagmentComponent from "@/components/BudgetManagement";
import AssetManagement from "@/components/AssetManagement";

import {
	DashboardContainer,
	DashboardLeftColumn,
	DashboardRightColumn,
} from "./dashboard.styled";

export default function Dashboard() {
	return (
		<main>
			<IntroDashboardComponent title="Dashboard" />
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
		</main>
	);
}
