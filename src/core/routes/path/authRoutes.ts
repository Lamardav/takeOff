import { IRoute } from "../../../api/dto/IRoute";
import React from "react";

type IAuthRoutes = "signup" | "signin";

const SignIn = React.lazy(async () => import("../../../pages/auth/signIn"));

export const authRoutes: Record<IAuthRoutes, IRoute> = {
  signup: {
    component: SignIn,
    link: "/signup",
  },

  signin: {
    component: SignIn,
    link: "/signin",
  },
};
