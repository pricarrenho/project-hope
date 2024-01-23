import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContextType, GlobalProviderProps } from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [debouncedMenuState, setDebouncedMenuState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDebouncedMenuState((value) => value + 1);
    }, 300);
  }, [isMenuOpen]);

  const handleMenuIsOpen = (value: boolean) => {
    setIsMenuOpen(value);
  };

  return (
    <GlobalContext.Provider
      value={{ isMenuOpen, handleMenuIsOpen, debouncedMenuState }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
