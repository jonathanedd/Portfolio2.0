import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "react-scroll";
import { IoIosMenu } from "react-icons/io";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, isDarkMode } = useTheme();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("click");
  };

  return (
    <NavContainer theme={theme} isDarkMode={isDarkMode}>
      <BurguerIcon>
        <IoIosMenu onClick={toggleMenu} />
      </BurguerIcon>

      <Menu showMenu={showMenu}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <NavNumber>01.</NavNumber>Home
        </Link>
        <Link
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <NavNumber>02.</NavNumber>About me
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <NavNumber>03.</NavNumber>Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <NavNumber>04.</NavNumber>Projects
        </Link>
        <Link
          activeClass="active"
          to="contactme"
          spy={true}
          smooth={true}
          offset={0}
          duration={900}
        >
          <NavNumber>05.</NavNumber>Contact me
        </Link>
      </Menu>
      <TopNumber>01</TopNumber>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;

const BurguerIcon = styled.div`
  display: none;
  @media all and (max-width: 480px) {
    font-size: 2.5rem;
    color: #750e21;
    padding: 15px;
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;
  list-style: none;
  align-items: center;
  margin: auto;
  cursor: pointer;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${(props) =>
      props.isDarkMode ? props.theme.navList : props.theme.navList};
    font-size: 0.9rem;
  }
  @media all and (max-width: 480px) {
    display: ${(props) => (props.showMenu ? "block" : "none")};
    background-color: ${(props) =>
      props.isDarkMode ? props.theme.body : props.theme.body};
    width: 80%;
    transition: 0.5s;
    animation: ${(props) => (props.showMenu ? "slideDown" : "slideUp")} 0.5s;
  }

  @keyframes slideDown {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideUp {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const NavNumber = styled.p`
  color: ${(props) =>
    props.isDarkMode ? props.theme.number : props.theme.number};
  font-weight: bold;
  font-size: 1rem;
`;

const TopNumber = styled.h1`
  color: ${(props) =>
    props.isDarkMode ? props.theme.number : props.theme.number};
  opacity: 50%;
  font-size: 2.5rem;
  @media all and (max-width: 480px) {
    position: absolute;
    right: 0%;
  }
`;
