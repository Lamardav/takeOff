import React from "react";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { INavBar } from "../../api/dto/INavBar";
import { useTranslation } from "react-i18next";

interface IProps {
  navList: INavBar[];
}

export const NavMenu = (props: IProps) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Nav>
      {props.navList.map((elem, index) => (
        <CustomLink to={elem.link} key={index + index} active={`${pathname.includes(elem.link)}`}>
          {t(`${elem.label}`)}
        </CustomLink>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  height: 100%;
`;

export const CustomLink = styled(Link)<{ active: "true" | "false" }>`
  font-family: FCSM-Normal, sans-serif;
  width: max-content;
  font-size: 0.73vw;
  font-weight: 500;
  text-transform: uppercase;
  color: ${theme.colors.white};
  padding: 0.83vw 1.67vw;
  box-shadow: ${({ active }) => (active === "true" ? "inset 0 -0.21vw 0 " + theme.colors.red : "")};
  text-decoration: none;
  &:hover {
    box-shadow: inset 0 -0.21vw 0px ${theme.colors.red};
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    white-space: nowrap;
    padding: 2.09vw 4.17vw;
    font-size: 1.83vw;
    justify-content: space-between;
    box-shadow: ${({ active }) => (active === "true" ? "inset 0 -0.52vw 0" + theme.colors.red : "")};

    &:hover {
      box-shadow: inset 0 -0.52vw 0 ${theme.colors.red};
    }
  }

  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    padding: 3.2vw 3.2vw;
    font-size: 3.2vw;
    box-shadow: ${({ active }) => (active === "true" ? "inset 0 -1.07vw 0" + theme.colors.red : "")};

    &:hover {
      box-shadow: inset 0 -1.07vw 0 ${theme.colors.red};
    }
  }
`;
