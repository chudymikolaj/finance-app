import BudgetManagementActionButton from "@/components/BudgetManagement/BudgetManagementActionButton";
import BudgetManagementTabsPopup from "@/components/BudgetManagement/BudgetManagementPopup";
import BudgetManagementSummaryTabsComponent from "@/components/BudgetManagement/BudgetManagementSummaryTabs";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
	BudgetManagementTabsButton,
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
	type HandlePopupAssetTitleType,
	type HandlePopupAssetValueType,
	type NewAssetStateType,
	type OnSubmitPopupAssetEventType,
	type OnSubmitPopupAssetTabCategoryIdType,
	type HandleTabListItemRemoveType,
} from "./BudgetManagementTabs.types";

const BudgetManagementTabsComponent = ({
	activeTab,
	budgetTabLists,
}: BudgetManagementTabsType) => {
	const { addBudgetListTabItem, budgetListTabItemRemove } = useAppContext();
	const [showPopupAsset, setPopupAsset] = useState(false);
	const [newAsset, setNewAsset] = useState<NewAssetStateType>({
		title: "",
		value: "",
	});

	const isAssets = budgetTabLists.length > 0;

	const togglePopupAsset = () => {
		setPopupAsset((prevState) => !prevState);
	};

	const resetPopupAddAsset = () => {
		setNewAsset({ title: "", value: "" });
	};

	const closePopupAsset = () => {
		setPopupAsset(false);
	};

	const handlePopupAssetTitle = (event: HandlePopupAssetTitleType) => {
		const getTitle = event.target.value;
		setNewAsset((prevState) => ({ ...prevState, title: getTitle }));
	};

	const handlePopupAssetValue = (event: HandlePopupAssetValueType) => {
		const getValue = event.target.value;
		setNewAsset((prevState) => ({ ...prevState, value: getValue }));
	};

	const onSubmitPopupAsset = (
		event: OnSubmitPopupAssetEventType,
		tabCategoryId: OnSubmitPopupAssetTabCategoryIdType
	) => {
		event.preventDefault();

		if (newAsset.title !== "" && newAsset.value !== "") {
			const addAsset: { id: string; title: string; value: number } = {
				id: uuidv4(),
				title: newAsset.title,
				value: Number(newAsset.value),
			};

			addBudgetListTabItem(tabCategoryId, addAsset);
			resetPopupAddAsset();
			closePopupAsset();
		}
	};

	const handleTabListItemRemove = (
		categoryId: HandleTabListItemRemoveType,
		id: HandleTabListItemRemoveType
	) => {
		budgetListTabItemRemove(categoryId, id);
	};

	useEffect(() => {
		if (showPopupAsset === true) {
			setPopupAsset(false);
			resetPopupAddAsset();
			closePopupAsset();
		}
	}, [activeTab]);

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
													<BudgetManagementTabsButton svgUrl="./add.svg"></BudgetManagementTabsButton>
													<BudgetManagementTabsButton
														onClick={() =>
															handleTabListItemRemove(categoryId, id)
														}
														svgUrl="./remove.svg"
													></BudgetManagementTabsButton>
												</BudgetManagementTabsTabListItemButtons>
											</BudgetManagementTabsTabListItem>
										))}
									</BudgetManagementTabsTabList>

									<BudgetManagementActionButton action={togglePopupAsset} />
									<BudgetManagementSummaryTabsComponent value={value} />

									<BudgetManagementTabsPopup
										showPopup={showPopupAsset}
										onSubmit={(event) => onSubmitPopupAsset(event, categoryId)}
										handleTitle={(event) => handlePopupAssetTitle(event)}
										handleValue={(event) => handlePopupAssetValue(event)}
										closePopup={closePopupAsset}
										inputTitleValue={newAsset.title} // Replace with actual state or prop
										inputValue={newAsset.value}
									/>
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
