import { useContext } from "react"
import { AppContext } from "./state";
import { AppDispatchContext } from "./reducers";

export function useAppNavbar() {
  const navbarContextApp = useContext(AppContext);
  if (navbarContextApp === undefined) {
    throw new Error("useAppNavbar context must be used within a Provider")
  }

  return navbarContextApp.navbar;
}

export function useAppMode() {
  const navbarContextApp = useContext(AppContext);
  if (navbarContextApp === undefined) {
    throw new Error("useAppMode context must be used within a Provider")
  }

  return navbarContextApp.darkMode;
}

export function useAppDispatch() {
  const appDispatch = useContext(AppDispatchContext);
  if (appDispatch === undefined) {
    throw new Error("useAppDispatch context dispach must be used within a Provider")
  }

  return appDispatch;
}