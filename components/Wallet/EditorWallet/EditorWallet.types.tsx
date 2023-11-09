import { type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react';

export type EditorWalletProps = {
  show: boolean;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  submitForm: (event: FormEvent<HTMLFormElement>) => void;
  resetValue: string;
  maxValue: number;
}

export type blockKeysEvent = KeyboardEvent<HTMLInputElement>;