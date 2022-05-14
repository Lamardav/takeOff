import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";

export const Footer = () => {
  return <Content>Тестовое задание</Content>;
};

const Content = styled.footer`
  color: ${theme.colors.white};
  min-height: 5vh;
  background: ${theme.colors.blackLight};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    min-height: auto;
    padding: 4vw 0;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    padding: 7vw 0;
  }
`;
