"use client";

import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import getUserDataAxios from "@/utils/fetch/getUserDataAxios";
import updateBudgetOptions from "@/utils/fetch/updateDefaultBudgetAllocations";

import AssetManagement from "@/components/AssetManagement";
import BudgetManagmentComponent from "@/components/BudgetManagement";
import CashFlow from "@/components/CashFlow";
import { IntroDashboardComponent } from "@/components/Intro";
import Wallet from "@/components/Wallet";

import { DashboardContainer, DashboardLeftColumn, DashboardRightColumn } from "./dashboard.styled";
import refreshMonetaryIncomesAxios from "@/utils/fetch/refreshMonetaryIncomesAxios";
import refreshMonetaryExpensesAxios from "@/utils/fetch/refreshMonetaryExpensesAxios";

export default function Dashboard() {
	const pathname = usePathname();
	const { updateExpensesList, updateIncomesList, updateBudgetAllocations } = useAppContext();

	useEffect(() => {
		const securePage = async () => {
			const session = await getSession();

			if (session) {
				refreshMonetaryIncomesAxios(session, updateIncomesList);
				refreshMonetaryExpensesAxios(session, updateExpensesList);

				const getBudgetOptions = await getUserDataAxios((session as any)?.jwt, "?populate[budget_options]=*");

				if ("budget_options" in getBudgetOptions) {
					updateBudgetOptions(getBudgetOptions, updateBudgetAllocations, session);
				}
			}
		};

		securePage();
	}, [pathname]);

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
