"use client"

import { type PropsWithChildren, useReducer } from "react"
import { initialAppState, AppContext } from "./state";
import { appReducer, AppDispatchContext } from "./reducers";
import StyleThemeProvider from "@/styles/StyleThemeProvider"

export default function ThemeProviderContext({ children }: PropsWithChildren) {
  const [app, dispatch] = useReducer(
    appReducer,
    initialAppState
  );

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={dispatch}>
        <StyleThemeProvider>
          {children}
        </StyleThemeProvider>
      </AppDispatchContext.Provider>
    </AppContext.Provider >
  )
}