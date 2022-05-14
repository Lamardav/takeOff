import { authRoutes } from "./path/authRoutes";
import { contactsRoutes } from "./path/listRoutes";
import { INavBar } from "../../api/dto/INavBar";

export const publicHeaderNav: INavBar[] = [
  {
    link: authRoutes.signin.link,
    label: "signin",
  },
  {
    link: authRoutes.signup.link,
    label: "signup",
  },
];

export const protectedHeaderNav: INavBar[] = [
  { link: contactsRoutes.contacts.link, label: "contacts" },
  {
    link: contactsRoutes.contactsAdd.link,
    label: "contactsAdd",
  },
];
