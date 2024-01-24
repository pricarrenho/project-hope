import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContextType, GlobalProviderProps } from "./types";
import { useWindowResize } from "../hooks/useWindowResize";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [debouncedMenuState, setDebouncedMenuState] = useState(0);
  const { windowSize } = useWindowResize();

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
      value={{
        isMenuOpen,
        handleMenuIsOpen,
        debouncedMenuState: debouncedMenuState + windowSize,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
