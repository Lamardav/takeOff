import React, { FC, memo } from "react";
import { Navigate, RouteProps } from "react-router";
import { authRoutes } from "./path/authRoutes";
import { Outlet } from "react-router-dom";
import { contactsRoutes } from "./path/listRoutes";

interface IProps extends RouteProps {
  protect?: boolean;
}
export const AppRoute: FC<IProps> = memo(({ protect }) => {
  const isAuth = false;
  const isLoading = false;

  if (protect && !isAuth) {
    if (!isLoading) {
      return <Navigate replace to={authRoutes.signin.link} />;
    }

    return null;
  }
  if (!protect && isAuth) {
    if (!isLoading) {
      return <Navigate replace to={contactsRoutes.contacts.link} />;
    }

    return null;
  } else {
    return <Outlet />;
  }
});
