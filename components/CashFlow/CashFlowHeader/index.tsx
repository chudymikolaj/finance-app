import {
	FlowCashHeader,
	FlowCashHeaderTitle,
	FlowCashHeaderOptions,
	FlowCashHeaderMonth,
	FlowCashHeaderButtons,
	CashFlowButton,
} from "./CashFLowHeader.styled";

const CashFlowHeaderComponent = () => {
	return (
		<FlowCashHeader>
			<FlowCashHeaderTitle>Wydatki na miesiąc</FlowCashHeaderTitle>
			<FlowCashHeaderOptions>
				<FlowCashHeaderMonth>09.2023</FlowCashHeaderMonth>
				<FlowCashHeaderButtons>
					<CashFlowButton svgUrl="/more_vert.svg" />
				</FlowCashHeaderButtons>
			</FlowCashHeaderOptions>
		</FlowCashHeader>
	);
};

export default CashFlowHeaderComponent;
