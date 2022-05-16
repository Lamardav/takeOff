import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContactFetch,
  deleteContactFetch,
  getAllContactsFetch,
  getContactsFetch,
  updateContactFetch,
} from "../../../api/fetches/contacts/contactsFetches";

export const contactsDispatches = {
  getContacts: createAsyncThunk("getContacts", getContactsFetch),
  getAllContacts: createAsyncThunk("getAllContacts", getAllContactsFetch),
  deleteContact: createAsyncThunk("deleteContact", deleteContactFetch),
  updateContact: createAsyncThunk("updateContact", updateContactFetch),
  addContact: createAsyncThunk("addContact", addContactFetch),
};
