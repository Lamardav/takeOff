import { authRoutes } from "./path/authRoutes";
import { contactsRoutes } from "./path/listRoutes";

export const links = {
  auth: Object.keys(authRoutes).map((key) => authRoutes[key as keyof typeof authRoutes].link),
  contacts: Object.keys(contactsRoutes).map((key) => contactsRoutes[key as keyof typeof contactsRoutes].link),
};
