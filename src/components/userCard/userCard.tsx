import React from "react";
import styled from "styled-components";
import { IContact } from "../../api/dto/IContact";
import { theme } from "../../assets/theme/theme";

export const UserCard = ({ id, name, phone, username }: IContact) => {
  return (
    <Content>
      <Id>ID № {id}</Id>
      <Name>Имя : {name}</Name>
      <UserName>Псевдоним: {username}</UserName>
      <Phone>Номер телефона: {phone}</Phone>
    </Content>
  );
};

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 1.4vw;
  border: 1px solid ${theme.colors.white};
  padding: 1vw;
`;

const Id = styled.div``;

const Name = styled.div`
  grid-column: span 2;
`;

const UserName = styled.div`
  grid-column: span 2;
`;

const Phone = styled.div`
  grid-column: span 5;
`;
