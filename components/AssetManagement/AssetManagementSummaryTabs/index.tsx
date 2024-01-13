import {
	AssetManagementSummaryTabsContainer,
	AssetManagementSummaryTabsName,
	AssetManagementSummaryTabsValue,
} from "./AssetManagementSummaryTabs.styled";

const AssetManagementSummaryTabsComponent = ({ value }: { value: number }) => {
	return (
		<AssetManagementSummaryTabsContainer>
			<AssetManagementSummaryTabsName>
				Saldo żelaznej rezerwy:
			</AssetManagementSummaryTabsName>
			<AssetManagementSummaryTabsValue>
				{value} PLN
			</AssetManagementSummaryTabsValue>
		</AssetManagementSummaryTabsContainer>
	);
};

export default AssetManagementSummaryTabsComponent;
