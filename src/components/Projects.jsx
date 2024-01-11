import React from "react";
import styled from "styled-components";

import reactchat from "../images/reactchat.png";
import marvelapi from "../images/marvelapi.jpg";

export default function Projects() {
  // const { theme, isDarkMode } = useTheme();
  return (
    <ProjectsContainer id="projects">
      <TopNumber>03</TopNumber>

      <TitleProjects>
        {" "}
        <h1>Projects</h1>{" "}
      </TitleProjects>

      <CardsContainer>
        <Card>
          <img src={reactchat} alt="" />
          <h3>Real-Time-Chat</h3>
          <span>MongoDB Node Express React</span>
        </Card>
        <Card>
          <img src={marvelapi} alt="" />
          <h3>Tasks-Mobile-App</h3>
          <span>
            PostgreSQL Express <br /> React Native Node
          </span>
        </Card>
        <Card>
          <img src={reactchat} alt="" />
          <h3>Calculator</h3>
          <span>React Native Calculator</span>
        </Card>
        <Card>
          <img src={marvelapi} alt="" />
          <h3>Marvel API</h3>
          <span>Marvel API with React JS</span>
        </Card>
      </CardsContainer>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media all and (max-width: 480px) {
    height: max-content;
  }
`;

const TopNumber = styled.h1`
  width: 100%;
  text-align: end;
  font-size: 2.5rem;
  opacity: 50%;
  color: ${(props) =>
    props.isDarkMode ? props.theme.number : props.theme.number};
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
`;

const TitleProjects = styled.div`
  display: flex;

  /* width: 820px; */
  /* align-items: center; */
  color: ${(props) =>
    props.isDarkMode ? props.theme.title : props.theme.icon};
  h1 {
    border-bottom: 3px solid #750e21;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  img {
    width: 200px;
    height: 200px;
    border: 1px solid #750e21;
    margin-left: 10px;
    object-fit: cover;
  }
  h3 {
    margin-left: 10px;
    color: ${(props) =>
      props.isDarkMode ? props.theme.projectTitle : props.theme.projectTitle};
  }
  span {
    margin-left: 10px;
    font-size: 0.8rem;
    color: ${(props) =>
      props.isDarkMode ? props.theme.projectDesc : props.theme.projectDesc};
  }
`;
