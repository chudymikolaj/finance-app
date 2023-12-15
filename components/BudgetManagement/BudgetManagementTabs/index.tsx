import BudgetManagementActionButton from "../BudgetManagementActionButton";
import BudgetManagementSummaryTabsComponent from "../BudgetManagementSummaryTabs";
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
	budgetTabLists,
}: BudgetManagementTabsType) => {
	const isAssets = budgetTabLists.length > 0;

	return (
		<BudgetManagementTabsContainer>
			<BudgetManagementTabsWrapper>
				{isAssets ? (
					budgetTabLists.map(
						({ id, title, value, color, lists }) =>
							id === activeTab && (
								<BudgetManagementTabsTab key={id}>
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
													<BudgetManagementTabsButton svgUrl="./more_vert.svg"></BudgetManagementTabsButton>
												</BudgetManagementTabsTabListItemButtons>
											</BudgetManagementTabsTabListItem>
										))}
									</BudgetManagementTabsTabList>
									<BudgetManagementActionButton action={() => alert(title)} />
									<BudgetManagementSummaryTabsComponent value={value} />
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
