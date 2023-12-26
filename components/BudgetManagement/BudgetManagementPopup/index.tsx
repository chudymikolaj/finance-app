import ButtonSVG from "@/components/Buttons/ButtonSvg";
import { forwardRef } from "react";

import { type BlockFormKeysEvent } from "@/components/Wallet/EditorWallet/EditorWallet.types";
import {
	type BudgetPopupType,
	type Ref,
} from "./BudgetManagementTabsPopup.types";

import {
	BudgetManagementTabsPopupContainer,
	BudgetManagementTabsPopupForm,
	BudgetManagementTabsPopupHeader,
	BudgetManagementTabsPopupInput,
	BudgetManagementTabsPopupLabel,
	BudgetManagementTabsPopupPosition,
	BudgetManagementTabsPopupSubmit,
	BudgetManagementTabsPopupTitle,
} from "./BudgetManagementTabsPopup.styled";

const BudgetManagementTabsPopupComponent = forwardRef<Ref, BudgetPopupType>(
	(
		{
			showPopup,
			inputTitleValue,
			inputValue,
			onSubmit,
			handleTitle,
			handleValue,
			closePopup,
		},
		ref
	) => {
		const blockFormKeysInput = (event: BlockFormKeysEvent) =>
			["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

		return (
			showPopup && (
				<BudgetManagementTabsPopupPosition>
					<BudgetManagementTabsPopupContainer ref={ref}>
						<BudgetManagementTabsPopupHeader>
							<BudgetManagementTabsPopupTitle>
								Dodaj nowe aktywo
							</BudgetManagementTabsPopupTitle>
							<ButtonSVG
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
	}
);

export default BudgetManagementTabsPopupComponent;
