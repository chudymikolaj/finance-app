type EditorWallet = {
  show: boolean;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  resetValue: number | string;
  maxValue: number;
}

export default EditorWallet;