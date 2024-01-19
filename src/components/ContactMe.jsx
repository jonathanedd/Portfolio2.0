import React from "react";
import styled from "styled-components";

export default function ContactMe() {
  return (
    <ContactContainer id="contactme">
      <TopNumber>05</TopNumber>

      <TitleContact>
        <h1>Contact Me</h1>
      </TitleContact>

      <InfoContainer>
        <FormContainer action="">
          <label htmlFor="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="in maintenance"
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="in maintenance"
            />
          </label>

          <label htmlFor="">
            <input
              type="text"
              name="subject"
              id="subject"
              // placeholder="Subject"
              placeholder="in maintenance"
            />
          </label>

          <label htmlFor="">
            <Message>
              <input
                type="text"
                name="message"
                id="message"
                // placeholder="Message"
                placeholder="in maintenance"
              />
            </Message>
          </label>
        </FormContainer>
      </InfoContainer>
      <SubmitButton>
        <button>Submit</button>
      </SubmitButton>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopNumber = styled.h1`
  width: 100%;
  text-align: end;
  font-size: 2.5rem;
  opacity: 50%;
  color: ${(props) =>
    props.isDarkMode ? props.theme.number : props.theme.number};
`;

const TitleContact = styled.div`
  display: flex;
  /* width: 840px; */
  align-items: center;
  color: ${(props) =>
    props.isDarkMode ? props.theme.title : props.theme.title};
  h1 {
    border-bottom: 3px solid #750e21;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  @media all and (max-width: 480px) {
    width: 90%;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  input {
    overflow-wrap: break-word;
    border-left: none;
    border-top: none;
    border-right: none;
    border-bottom: 2px solid #750e21;
    width: 100%;
    height: 40px;
    background-color: transparent;
    color: ${(props) =>
      props.isDarkMode ? props.theme.text : props.theme.text};
  }
`;

const Message = styled.div`
  input {
    padding-bottom: 50px;
    overflow: hidden;
  }
`;

const SubmitButton = styled.div`
  display: flex;

  margin-top: 50px;

  button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #dbe4c6;
    background-color: ${(props) =>
      props.isDarkMode ? props.theme.button : props.theme.button};
  }
`;
