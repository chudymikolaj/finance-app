export type Mode = {
  darkMode: boolean;
}

export type Constants = {
  constants: {
    maxValue: 1000000;
  }
}

export type LinkWithIcon = {
  id: number;
  name: string;
  link: string;
  icon: string;
}

export type NavbarLink = LinkWithIcon | {
  active?: string;
  profiles?: LinkWithIcon[];
  others?: LinkWithIcon[];
}

export type NavbarLinkState = LinkWithIcon & {
  active?: string;
  profiles?: LinkWithIcon[];
  others?: LinkWithIcon[];
}

export type Navbar = {
  navbar: NavbarLinkState[];
};

export type initialNavbar = {
  navbar: NavbarLink[];
};

export type Wallet = {
  wallet: {
    sumSalary: number;
    sumBills: number;
    restSalary: number;
  }
}

export type Bill = {
  id: number;
  name: string;
  value: number;
}

export type Bills = {
  bills: Bill[]
}

export type AppState = Mode & Constants & Navbar & Wallet & Bills;

export type initialAppState = Mode & Constants & initialNavbar & Wallet & Bills;

export type AppStateValue = Mode & Constants & Navbar & Wallet & Bills & {
  changeSalary: (salary: number) => void;
  toggleMode: () => void;
};