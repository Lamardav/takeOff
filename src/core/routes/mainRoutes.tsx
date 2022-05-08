import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { AppRoute } from "./appRoute";
import { authRoutes } from "./path/authRoutes";
import { contactsRoutes } from "./path/listRoutes";
import { Layout } from "../../components/layout/layout";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<AppRoute protect />}>
          <Route index element={<Navigate replace to={contactsRoutes.contacts.link} />} />
          <Route path={contactsRoutes.contacts.link} element={<contactsRoutes.contacts.component />} />
          <Route path={contactsRoutes.contactsAdd.link} element={<contactsRoutes.contactsAdd.component />} />
        </Route>
        <Route path={"/"} element={<AppRoute />}>
          <Route path={authRoutes.signin.link} element={<authRoutes.signin.component />} />
          <Route path={authRoutes.signup.link} element={<authRoutes.signup.component />} />
        </Route>
        <Route path={"*"} element={<div>Ничего не найдено</div>} />
      </Route>
    </Routes>
  );
};
