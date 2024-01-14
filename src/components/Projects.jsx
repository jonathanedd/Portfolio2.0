import React from "react";
import styled from "styled-components";

import sigamacbook from "../images/iconwhite.png";
import calculator from "../images/calculator.png";
import marvelapi from "../images/marvelapi.png";
import rickandmorty from "../images/rickandmorty.png";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const openSiga = () => {
    window.open("https://sigaeducacion.netlify.app");
  };

  const openSigaGithub = () => {
    window.open("https://github.com/jonathanedd/S.I.G.A.git");
  };

  const openMarvel = () => {
    window.open("https://marvel-appi.netlify.app");
  };

  const openMarvelGithub = () => {
    window.open("https://github.com/jonathanedd/Marvel.git");
  };

  const openCalculator = () => {
    window.open("https://github.com/jonathanedd/calculator.git");
  };

  const openRickandmorty = () => {
    window.open("https://rickymorty-appi.netlify.app");
  };

  const openRickandmortyGit = () => {
    window.open("https://github.com/jonathanedd/rick-n-morty.git");
  };
  return (
    <ProjectsContainer id="projects">
      <TopNumber>04</TopNumber>

      <TitleProjects>
        {" "}
        <h1>Projects</h1>{" "}
      </TitleProjects>

      <CardsContainer>
        <Card>
          <img onClick={openSiga} src={sigamacbook} alt="" />
          <h3>SIGA</h3>
          <span>For education</span>
          <FaGithub onClick={openSigaGithub} />
        </Card>
        <Card>
          <img onClick={openMarvel} src={marvelapi} alt="" />
          <h3>Marvel</h3>
          <span>Marvel Api using React JS</span>
          <FaGithub onClick={openMarvelGithub} />
        </Card>
        <Card>
          <img src={calculator} alt="" />
          <h3>Calculator</h3>
          <span>Made with React Native</span>
          <FaGithub onClick={openCalculator} />
        </Card>
        <Card>
          <img onClick={openRickandmorty} src={rickandmorty} alt="" />
          <h3>Rick and Morty</h3>
          <span>Rick and Morty Api</span>
          <FaGithub onClick={openRickandmortyGit} />
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
  border-radius: 0.5rem;
  border: 1px solid #750e21;
  padding: 15px;
  margin: 15px;

  background-color: ${(props) =>
    props.isDarkMode ? props.theme.card : props.theme.card};

  img {
    cursor: pointer;
    width: 200px;
    height: 200px;
  }
  h3 {
    color: ${(props) =>
      props.isDarkMode ? props.theme.projectTitle : props.theme.projectTitle};
  }
  span {
    font-size: 0.8rem;
    color: ${(props) =>
      props.isDarkMode ? props.theme.projectDesc : props.theme.projectDesc};
  }
  svg {
    font-size: 1.2rem;
    padding-top: 1.2rem;
    cursor: pointer;
    color: aliceblue;
  }
`;
