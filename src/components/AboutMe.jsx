import React from "react";
import styled, { useTheme } from "styled-components";

import aboutme from "../images/Image.jpg";

export default function AboutMe() {
  const { theme, isDarkMode } = useTheme();
  return (
    <AboutMeContainer theme={theme} isDarkMode={isDarkMode} id="aboutMe">
      <TopNumber>02</TopNumber>

      <AboutMeText>
        <span>
          <h1>Who I am</h1>
          Software Engineer and <strong>full-stack developer, </strong>
          specializing <br /> in
          <strong> Reac JS</strong> and <strong> Node JS.</strong> I can
          navigate databases Such <br /> SQL and NoSQL. I love reading and
          swimming too.
        </span>

        <PicFrame>
          <img width="300px" src={aboutme} alt="" />
        </PicFrame>
      </AboutMeText>
    </AboutMeContainer>
  );
}

// STYLES
const AboutMeContainer = styled.div`
  height: 100vh;
  @media all and (max-width: 480px) {
    text-align: center;
  }
`;

const TopNumber = styled.h1`
  /* background-color: bisque; */
  text-align: end;
  font-size: 2.5rem;
  opacity: 50%;
  color: ${(props) =>
    props.isDarkMode ? props.theme.number : props.theme.number};
`;

const AboutMeText = styled.div`
  /* background-color: #3618bd; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) =>
      props.isDarkMode ? props.theme.title : props.theme.title};
    flex-direction: column;
    margin: 10px;
    @media all and (max-width: 480px) {
      height: max-content;
      padding-bottom: 20px;
      width: 90%;
    }
    h1 {
      border-bottom: 3px solid #750e21;
      width: fit-content;
      color: ${(props) =>
        props.isDarkMode ? props.theme.title : props.theme.title};
      @media all and (max-width: 480px) {
        margin: auto;
      }
    }

    strong {
      color: ${(props) => props.theme.subTitle};
    }
  }
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const PicFrame = styled.div`
  /* background-color: #e90cc4; */
  position: relative;
  width: 300px;
  height: 375px;
  margin: 10px;
  /* left: 400px; */
  border: 15px solid
    ${(props) => (props.isDarkMode ? props.theme.frame : props.theme.frame)};
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);

  img {
    position: absolute;
    width: 300px;
    object-fit: cover;
    z-index: 1;
    top: 40px;
    right: -50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.945), 0 8px 16px rgba(0, 0, 0, 0.973),
      0 16px 32px rgba(0, 0, 0, 0.575);
    @media all and (max-width: 480px) {
      top: 0;
      right: 0;
    }
  }
`;
