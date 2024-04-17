"use theme";

import { createContext, ReactNode, useContext } from "react";

type Theme = {
  primary: string;
  secondary: string;
};

const defaultTheme: Theme = {
  primary: "red",
  secondary: "blue",
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
