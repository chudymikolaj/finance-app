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
import { BudgetManagementTabsType } from "./BudgetManagementTabs.types";

const BudgetManagementTabsComponent = ({
	activeTab,
	assets,
}: BudgetManagementTabsType) => {
	const isAssets = assets.length > 0;

	return (
		<BudgetManagementTabsContainer>
			<BudgetManagementTabsWrapper>
				{isAssets ? (
					assets.map(
						({ title, color, lists }, idTab) =>
							idTab === activeTab && (
								<BudgetManagementTabsTab key={idTab}>
									<BudgetManagementTabsTabName $color={color}>
										{title}
									</BudgetManagementTabsTabName>
									<BudgetManagementTabsTabList>
										{lists.map(({ title, value }) => (
											<BudgetManagementTabsTabListItem>
												<BudgetManagementTabsTabListItemName>
													{title}
												</BudgetManagementTabsTabListItemName>
												<BudgetManagementTabsTabListItemValue>
													{value}
												</BudgetManagementTabsTabListItemValue>
												<BudgetManagementTabsTabListItemButtons>
													<BudgetManagementTabsButton svgUrl="./add.svg"></BudgetManagementTabsButton>
													<BudgetManagementTabsButton svgUrl="./more_vert.svg"></BudgetManagementTabsButton>
												</BudgetManagementTabsTabListItemButtons>
											</BudgetManagementTabsTabListItem>
										))}
									</BudgetManagementTabsTabList>
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
