import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function UpBack() {
  return (
    <UpBackContainer>
      <IoIosArrowRoundBack />
      <IoIosArrowRoundForward />
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
