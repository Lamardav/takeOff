import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return <Content>{t("test")}</Content>;
};

const Content = styled.footer`
  color: ${theme.colors.white};
  min-height: 20vh;
  background: ${theme.colors.blackLight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    min-height: auto;
    padding: 18vw 0;
    font-size: 2vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    padding: 22vw 0;
    font-size: 4vw;
  }
`;
