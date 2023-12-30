import { type BudgetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

export type BudgetManagementTabsType = {
  activeTab: string;
  budgetTabLists: BudgetTabList[];
}

export type ModifyAssetStateType = {
  id: string;
  title: string;
  value: string;
}

export type HandleTabListItemEditType = string;

export type HandleTabListItemRemoveType = string;