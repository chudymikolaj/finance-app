import { useState } from "react";
import {
	EditorWallet,
	EditorWalletForm,
	EditorWalletFormChoice,
	EditorWalletFormChoiceName,
	EditorWalletFormChoiceLabels,
	EditorWalletFormChoiceButton,
	EditorWalletFormChoiceInputRadio,
	EditorWalletFormChoiceLabel,
	EditorWalletLabel,
	EditorWalletName,
	EditorWalletInputWrapper,
	EditorWalletInput,
	EditorWalletButton,
} from "./EditorWallet.styled";

import {
	type EditorWalletProps,
	type blockKeysEvent,
} from "./EditorWallet.types";

const EditorWalletComponent = ({
	show,
	onChangeValueInput,
	onChangeTextInput,
	choiceAction,
	submitForm,
	checkedAction,
	resetValue,
	resetText,
	maxValue,
}: EditorWalletProps) => {
	const [tab, setTab] = useState([
		{
			name: "Wydatki",
			slug: "expense",
		},
		{
			name: "Przychody",
			slug: "revenue",
		},
	]);

	const handleChoiceChange = (choice: string) => {
		choiceAction(choice);
	};

	const blockKeysInsideInput = (event: blockKeysEvent) =>
		["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

	return (
		<EditorWallet $animate={show}>
			<EditorWalletForm onSubmit={submitForm}>
				<EditorWalletFormChoice>
					<EditorWalletFormChoiceName>
						Dodaj do listy:
					</EditorWalletFormChoiceName>
					<EditorWalletFormChoiceLabels>
						{tab.map(({ name, slug }) => (
							<EditorWalletFormChoiceButton key={slug}>
								<EditorWalletFormChoiceInputRadio
									type="radio"
									name="cashflow-radio"
									id={slug}
									value={slug}
									checked={slug === checkedAction}
									onChange={(e) => handleChoiceChange(e.target.value)}
								/>
								<EditorWalletFormChoiceLabel htmlFor={slug}>
									<span>{name}</span>
								</EditorWalletFormChoiceLabel>
							</EditorWalletFormChoiceButton>
						))}
					</EditorWalletFormChoiceLabels>
				</EditorWalletFormChoice>

				<EditorWalletLabel>
					<EditorWalletName>Podaj kwotę przychodu:</EditorWalletName>
					<EditorWalletInputWrapper>
						<EditorWalletInput
							type="number"
							onInput={onChangeValueInput}
							onKeyDown={blockKeysInsideInput}
							placeholder="Podaj kwotę"
							value={resetValue}
							max={maxValue}
						/>
					</EditorWalletInputWrapper>
				</EditorWalletLabel>
				<EditorWalletLabel>
					<EditorWalletName>Podaj nazwę przychodu:</EditorWalletName>
					<EditorWalletInputWrapper>
						<EditorWalletInput
							type="text"
							onInput={onChangeTextInput}
							placeholder="Podaj nazwę"
							value={resetText}
						/>
					</EditorWalletInputWrapper>
				</EditorWalletLabel>
				<EditorWalletButton>Dodaj do listy</EditorWalletButton>
			</EditorWalletForm>
		</EditorWallet>
	);
};

export default EditorWalletComponent;
