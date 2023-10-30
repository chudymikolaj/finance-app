"use client"

import { useState } from "react"

import {
  useAppConstants,
  useAppWallet,
  useAppDispatch
} from "@/lib/ThemeProviderContext/actions"

import SalaryElement from "./SalaryElement"
import EditorWallet from "./EditorWallet"
import setMaximumValue from "@/utils/setMaximumValue"

import {
  WalletContainer,
  WalletHeader,
  WalletHeaderTitle,
  WalletHeaderButton,
  WalletHeaderSvg
} from "./wallet.styled"

export default function Wallet() {
  const walletAppWallet = useAppWallet();
  const walletAppConstants = useAppConstants();
  const dispatch = useAppDispatch();

  const maxValue = walletAppConstants.maxValue;
  const sumSalary = walletAppWallet.sumSalary;
  const sumBills = walletAppWallet.sumBills;
  const restSalary = walletAppWallet.restSalary;

  const [showWalletSettings, setShowWalletSettings] = useState(false);
  const [newSalary, setNewSalary] = useState("");

  const openWalletSetting = () => {
    setShowWalletSettings(prevState => !prevState);
  }

  const closeWalletSetting = () => {
    setShowWalletSettings(false);
  }

  const getInputSalaryValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const getTargetValue = event.target.value;
    setNewSalary(getTargetValue);
  }

  const changeAndCloseSalarySetting = (event: React.FormEvent<HTMLFormElement>, maxValue: number) => {
    event.preventDefault();

    if (newSalary !== '' && Number(newSalary) <= maxValue) {
      dispatch(
        {
          type: 'change_salary',
          salary: newSalary
        },
        null
      )

      setNewSalary('');
      closeWalletSetting();
    }
  }

  return (
    <WalletContainer>
      <WalletHeader>
        <WalletHeaderTitle>Mój przychód</WalletHeaderTitle>
        <WalletHeaderButton onClick={openWalletSetting}>
          <WalletHeaderSvg src="/settings.svg" />
        </WalletHeaderButton>
      </WalletHeader>

      <SalaryElement
        valueOfSalary={setMaximumValue(sumSalary, maxValue)}
        valueOfBills={setMaximumValue(sumBills, maxValue)}
        valueOfRest={setMaximumValue(restSalary, maxValue)}
      >
        <EditorWallet
          show={showWalletSettings}
          submitForm={(event) => changeAndCloseSalarySetting(event, maxValue)}
          onChangeInput={getInputSalaryValue}
          resetValue={newSalary}
          maxValue={maxValue}
        />
      </SalaryElement>
    </WalletContainer>
  )
}