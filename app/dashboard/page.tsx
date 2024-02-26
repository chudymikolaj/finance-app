"use client";

import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { getUserDataAxios } from "@/utils/fetch/getUserDataAxios";
import updateBudgetOptions from "@/utils/fetch/updateDefaultBudgetAllocations";

import AssetManagement from "@/components/AssetManagement";
import BudgetManagmentComponent from "@/components/BudgetManagement";
import CashFlow from "@/components/CashFlow";
import { IntroDashboardComponent } from "@/components/Intro";
import Wallet from "@/components/Wallet";

import { DashboardContainer, DashboardLeftColumn, DashboardRightColumn } from "./dashboard.styled";

export default function Dashboard() {
	const pathname = usePathname();
	const { updateExpensesList, updateRevenuesList, updateBudgetAllocations } = useAppContext();

	useEffect(() => {
		const securePage = async () => {
			const session = await getSession();

			if (session) {
				const getMonetaryIncomes = await getUserDataAxios(session, "?populate[monetary_incomes]=*");

				if ("monetary_incomes" in getMonetaryIncomes) {
					updateRevenuesList(getMonetaryIncomes?.monetary_incomes);
				}

				const getMonetaryExpenses = await getUserDataAxios(session, "?populate[monetary_expenses]=*");

				if ("monetary_expenses" in getMonetaryExpenses) {
					updateExpensesList(getMonetaryExpenses?.monetary_expenses);
				}

				const getBudgetOptions = await getUserDataAxios(session, "?populate[budget_options]=*");

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
