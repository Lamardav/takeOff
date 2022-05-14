import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { useNavigate } from "react-router";
import { NavMenu } from "../navMenu/navMenu";
import { protectedHeaderNav, publicHeaderNav } from "../../core/routes/links";

export const Header = () => {
  const history = useNavigate();
  const isAuth = false;

  return (
    <Content>
      <Logo onClick={() => history("/")}>
        <Img alt={"Futurama"} src={"/mockImage/header/futur.png"} />
        <P>Главная</P>
      </Logo>
      <NavMenu navList={isAuth ? protectedHeaderNav : publicHeaderNav} />
    </Content>
  );
};

const Content = styled.header`
  min-height: 6vw;
  padding: 0 1vw;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  border: 1px solid ${theme.colors.grayDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: 0 2vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    padding: 0 3vw;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 0.72vw;
  cursor: pointer;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    grid-column-gap: 1.72vw;
  }
`;

const Img = styled.img`
  width: 3.5vw;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    display: none;
  }
`;

const P = styled.p`
  margin: 0;
  font-size: 1.34vw;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: 2.4vw;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    font-size: 3.2vw;
    text-transform: uppercase;
  }
`;
