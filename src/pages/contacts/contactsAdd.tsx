import React from "react";
import { ContactsAddForm } from "../../componentsPage/pageContactsAdd/contactsAddForm";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

const ContactsAdd = () => {
  return (
    <Container>
      <Title>Добавить пользователя</Title>
      <ContactsAddForm />
    </Container>
  );
};

export default ContactsAdd;

const Container = styled.div`
  width: 82.5vw;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: 92.5vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: 91.2vw;
  }
`;

const Title = styled.h3`
  font-size: 2vw;
  font-weight: 700;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 4vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 7vw;
  }
`;
