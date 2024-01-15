import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <span>
        <p>Phone:</p> +57 3172899381
        <p>Email:</p> jhoeduardonez@gmail.com
        <p>Location:</p> Bogotá DC, Colombia
      </span>
      <h1>Jhonatan Ordonez</h1>
      <h2>2024</h2>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.card : props.theme.card};

  span {
    color: ${(props) => props.theme.cream};
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;

    p {
      color: ${(props) => props.theme.red};
      padding-left: 15px;
      padding-right: 5px;
      text-align: left;
    }
  }

  h1 {
    display: flex;
    margin: auto;
    color: ${(props) => props.theme.cream};
    font-size: 1rem;
    border-top: 1px solid aliceblue;
    max-width: fit-content;
  }
  h2 {
    color: ${(props) => props.theme.cream};
    display: flex;
    justify-content: center;
    font-size: 1rem;
  }
`;
