import {
  EditorWallet,
  EditorWalletForm,
  EditorWalletLabel,
  EditorWalletName,
  EditorWalletInputWrapper,
  EditorWalletInput,
  EditorWalletButton
} from "./EditorWallet.styled";

import { type EditorWalletProps, type blockKeysEvent } from "./EditorWallet.types";

const EditorWalletComponent = ({
  show,
  onChangeInput,
  submitForm,
  resetValue,
  maxValue
}: EditorWalletProps) => {
  const blockKeysInsideInput = (event: blockKeysEvent) => ["e", "E", "+", "-"].includes(event.key) && event.preventDefault();
  const placeholderValue = "0";

  return (
    <EditorWallet $animate={show}>
      <EditorWalletForm onSubmit={submitForm}>
        <EditorWalletLabel>
          <EditorWalletName>Zmień kwotę wynagrodzenia</EditorWalletName>
          <EditorWalletInputWrapper>
            <EditorWalletInput
              type="number"
              onInput={onChangeInput}
              onKeyDown={blockKeysInsideInput}
              placeholder={placeholderValue}
              value={resetValue}
              max={maxValue}
            />
            <EditorWalletButton>Zmień</EditorWalletButton>
          </EditorWalletInputWrapper>
        </EditorWalletLabel>
      </EditorWalletForm>
    </EditorWallet>
  )
}

export default EditorWalletComponent;