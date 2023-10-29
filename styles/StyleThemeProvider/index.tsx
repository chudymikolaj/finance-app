"use client"

import { useAppMode } from "@/lib/ThemeProviderContext/actions"
import { ThemeProvider } from "styled-components";
import { STYLE_DARK_MODE, STYLE_LIGHT_MODE } from "@/styles/constants"

export default function StyleThemeProvider({ children }: any) {
  const isUseAppNavbar = useAppMode();

  return (
    <ThemeProvider theme={
      isUseAppNavbar ? STYLE_DARK_MODE : STYLE_LIGHT_MODE
    }>
      {children}
    </ThemeProvider>
  )
}