import { type AssetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

export type AssetManagementTabsType = {
	activeTabId: number;
	assets_tabs: AssetTabList[];
};

export type ModifyAssetStateType = {
	id: number;
	categoryTabId: number;
	title: string;
	value: number;
};

export type HandleTabListItemEditType = string;
export type HandleTabListItemEditIdType = number;
export type HandleTabListItemEditNumberType = number;

export type HandleTabListItemIdType = number;
export type HandleTabListItemJwtType = string;
export type HandleCategoryTabIdType = number;
