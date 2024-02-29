import getUserDataAxios from "./getUserDataAxios";

import { type AssetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

const refreshTabAssetsItems = async (session: any, updateAssetListTabs: (assets_tabs: AssetTabList[]) => void) => {
	const resultAssetsTabs = await getUserDataAxios(
		(session as any)?.jwt,
		"?populate[assets_tabs][populate][tab_assets]=*"
	);

	if ("assets_tabs" in resultAssetsTabs) {
		updateAssetListTabs(resultAssetsTabs.assets_tabs);
	}
};

export default refreshTabAssetsItems;
