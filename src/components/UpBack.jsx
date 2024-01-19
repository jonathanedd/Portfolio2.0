import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function UpBack() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToNextSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPreviousSection = () => {
    // Implementar la lógica para retroceder a la sección anterior si es necesario
  };

  return (
    <UpBackContainer>
      <IoIosArrowRoundBack
        onClick={handleScrollToPreviousSection}
        style={{ opacity: scrollPosition === 0 ? 0 : 1 }}
      />
      <IoIosArrowRoundForward
        onClick={handleScrollToNextSection}
        style={{ opacity: scrollPosition === 0 ? 0 : 1 }}
      />
    </UpBackContainer>
  );
}

const UpBackContainer = styled.div`
  position: fixed;
  display: flex;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  margin: 10px;
  bottom: 0;
  right: 0;
  font-size: 3rem;
  color: ${(props) => (props.isDarkMode ? props.theme.text : props.theme.text)};
`;
