import { IRoute } from "../../../api/dto/IRoute";
import React from "react";

type IContactsRoutes = "contacts" | "contactsAdd";

const Contacts = React.lazy(async () => import("../../../pages/contacts/contacts"));

export const contactsRoutes: Record<IContactsRoutes, IRoute> = {
  contacts: {
    component: Contacts,
    link: "/contacts",
  },

  contactsAdd: {
    component: Contacts,
    link: "/contacts/add",
  },
};
