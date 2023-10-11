"use client"

import { useAppMode } from "@/lib/ThemeProviderContext/actions"
import { ThemeProvider } from "styled-components";

const StyleDarkMode = {
  backgroundColor: "#0f0e17",
  dropdownMenu: "#242629",
  dropdownMenuBorder: "#010101",
  elementBackgroundColor: "#242629",
  elementBorderColor: "#010101",
  color: "#a7a9be",
  colorRed: "#FF6969",
  colorIcon: "#fffffe",
  colorLink: "#fffffe",
  colorButton: "#fffffe",
  colorHeadline: "#fffffe",
  colorSubHeadline: "#94a1b2",
};

const StyleLightMode = {
  backgroundColor: "#fffffe",
  dropdownMenu: "#e3f6f5",
  dropdownMenuBorder: "#e1eeed",
  elementBackgroundColor: "#e3f6f5",
  elementBorderColor: "#e1eeed",
  color: "#2d334a",
  colorRed: "#FF6969",
  colorIcon: "#2d334a",
  colorLink: "#2d334a",
  colorButton: "#2d334a",
  colorHeadline: "#272343",
  colorSubHeadline: "#2d334a",
};

export default function StyleThemeProvider({ children }: any) {
  const UseAppNavbar = useAppMode();

  return (
    <ThemeProvider theme={
      UseAppNavbar ? StyleDarkMode : StyleLightMode
    }>
      {children}
    </ThemeProvider>
  )
}