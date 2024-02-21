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

type test = {
	id_asset: string;
	tab_assets: TabListItem[];
	handleEdit: (id: number, id_asset_item: string, name: string, value: number) => void;
	handleRemove: (id_asset: string, id_asset_item: string) => void;
};

const AssetTabListComponent = ({ id_asset, tab_assets, handleEdit, handleRemove }: test) => {
	const isListOfAssets = (asset: TabListItem[]) => asset.length > 0;
	const isEmptyListOfAssets = (asset: TabListItem[]) => asset.length === 0;

	return (
		<AssetManagementTabsTabList>
			{isListOfAssets(tab_assets) &&
				tab_assets.map(({ id, id_asset_item, name, value }) => (
					<AssetManagementTabsTabListItem key={id}>
						<AssetManagementTabsTabListItemName>{name}</AssetManagementTabsTabListItemName>
						<AssetManagementTabsTabListItemValue>{value} PLN</AssetManagementTabsTabListItemValue>
						<AssetManagementTabsTabListItemButtons>
							<AssetManagementTabsTabListItemButton
								onClick={() => handleEdit(id, id_asset_item, name, value)}
								svgUrl="./add.svg"
							></AssetManagementTabsTabListItemButton>
							<AssetManagementTabsTabListItemButton
								onClick={() => handleRemove(id_asset, id_asset_item)}
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
