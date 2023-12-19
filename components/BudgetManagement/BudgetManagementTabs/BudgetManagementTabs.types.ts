import { type BudgetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";
import { type ChangeEvent, type SyntheticEvent } from "react";

export type BudgetManagementTabsType = {
  activeTab: string;
  budgetTabLists: BudgetTabList[];
}

export type NewAssetStateType = {
  title: string;
  value: string;
}

export type HandlePopupAssetTitleType = ChangeEvent<HTMLInputElement>;

export type HandlePopupAssetValueType = ChangeEvent<HTMLInputElement>;

export type OnSubmitPopupAssetEventType = SyntheticEvent<HTMLFormElement, SubmitEvent>

export type OnSubmitPopupAssetTabCategoryIdType = string;

export type HandleTabListItemRemoveType = string;