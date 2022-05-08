import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsFetch } from "../../../api/fetches/contacts/contactsFetches";

export const contactsDispatches = {
  getContacts: createAsyncThunk("getContacts", getContactsFetch),
};
