import { type BudgetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

export type BudgetManagementTabsType = {
  activeTab: string;
  budgetTabLists: BudgetTabList[];
}