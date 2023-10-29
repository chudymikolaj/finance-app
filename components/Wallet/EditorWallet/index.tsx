import {
  EditorWallet,
  EditorWalletForm,
  EditorWalletLabel,
  EditorWalletName,
  EditorWalletInputWrapper,
  EditorWalletInput,
  EditorWalletButton
} from "./EditorWallet.styled"

import EditorWalletWallet from "./EditorWallet.types"

const EditorWalletWallet = ({ show, onChangeInput, submitForm, resetValue, maxValue }: EditorWalletWallet) => {
  const blockKeysInsideInput = (event: any) => ["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

  return (
    <EditorWallet $animate={show}>
      <EditorWalletForm onSubmit={submitForm}>
        <EditorWalletLabel>
          <EditorWalletName>Zmień kwotę wynagrodzenia</EditorWalletName>
          <EditorWalletInputWrapper>
            <EditorWalletInput
              type="number"
              onChange={onChangeInput}
              onKeyDown={blockKeysInsideInput}
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

export default EditorWalletWallet;