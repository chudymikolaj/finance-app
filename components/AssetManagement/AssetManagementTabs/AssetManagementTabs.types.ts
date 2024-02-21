import { type AssetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

export type AssetManagementTabsType = {
	activeTab: string;
	assets_tabs: AssetTabList[];
};

export type ModifyAssetStateType = {
	id: number;
	idAssetItem: string;
	title: string;
	value: number;
};

export type HandleTabListItemEditType = string;
export type HandleTabListItemEditIdType = number;
export type HandleTabListItemEditNumberType = number;

export type HandleTabListItemIdType = number;
export type HandleTabListItemJwtType = string;
export type HandleTabListItemRemoveType = string;
