import { IRoute } from "../../../api/dto/IRoute";
import React from "react";
import SignUp from "../../../pages/auth/signUp";

type IAuthRoutes = "signup" | "signin";

//НА SignUp suspense НЕ КИДАЛ ПОТОМУ ЧТО НЕ ВИДЕЛ СМЫСЛА, КАК И ВПРИНИЦИПЕ
// НА ВСЕМ ПРОЕКТЕ ЕГО ИСПОЛЬЗОВАТЬ
const SignIn = React.lazy(async () => import("../../../pages/auth/signIn"));

export const authRoutes: Record<IAuthRoutes, IRoute> = {
  signup: {
    component: SignUp,
    link: "/signup",
  },

  signin: {
    component: SignIn,
    link: "/signin",
  },
};
