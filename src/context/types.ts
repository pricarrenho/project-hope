import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  isMenuOpen: boolean;
  handleMenuIsOpen: (value: boolean) => void;
  debouncedMenuState: number;
};
