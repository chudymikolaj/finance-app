import getUserDataAxios from "./getUserDataAxios";
import updateTabValueAxios from "./updateTabValueAxios";

import { type AssetTabList } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

const refreshTabAssetsItems = async (session: any, updateAssetListTabs: (assets_tabs: AssetTabList[]) => void) => {
	const resultAssetsTabs = await getUserDataAxios(
		(session as any)?.jwt,
		"?populate[assets_tabs][populate][tab_assets]=*"
	);

	updateAssetListTabs([]);

	if ("assets_tabs" in resultAssetsTabs) {
		const convertedValueOfTabs = resultAssetsTabs.assets_tabs.map((tab) => {
			let value = tab.tab_assets.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.value;
			}, 0);

			const newValue = { ...tab, value };

			updateTabValueAxios(newValue, (session as any).jwt, "/api/assets-tabs");

			return newValue;
		});

		updateAssetListTabs(convertedValueOfTabs);
	}
};

export default refreshTabAssetsItems;
