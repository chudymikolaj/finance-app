import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { useState } from "react";

import AssetManagementActionButton from "../AssetManagementActionButton";
import AssetManagementSummaryTabsComponent from "../AssetManagementSummaryTabs";

import {
	AssetManagementTabsContainer,
	AssetManagementTabsTab,
	AssetManagementTabsTabList,
	AssetManagementTabsTabEmptyList,
	AssetManagementTabsTabListItem,
	AssetManagementTabsTabListItemButton,
	AssetManagementTabsTabListItemButtons,
	AssetManagementTabsTabListItemName,
	AssetManagementTabsTabListItemValue,
	AssetManagementTabsTabName,
	AssetManagementTabsWrapper,
} from "./AssetManagementTabs.styled";

import {
	type AssetManagementTabsType,
	type HandleTabListItemEditType,
	type HandleTabListItemRemoveType,
	type ModifyAssetStateType,
} from "./AssetManagementTabs.types";

import { type TabListItem } from "@/lib/ThemeProviderContext/ThemeProviderContext.types";

import { FormAddAssetListTabItem, FormEditAssetListTabItem } from "@/components/Forms";

const AssetManagementTabsComponent = ({ activeTab, assets_tabs }: AssetManagementTabsType) => {
	const { assetListTabItemRemove } = useAppContext();
	const [showPopupAsset, setPopupAsset] = useState(false);
	const [showPopupIsEdit, setShowPopupIsEdit] = useState(false);
	const [modifyAsset, setModifyAsset] = useState<ModifyAssetStateType>({
		id: "",
		title: "",
		value: "",
	});

	const isAssets = assets_tabs.length > 0;

	const togglePopupAsset = () => {
		setPopupAsset((prevState) => !prevState);
		setShowPopupIsEdit(false);
	};

	const closePopupEdit = () => {
		setShowPopupIsEdit(false);
	};

	const closePopupAsset = () => {
		setPopupAsset(false);
	};

	const handleTabListItemEdit = (
		itemId: HandleTabListItemEditType,
		title: HandleTabListItemEditType,
		value: HandleTabListItemEditType
	) => {
		setModifyAsset({
			id: itemId,
			title: title,
			value: value,
		});

		setShowPopupIsEdit(true);
		setPopupAsset(false);
	};

	const handleTabListItemRemove = (idAsset: HandleTabListItemRemoveType, idAssetItem: HandleTabListItemRemoveType) => {
		assetListTabItemRemove(idAsset, idAssetItem);
	};

	const isListOfAssets = (asset: TabListItem[]) => asset.length > 0;
	const isEmptyListOfAssets = (asset: TabListItem[]) => asset.length === 0;

	return (
		<AssetManagementTabsContainer>
			<AssetManagementTabsWrapper>
				{isAssets ? (
					assets_tabs.map(
						({ id_asset, name, value, color, tab_assets }) =>
							id_asset === activeTab && (
								<AssetManagementTabsTab key={id_asset}>
									{!showPopupAsset && !showPopupIsEdit && (
										<>
											<AssetManagementTabsTabName $color={color}>{name}</AssetManagementTabsTabName>
											<AssetManagementTabsTabList>
												{isListOfAssets(tab_assets) &&
													tab_assets.map(({ id, id_asset_item, name, value }) => (
														<AssetManagementTabsTabListItem key={id}>
															<AssetManagementTabsTabListItemName>{name}</AssetManagementTabsTabListItemName>
															<AssetManagementTabsTabListItemValue>{value} PLN</AssetManagementTabsTabListItemValue>
															<AssetManagementTabsTabListItemButtons>
																<AssetManagementTabsTabListItemButton
																	onClick={() => handleTabListItemEdit(id_asset_item, name, String(value))}
																	svgUrl="./add.svg"
																></AssetManagementTabsTabListItemButton>
																<AssetManagementTabsTabListItemButton
																	onClick={() => handleTabListItemRemove(id_asset, id_asset_item)}
																	svgUrl="./remove.svg"
																></AssetManagementTabsTabListItemButton>
															</AssetManagementTabsTabListItemButtons>
														</AssetManagementTabsTabListItem>
													))}

												{isEmptyListOfAssets(tab_assets) && (
													<AssetManagementTabsTabEmptyList>Kategoria jest pusta.</AssetManagementTabsTabEmptyList>
												)}
											</AssetManagementTabsTabList>

											<AssetManagementActionButton action={togglePopupAsset} />
											<AssetManagementSummaryTabsComponent value={value} />
										</>
									)}

									{showPopupIsEdit && (
										<FormEditAssetListTabItem
											data={modifyAsset}
											categoryId={id_asset}
											closePopup={closePopupEdit}
										/>
									)}

									{showPopupAsset && (
										<FormAddAssetListTabItem
											categoryId={id_asset}
											closePopup={closePopupAsset}
										/>
									)}
								</AssetManagementTabsTab>
							)
					)
				) : (
					<div>Wczytywanie listy</div>
				)}
			</AssetManagementTabsWrapper>
		</AssetManagementTabsContainer>
	);
};

export default AssetManagementTabsComponent;
