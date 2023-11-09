import { createContext } from "react";
import { type AppStateValue } from "./ThemeProviderContext.types";

export const AppContext = createContext<AppStateValue | null>(null);