import React, { useCallback } from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { useNavigate } from "react-router";
import { NavMenu } from "../navMenu/navMenu";
import { protectedHeaderNav, publicHeaderNav } from "../../core/routes/links";
import { useAppDispatch, useAppSelector } from "../../core/redux/store/store";
import { authSelectors } from "../../core/redux/selectors/authSelector";
import { setAuthFalse } from "../../core/redux/slice/authSlice";
import { LanguageChanger } from "../languageChanger/languageChanger";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isAuth = useAppSelector(authSelectors.isAuth);

  const ExitFunc = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    dispatch(setAuthFalse());
  }, [dispatch]);

  return (
    <Content>
      <Logo onClick={() => history("/")}>
        <Img alt={"Futurama"} src={"/mockImage/header/futur.png"} />
        <P>{t("main")}</P>
      </Logo>
      <RightArea>
        <NavMenu navList={isAuth ? protectedHeaderNav : publicHeaderNav} />
        <LanguageChanger />

        {isAuth && <Exit onClick={ExitFunc} src={"/mockImage/header/escape.svg"} alt={"exit"} />}
      </RightArea>
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

const Exit = styled.img`
  cursor: pointer;
`;

const RightArea = styled.div`
  display: flex;
  align-self: center;
  grid-column-gap: 4vw;
  align-items: center;
`;
