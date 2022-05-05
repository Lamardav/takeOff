import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export const Layout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

const Main = styled.main`
  color: black;
  background: yellow;
  min-height: 100vh;
  min-width: 100vw;
`;
