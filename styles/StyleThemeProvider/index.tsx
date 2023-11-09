"use client"

import { ReactNode } from "react";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { ThemeProvider } from "styled-components";
import { STYLE_DARK_MODE, STYLE_LIGHT_MODE } from "@/styles/constants";

export default function StyleThemeProvider({ children }: { children: ReactNode }) {
  const { darkMode } = useAppContext();

  return (
    <ThemeProvider theme={
      darkMode ? STYLE_DARK_MODE : STYLE_LIGHT_MODE
    }>
      {children}
    </ThemeProvider>
  )
}