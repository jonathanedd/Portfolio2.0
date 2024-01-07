import React from "react";
import homepic from "../images/homepic.JPEG";
import styled, { useTheme } from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const { theme, isDarkMode } = useTheme();

  const openGitHub = () => {
    window.open("https://github.com/jonathanedd");
  };
  return (
    <HomeContainer theme={theme} isDarkMode={isDarkMode} id="home">
      <IconContainer theme={theme} isDarkMode={isDarkMode}>
        <FaGithub onClick={openGitHub} />
        <FaLinkedin />
      </IconContainer>

      <img src={homepic} alt="" />
      <h1>Hi!,  I'm Jhonny</h1>
      <h3>Welcome to my Site!</h3>
    </HomeContainer>
  );
}

// STYLES
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 10px 5px rgba(10, 9, 9, 0.986);
  }
  h1 {
    color: ${(props) =>
      props.isDarkMode ? props.theme.title : props.theme.title};
  }
  h3 {
    color: ${(props) =>
      props.isDarkMode ? props.theme.subTitle : props.theme.subTitle};
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 0 0 10px rgba(121, 34, 8, 0.767);
  }
`;

const IconContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 40%;
  margin: 10px;
  color: ${(props) => (props.isDarkMode ? props.theme.icon : props.theme.icon)};
  svg {
    font-size: 1.5rem;
    padding: 0.5rem;
    cursor: pointer;
  }
`;
