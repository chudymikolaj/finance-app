import { type initialAppState as AppState } from "./ThemeProviderContext.types";

export const initialAppState: AppState = {
  darkMode: true,
  constants: {
    maxValue: 1000000,
  },
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
  ],
  wallet: {
    sumSalary: 0,
    sumBills: 0,
    restSalary: 0,
  },
  bills: [
    {
      id: 0, name: "Rachunek za prąd", value: 1400,
    },
    {
      id: 1, name: "Rachunek za ubezpieczenie", value: 500,
    },
    {
      id: 2, name: "Rachunek za telefon", value: 125,
    },
  ]
};