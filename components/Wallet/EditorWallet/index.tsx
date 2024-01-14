import PopupComponent from "@/components/Popup";

import {
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
	type BlockFormKeysEvent,
} from "./EditorWallet.types";

const EditorWalletComponent = ({
	choiceTypes,
	checkedAction,
	resetValue,
	resetText,
	maxValue,
	openPopup,
	closePopup,
	onChangeType,
	onChangeValueInput,
	onChangeTextInput,
	submitForm,
}: EditorWalletProps) => {
	const blockFormKeysInput = (event: BlockFormKeysEvent) =>
		["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

	return (
		<PopupComponent
			openPopup={openPopup}
			closePopup={closePopup}
		>
			<EditorWalletForm onSubmit={submitForm}>
				<EditorWalletFormChoice>
					<EditorWalletFormChoiceName>
						Dodaj do listy:
					</EditorWalletFormChoiceName>
					<EditorWalletFormChoiceLabels>
						{choiceTypes.map(({ name, slug }) => (
							<EditorWalletFormChoiceButton key={slug}>
								<EditorWalletFormChoiceInputRadio
									type="radio"
									name="cashflow-radio"
									id={slug}
									value={slug}
									checked={slug === checkedAction}
									onChange={onChangeType}
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
							onKeyDown={blockFormKeysInput}
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
		</PopupComponent>
	);
};

export default EditorWalletComponent;
