import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

export default function Switch({ handleMode }) {
  const { theme, isDarkMode } = useTheme();
  const [isToggled, setIsToggled] = useState(isDarkMode);

  const onToggle = () => {
    setIsToggled(!isToggled);
    handleMode();
  };
  return (
    <SwitchContainer theme={theme} isDarkMode={isDarkMode}>
      <p>{isToggled ? "Dark mode" : "Light mode"}</p>
      <input type="checkbox" onChange={onToggle} />
    </SwitchContainer>
  );
}

const SwitchContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  margin: 10px;
  bottom: 0;
  left: 0;

  p {
    margin-right: 10px;
    color: ${(props) =>
      props.isDarkMode ? props.theme.text : props.theme.text};
    font-size: 0.8rem;
  }

  input {
    position: relative;
    width: 50px;
    height: 20px;
    appearance: none;
    background-color: ${(props) => props.theme.number};
    border-radius: 20px;
    outline: none;
    transition: background-color 0.3s;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      transition: transform 0.3s;
    }

    &:checked {
      background-color: ${(props) => props.theme.text};

      &:before {
        transform: translateX(30px);
      }
    }
  }
`;
