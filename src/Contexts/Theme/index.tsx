import React, { createContext } from "react";
import { light } from "./../../Styles/theme/light";
import { DefaultTheme } from "styled-components";
import { dark } from "./../../Styles/theme/dark";
import usePersistedState from "../../Hooks/usePersistedState";
import { ThemeTypes } from "../../Types/ThemeType";

interface Props {
  children: React.ReactNode;
}

export const GetThemeContext = createContext({} as ThemeTypes);

const GetThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);

  return (
    <GetThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </GetThemeContext.Provider>
  );
};

export default GetThemeProvider;
