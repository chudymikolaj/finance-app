import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { useRef, useState } from "react";

import useOutsideClick from "@/utils/useOutsideClick";
import BudgetManagementActionButton from "@/components/BudgetManagement/BudgetManagementActionButton";
import BudgetManagementSummaryTabsComponent from "@/components/BudgetManagement/BudgetManagementSummaryTabs";
import ButtonSVG from "@/components/Buttons/ButtonSvg";

import {
	BudgetManagementTabsContainer,
	BudgetManagementTabsTab,
	BudgetManagementTabsTabList,
	BudgetManagementTabsTabListItem,
	BudgetManagementTabsTabListItemButtons,
	BudgetManagementTabsTabListItemName,
	BudgetManagementTabsTabListItemValue,
	BudgetManagementTabsTabName,
	BudgetManagementTabsWrapper,
} from "./BudgetManagementTabs.styled";

import {
	type BudgetManagementTabsType,
	type HandleTabListItemEditType,
	type HandleTabListItemRemoveType,
	type ModifyAssetStateType,
} from "./BudgetManagementTabs.types";
import {
	FormAddBudgetListTabItem,
	FormEditBudgetListTabItem,
} from "@/components/Forms";
import PopupInsideElementComponent from "@/components/PopupInsideComponent";

const BudgetManagementTabsComponent = ({
	activeTab,
	budgetTabLists,
}: BudgetManagementTabsType) => {
	const { budgetListTabItemRemove } = useAppContext();
	const [showPopupAsset, setPopupAsset] = useState(false);
	const [showPopupIsEdit, setShowPopupIsEdit] = useState(false);
	const [modifyAsset, setModifyAsset] = useState<ModifyAssetStateType>({
		id: "",
		title: "",
		value: "",
	});

	const popupFormsRef = useRef(null);
	const isAssets = budgetTabLists.length > 0;

	const togglePopupAsset = () => {
		setPopupAsset((prevState) => !prevState);
	};

	const closePopupAsset = () => {
		setPopupAsset(false);
		setShowPopupIsEdit(false);
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
		setPopupAsset(true);
	};

	const handleTabListItemRemove = (
		categoryId: HandleTabListItemRemoveType,
		id: HandleTabListItemRemoveType
	) => {
		budgetListTabItemRemove(categoryId, id);
	};

	useOutsideClick({
		isVisible: showPopupAsset,
		setIsVisible: setPopupAsset,
		closeFunction: closePopupAsset,
		refs: [popupFormsRef],
	});

	return (
		<BudgetManagementTabsContainer>
			<BudgetManagementTabsWrapper>
				{isAssets ? (
					budgetTabLists.map(
						({ categoryId, title, value, color, lists }) =>
							categoryId === activeTab && (
								<BudgetManagementTabsTab key={categoryId}>
									<BudgetManagementTabsTabName $color={color}>
										{title}
									</BudgetManagementTabsTabName>
									<BudgetManagementTabsTabList>
										{lists.map(({ id, title, value }) => (
											<BudgetManagementTabsTabListItem key={id}>
												<BudgetManagementTabsTabListItemName>
													{title}
												</BudgetManagementTabsTabListItemName>
												<BudgetManagementTabsTabListItemValue>
													{value} PLN
												</BudgetManagementTabsTabListItemValue>
												<BudgetManagementTabsTabListItemButtons>
													<ButtonSVG
														onClick={() =>
															handleTabListItemEdit(id, title, String(value))
														}
														svgUrl="./add.svg"
													></ButtonSVG>
													<ButtonSVG
														onClick={() =>
															handleTabListItemRemove(categoryId, id)
														}
														svgUrl="./remove.svg"
													></ButtonSVG>
												</BudgetManagementTabsTabListItemButtons>
											</BudgetManagementTabsTabListItem>
										))}
									</BudgetManagementTabsTabList>

									<BudgetManagementActionButton action={togglePopupAsset} />
									<BudgetManagementSummaryTabsComponent value={value} />

									<PopupInsideElementComponent
										ref={popupFormsRef}
										showPopup={showPopupAsset}
									>
										{showPopupIsEdit ? (
											<FormEditBudgetListTabItem
												data={modifyAsset}
												categoryId={categoryId}
												closePopup={closePopupAsset}
											/>
										) : (
											<FormAddBudgetListTabItem
												categoryId={categoryId}
												closePopup={closePopupAsset}
											/>
										)}
									</PopupInsideElementComponent>
								</BudgetManagementTabsTab>
							)
					)
				) : (
					<div>Wczytywanie listy</div>
				)}
			</BudgetManagementTabsWrapper>
		</BudgetManagementTabsContainer>
	);
};

export default BudgetManagementTabsComponent;
