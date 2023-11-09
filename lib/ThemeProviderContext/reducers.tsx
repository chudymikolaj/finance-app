import { createContext } from "react";
import { type AppState, type LinkWithIcon } from "./ThemeProviderContext.types";

type ToggleMode = {
  type: 'TOGGLE_MODE';
};

type AddBill = {
  type: 'ADD_BILL';
} & LinkWithIcon;

type ChangeSalary = {
  type: 'CHANGE_SALARY';
  salary: number;
};

type Action = ToggleMode | AddBill | ChangeSalary | {
  type: 'string';
};

export function appReducer(state: AppState, action: Action) {
  if (action.type === "TOGGLE_MODE") {
    return {
      ...state,
      darkMode: !state.darkMode
    }
  }
  if (action.type === "ADD_BILL") {
    const links = {
      id: action.id,
      name: action.name,
      link: action.link,
      icon: action.icon
    };

    const updateNavbar = state.navbar.map((row: any, index: any) => {
      if (row.name === "menu") {
        return {
          ...row,
          profiles: [
            ...row.profiles, links
          ]
        }
      }

      return row;
    })

    return {
      ...state,
      navbar: updateNavbar
    }
  }
  if (action.type === "CHANGE_SALARY") {
    return {
      ...state,
      wallet: {
        ...state.wallet,
        sumSalary: action.salary,
        restSalary: action.salary - state.wallet.sumBills,
      }
    }
  }

  return state;
}

export const AppDispatchContext = createContext(appReducer);