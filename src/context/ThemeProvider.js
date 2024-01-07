import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: { body: "#fff", text: "#000" }, // Provide a default light theme
  toggleDarkMode: () => {}, // Provide an empty toggle function for safety
});

const darkTheme = {
  body: "#191919",
  cream: "#DBE4C6",
  red: "#750E21",
};

const lightTheme = {
  body: "#fff",
  text: "#000",
};

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false); // Initialize with light theme

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
