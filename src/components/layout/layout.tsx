import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  min-height: calc(100vh - 8vw);
  display: flex;
  flex-direction: column;
`;
