import { type AssetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

export type AssetManagementTabsType = {
	activeTab: string;
	assets_tabs: AssetTabList[];
};

export type ModifyAssetStateType = {
	id: string;
	title: string;
	value: string;
};

export type HandleTabListItemEditType = string;

export type HandleTabListItemRemoveType = string;
