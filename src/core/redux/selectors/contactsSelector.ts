import { RootState } from "../store/store";
import { createSelector } from "@reduxjs/toolkit";

const state = (state: RootState) => state.contacts;

export const contactsSelectors = {
  loading: ({ contacts }: RootState) => contacts.loading,
  contacts: createSelector(state, (par) => par.contacts),
  totalContacts: ({ contacts }: RootState) => contacts.totalContacts,
  pageSize: ({ contacts }: RootState) => contacts.pageSize,
  searchVal: ({ contacts }: RootState) => contacts.searchVal,
};
