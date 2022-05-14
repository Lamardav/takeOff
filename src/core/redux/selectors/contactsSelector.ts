import { RootState } from "../store/store";
import { createSelector } from "@reduxjs/toolkit";

const state = (state: RootState) => state.contacts;

export const contactsSelectors = {
  // loading: ({ auth }: RootState) => auth.isAuth,
  contacts: createSelector(state, (par) => par.contacts),
};
