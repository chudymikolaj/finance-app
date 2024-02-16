"use client";

import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { getUserDataAxios } from "@/utils/fetch/getUserDataAxios";

import AssetManagement from "@/components/AssetManagement";
import BudgetManagmentComponent from "@/components/BudgetManagement";
import CashFlow from "@/components/CashFlow";
import { IntroDashboardComponent } from "@/components/Intro";
import Wallet from "@/components/Wallet";

import { MonetaryExpensesProps, MonetaryIncomesProps } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";
import { DashboardContainer, DashboardLeftColumn, DashboardRightColumn } from "./dashboard.styled";

export default function Dashboard() {
	const pathname = usePathname();
	const { updateExpensesList, updateRevenuesList } = useAppContext();

	useEffect(() => {
		const securePage = async () => {
			const session = await getSession();

			if (session) {
				await getUserDataAxios(session, "?populate[monetary_incomes]=*")
					.then((res: unknown) => {
						const cashFlowListProps = res as MonetaryIncomesProps;
						updateRevenuesList(cashFlowListProps?.monetary_incomes);
					})
					.catch((err) => {
						console.log(err);
					});

				await getUserDataAxios(session, "?populate[monetary_expenses]=*")
					.then((res: unknown) => {
						const monetaryExpensesResult = res as MonetaryExpensesProps;
						updateExpensesList(monetaryExpensesResult?.monetary_expenses);
					})
					.catch((err) => {
						console.log(err);
					});
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
