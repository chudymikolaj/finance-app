import { createContext } from "react"

export const initialAppState = {
  darkMode: true,
  navbar: [
    { id: 0, name: "notifications", link: "/notifications", icon: '/notifications.svg' },
    {
      id: 1,
      name: "menu",
      active: "Nazwa konta 1",
      profiles: [
        { id: 0, name: "Nazwa konta", link: "/dashboard", icon: '/wallet.svg' },
        { id: 1, name: "Nazwa ", link: "/dashboard", icon: '/wallet.svg' },
        { id: 2, name: "Nazwa ", link: "/dashboard", icon: '/wallet.svg' }
      ],
      others: [
        { id: 0, name: "Kalkulatory", link: "/kalkulatory", icon: '/settings.svg' },
        { id: 1, name: "Ustawienia", link: "/ustawienia", icon: '/settings.svg' },
        { id: 2, name: "Wyloguj", link: "#", icon: '/logout.svg' },
      ]
    },
  ]
};

export const AppContext = createContext(initialAppState);