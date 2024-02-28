import {
	AssetManagementTabsTabList,
	AssetManagementTabsTabEmptyList,
	AssetManagementTabsTabListItem,
	AssetManagementTabsTabListItemButton,
	AssetManagementTabsTabListItemButtons,
	AssetManagementTabsTabListItemName,
	AssetManagementTabsTabListItemValue,
} from "./AssetManagementTabList.styled";

import { type TabListItem } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

type AssetTabsTabListPropsType = {
	categoryTabId: number;
	tab_assets: TabListItem[];
	handleEdit: (id: number, categoryTabId: number, name: string, value: number) => void;
	handleRemove: (id: number, categoryTabId: number) => void;
};

const AssetTabListComponent = ({ categoryTabId, tab_assets, handleEdit, handleRemove }: AssetTabsTabListPropsType) => {
	const isListOfAssets = (asset: TabListItem[]) => asset.length > 0;
	const isEmptyListOfAssets = (asset: TabListItem[]) => asset.length === 0;

	return (
		<AssetManagementTabsTabList>
			{isListOfAssets(tab_assets) &&
				tab_assets.map(({ id, name, value }) => (
					<AssetManagementTabsTabListItem key={id}>
						<AssetManagementTabsTabListItemName>{name}</AssetManagementTabsTabListItemName>
						<AssetManagementTabsTabListItemValue>{value} PLN</AssetManagementTabsTabListItemValue>
						<AssetManagementTabsTabListItemButtons>
							<AssetManagementTabsTabListItemButton
								onClick={() => handleEdit(id, categoryTabId, name, value)}
								svgUrl="./add.svg"
							></AssetManagementTabsTabListItemButton>
							<AssetManagementTabsTabListItemButton
								onClick={() => handleRemove(id, categoryTabId)}
								svgUrl="./remove.svg"
							></AssetManagementTabsTabListItemButton>
						</AssetManagementTabsTabListItemButtons>
					</AssetManagementTabsTabListItem>
				))}

			{isEmptyListOfAssets(tab_assets) && (
				<AssetManagementTabsTabEmptyList>Kategoria jest pusta.</AssetManagementTabsTabEmptyList>
			)}
		</AssetManagementTabsTabList>
	);
};

export default AssetTabListComponent;
