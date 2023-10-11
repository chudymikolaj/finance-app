import { createContext } from "react"

export function appReducer(app: any, action: any) {
  switch (action.type) {
    case "toggle_mode": {
      return {
        ...app,
        darkMode: !app.darkMode
      }
    }
    case "added_link": {
      const links = {
        id: action.id,
        name: action.name,
        link: action.link,
        icon: action.icon
      };

      const updateNavbar = app.navbar.map((row: any, index: any) => {
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
        ...app,
        navbar: updateNavbar
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const AppDispatchContext = createContext(appReducer);