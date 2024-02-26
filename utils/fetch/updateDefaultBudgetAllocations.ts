import { BudgetAllocation, BudgetAllocations } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";
import updateBudgetOptionsAxios from "@/utils/fetch/updateBudgetOptionsAxios";

const updateBudgetOptions = (
	budgetArray: BudgetAllocations,
	updateBudgetAllocations: (allocations: BudgetAllocation[]) => void,
	session: any
) => {
	if ((budgetArray as any).length === 0) {
		const defaultBudgetOptions = [
			{
				id: 1,
				title: "Żelazna rezerwa",
				share: 0.3,
				value: 0,
				color: "#5D8C71",
			},
			{
				id: 2,
				title: "Inwestycje",
				share: 0.2,
				value: 0,
				color: "#FF6969",
			},
			{
				id: 3,
				title: "Oszczędności",
				share: 0.1,
				value: 0,
				color: "#9747FF",
			},
			{
				id: 4,
				title: "Reszta",
				share: 0.4,
				value: 0,
				color: "#67aded",
			},
		];

		const defaultBudgetOptionsPost = [
			{
				title: "Żelazna rezerwa",
				share: 0.3,
				color: "#5D8C71",
				users_permissions_user: { connect: [session?.id] },
			},
			{
				title: "Inwestycje",
				share: 0.2,
				color: "#FF6969",
				users_permissions_user: { connect: [session?.id] },
			},
			{
				title: "Oszczędności",
				share: 0.1,
				color: "#9747FF",
				users_permissions_user: { connect: [session?.id] },
			},
			{
				title: "Reszta",
				share: 0.4,
				color: "#67aded",
				users_permissions_user: { connect: [session?.id] },
			},
		];

		defaultBudgetOptionsPost.forEach((data) => {
			updateBudgetOptionsAxios(data, session?.jwt);
		});

		updateBudgetAllocations(defaultBudgetOptions);
	}

	const updatedBudgetAllocationsByValue = budgetArray.budget_options.map((allocation) => {
		return { ...allocation, value: 0 };
	});

	updateBudgetAllocations(updatedBudgetAllocationsByValue);
};

export default updateBudgetOptions;
