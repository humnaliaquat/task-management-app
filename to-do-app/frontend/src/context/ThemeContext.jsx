// ThemeContext.js
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const themes = {
  light: "theme-light",
  dark: "theme-dark",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = themes[theme];
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
