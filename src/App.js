import React, { useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

import styled, { ThemeProvider } from "styled-components";
import Switch from "./components/Switch";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import UpBack from "./components/UpBack";

function App() {
  const [isDarkMode, setIsLightMode] = useState(true);

  const handleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <Nav isLightMode={isDarkMode} />
        <Home isDarkMode={isDarkMode} />
        <AboutMe isDarkMode={isDarkMode} />
        <Projects />
        <ContactMe />
        <Switch handleMode={handleMode} isDarkMode={isDarkMode} />
        <UpBack />
      </AppContainer>
    </ThemeProvider>
  );
}

const darkTheme = {
  body: "#191919", // darkgrey
  frame: "#750E21", // red
  number: "#750E21", //red
  text: "#DBE4C6", // little text Cream
  title: "#DBE4C6", // big titles cream
  subTitle: "#750E21", // small titles red
  icon: "#DBE4C6", // cream
  button: "#750E21", // red
  navList: "#DBE4C6", // Cream
  projectDesc: "#DBE4C6", // Cream
  projectTitle: "#750E21", // Red
};

const lightTheme = {
  body: "#E3DFFD", // lightgrey
  frame: "#000", // black
  number: "#000", //black
  text: "#000", // black
  title: "#000", // black
  subTitle: "#750E21", //red
  icon: "#000", // black
  button: "#000", // black
  navList: "#750E21", // Red
  projectDesc: "#750E21", // Red
  projectTitle: "#000", // Red
};

const AppContainer = styled.div`
  height: max-content;
  transition: all 0.5s ease;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.body : props.theme.body};
`;

export default App;
