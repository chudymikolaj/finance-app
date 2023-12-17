import { type BlockFormKeysEvent } from "@/components/Wallet/EditorWallet/EditorWallet.types";
import {
	BudgetManagementTabsPopupPosition,
	BudgetManagementTabsPopupContainer,
	BudgetManagementTabsPopupForm,
	BudgetManagementTabsPopupLabel,
	BudgetManagementTabsPopupInput,
	BudgetManagementTabsPopupHeader,
	BudgetManagementTabsPopupClose,
	BudgetManagementTabsPopupTitle,
	BudgetManagementTabsPopupSubmit,
} from "./BudgetManagementTabsPopup.styled";
import { type BudgetPopupType } from "./BudgetManagementTabsPopup.types";

const BudgetManagementTabsPopupComponent = ({
	showPopup,
	inputTitleValue,
	inputValue,
	onSubmit,
	handleTitle,
	handleValue,
	closePopup,
}: BudgetPopupType) => {
	const blockFormKeysInput = (event: BlockFormKeysEvent) =>
		["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

	return (
		showPopup && (
			<BudgetManagementTabsPopupPosition>
				<BudgetManagementTabsPopupContainer>
					<BudgetManagementTabsPopupHeader>
						<BudgetManagementTabsPopupTitle>
							Dodaj nowe aktywo
						</BudgetManagementTabsPopupTitle>
						<BudgetManagementTabsPopupClose
							svgUrl="remove.svg"
							onClick={closePopup}
						/>
					</BudgetManagementTabsPopupHeader>
					<BudgetManagementTabsPopupForm onSubmit={onSubmit}>
						<BudgetManagementTabsPopupLabel htmlFor="tab-list-item-name">
							Podaj nazwę
						</BudgetManagementTabsPopupLabel>
						<BudgetManagementTabsPopupInput
							id="tab-list-item-name"
							type="text"
							placeholder="Wpisz nazwę aktywa"
							value={inputTitleValue}
							onChange={handleTitle}
						/>
						<BudgetManagementTabsPopupLabel htmlFor="tab-list-item-value">
							Podaj wartość
						</BudgetManagementTabsPopupLabel>
						<BudgetManagementTabsPopupInput
							id="tab-list-item-value"
							type="number"
							placeholder="Wpisz wartość aktywa"
							value={inputValue}
							onChange={handleValue}
							onKeyDown={blockFormKeysInput}
						/>
						<BudgetManagementTabsPopupSubmit type="submit">
							Dodaj aktywo
						</BudgetManagementTabsPopupSubmit>
					</BudgetManagementTabsPopupForm>
				</BudgetManagementTabsPopupContainer>
			</BudgetManagementTabsPopupPosition>
		)
	);
};

export default BudgetManagementTabsPopupComponent;
