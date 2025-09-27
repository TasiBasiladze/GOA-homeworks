import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ContextProvider;