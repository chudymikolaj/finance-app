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
	type HandleCategoryTabIdType,
	type ModifyAssetStateType,
} from "./AssetManagementTabs.types";

import { FormAddAssetListTabItem, FormEditAssetListTabItem } from "@/components/Forms";

const AssetManagementTabsComponent = ({ activeTabId, assets_tabs }: AssetManagementTabsType) => {
	const { data: sessions } = useSession();

	const { assetListTabItemRemove } = useAppContext();
	const [modifyAsset, setModifyAsset] = useState<ModifyAssetStateType>({
		id: 0,
		categoryTabId: 0,
		title: "",
		value: 0,
	});

	const [showPopupAsset, setPopupAsset] = useState(false);
	const [showPopupIsEdit, setShowPopupIsEdit] = useState(false);

	const handleTabListItemEdit = (
		id: HandleTabListItemEditIdType,
		categoryTabId: HandleCategoryTabIdType,
		title: HandleTabListItemEditType,
		value: HandleTabListItemEditNumberType
	) => {
		setModifyAsset({
			id: id,
			categoryTabId: categoryTabId,
			title: title,
			value: value,
		});

		setShowPopupIsEdit(true);
		setPopupAsset(false);
	};

	const handleTabListItemRemove = (cmsID: HandleTabListItemIdType, categoryTabId: HandleCategoryTabIdType) => {
		const getUserJWT = (sessions as any)?.jwt;
		assetListTabItemRemove(cmsID, categoryTabId, getUserJWT);
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
						({ id, name, value, color, tab_assets }) =>
							id === activeTabId && (
								<AssetManagementTabsTab key={id}>
									{!showPopupAsset && !showPopupIsEdit && (
										<>
											<AssetManagementTabsTabName $color={color}>{name}</AssetManagementTabsTabName>
											<AssetTabListComponent
												categoryTabId={id}
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
											categoryId={id}
											closePopup={closePopupEdit}
										/>
									)}

									{showPopupAsset && (
										<FormAddAssetListTabItem
											newId={tab_assets.length + 1}
											categoryId={id}
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
