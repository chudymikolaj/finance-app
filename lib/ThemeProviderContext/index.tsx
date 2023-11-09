"use client"

import { type PropsWithChildren, useReducer } from "react";

import { type AppStateValue } from "./ThemeProviderContext.types";
import { AppContext } from "./context";
import { initialAppState } from "./state";
import { appReducer } from "./reducers";

import StyleThemeProvider from "@/styles/StyleThemeProvider"

export default function ThemeProviderContext({ children }: PropsWithChildren) {
  const [app, dispatch] = useReducer(
    appReducer,
    initialAppState
  );

  const ctx: AppStateValue = {
    darkMode: app.darkMode,
    constants: {
      maxValue: app.constants.maxValue,
    },
    navbar: app.navbar,
    wallet: {
      sumSalary: app.wallet.sumSalary,
      sumBills: app.wallet.sumBills,
      restSalary: app.wallet.restSalary,
    },
    bills: app.bills,
    changeSalary(salary) {
      dispatch({ type: 'CHANGE_SALARY', salary: salary });
    },
    toggleMode() {
      dispatch({ type: 'TOGGLE_MODE' });
    }
  };

  return (
    <AppContext.Provider value={ctx}>
      <StyleThemeProvider>
        {children}
      </StyleThemeProvider>
    </AppContext.Provider >
  )
}