import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useAppDispatch } from "../../core/redux/store/store";
import { setAuthFalse, setAuthTrue } from "../../core/redux/slice/authSlice";

export const Layout: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch((localStorage.getItem("accessToken") !== null ? setAuthTrue : setAuthFalse)());
  }, []);

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
  height: fit-content;
  padding: 5vw 0;
`;
