import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { useSession } from "next-auth/react";
import { useState } from "react";

import AssetManagementActionButton from "../AssetManagementActionButton";
import AssetManagementSummaryTabsComponent from "../AssetManagementSummaryTabs";
import AssetTabListComponent from "../AssetManagementTabList";

import {
	AssetManagementTabsContainer,
	AssetManagementTabsTab,
	AssetManagementTabsTabName,
	AssetManagementTabsWrapper,
} from "./AssetManagementTabs.styled";

import {
	HandleTabListItemEditIdType,
	type AssetManagementTabsType,
	type HandleTabListItemEditNumberType,
	type HandleTabListItemEditType,
	type HandleTabListItemIdType,
	type HandleTabListItemRemoveType,
	type ModifyAssetStateType,
} from "./AssetManagementTabs.types";

import { FormAddAssetListTabItem, FormEditAssetListTabItem } from "@/components/Forms";

const AssetManagementTabsComponent = ({ activeTab, assets_tabs }: AssetManagementTabsType) => {
	const { data: sessions } = useSession();

	const { assetListTabItemRemove } = useAppContext();
	const [modifyAsset, setModifyAsset] = useState<ModifyAssetStateType>({
		id: 0,
		idAssetItem: "",
		title: "",
		value: 0,
	});

	const [showPopupAsset, setPopupAsset] = useState(false);
	const [showPopupIsEdit, setShowPopupIsEdit] = useState(false);

	const handleTabListItemEdit = (
		id: HandleTabListItemEditIdType,
		itemId: HandleTabListItemEditType,
		title: HandleTabListItemEditType,
		value: HandleTabListItemEditNumberType
	) => {
		setModifyAsset({
			id: id,
			idAssetItem: itemId,
			title: title,
			value: value,
		});

		setShowPopupIsEdit(true);
		setPopupAsset(false);
	};

	const handleTabListItemRemove = (
		cmsID: HandleTabListItemIdType,
		idAsset: HandleTabListItemRemoveType,
		idAssetItem: HandleTabListItemRemoveType
	) => {
		const getUserJWT = (sessions as any)?.jwt;
		assetListTabItemRemove(cmsID, getUserJWT, idAsset, idAssetItem);
	};

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

	return (
		<AssetManagementTabsContainer>
			<AssetManagementTabsWrapper>
				{isAssets ? (
					assets_tabs.map(
						({ id, id_asset, name, value, color, tab_assets }) =>
							id_asset === activeTab && (
								<AssetManagementTabsTab key={id_asset}>
									{!showPopupAsset && !showPopupIsEdit && (
										<>
											<AssetManagementTabsTabName $color={color}>{name}</AssetManagementTabsTabName>
											<AssetTabListComponent
												id_asset={id_asset}
												tab_assets={tab_assets}
												handleEdit={handleTabListItemEdit}
												handleRemove={handleTabListItemRemove}
											/>
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
											tabId={id}
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
