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

import {
	FormAddAssetListTabItem,
	FormEditAssetListTabItem,
} from "@/components/Forms";

const AssetManagementTabsComponent = ({
	activeTab,
	assetTabLists,
}: AssetManagementTabsType) => {
	const { assetListTabItemRemove } = useAppContext();
	const [showPopupAsset, setPopupAsset] = useState(false);
	const [showPopupIsEdit, setShowPopupIsEdit] = useState(false);
	const [modifyAsset, setModifyAsset] = useState<ModifyAssetStateType>({
		id: "",
		title: "",
		value: "",
	});

	const isAssets = assetTabLists.length > 0;

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

	const handleTabListItemRemove = (
		categoryId: HandleTabListItemRemoveType,
		id: HandleTabListItemRemoveType
	) => {
		assetListTabItemRemove(categoryId, id);
	};

	const isListOfAssets = (asset: TabListItem[]) => asset.length > 0;
	const isEmptyListOfAssets = (asset: TabListItem[]) => asset.length === 0;

	return (
		<AssetManagementTabsContainer>
			<AssetManagementTabsWrapper>
				{isAssets ? (
					assetTabLists.map(
						({ categoryId, title, value, color, lists }) =>
							categoryId === activeTab && (
								<AssetManagementTabsTab key={categoryId}>
									{!showPopupAsset && !showPopupIsEdit && (
										<>
											<AssetManagementTabsTabName $color={color}>
												{title}
											</AssetManagementTabsTabName>
											<AssetManagementTabsTabList>
												{isListOfAssets(lists) &&
													lists.map(({ id, title, value }) => (
														<AssetManagementTabsTabListItem key={id}>
															<AssetManagementTabsTabListItemName>
																{title}
															</AssetManagementTabsTabListItemName>
															<AssetManagementTabsTabListItemValue>
																{value} PLN
															</AssetManagementTabsTabListItemValue>
															<AssetManagementTabsTabListItemButtons>
																<AssetManagementTabsTabListItemButton
																	onClick={() =>
																		handleTabListItemEdit(
																			id,
																			title,
																			String(value)
																		)
																	}
																	svgUrl="./add.svg"
																></AssetManagementTabsTabListItemButton>
																<AssetManagementTabsTabListItemButton
																	onClick={() =>
																		handleTabListItemRemove(categoryId, id)
																	}
																	svgUrl="./remove.svg"
																></AssetManagementTabsTabListItemButton>
															</AssetManagementTabsTabListItemButtons>
														</AssetManagementTabsTabListItem>
													))}

												{isEmptyListOfAssets(lists) && (
													<AssetManagementTabsTabEmptyList>
														Kategoria jest pusta.
													</AssetManagementTabsTabEmptyList>
												)}
											</AssetManagementTabsTabList>

											<AssetManagementActionButton action={togglePopupAsset} />
											<AssetManagementSummaryTabsComponent value={value} />
										</>
									)}

									{showPopupIsEdit && (
										<FormEditAssetListTabItem
											data={modifyAsset}
											categoryId={categoryId}
											closePopup={closePopupEdit}
										/>
									)}

									{showPopupAsset && (
										<FormAddAssetListTabItem
											categoryId={categoryId}
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
