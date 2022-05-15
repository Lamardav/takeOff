import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from "../../../modules/contacts/initialValue/initialvalueContacts";
import { contactsDispatches } from "../thunk/contactsThunk";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: { resetContacts: () => initialContacts },
  extraReducers: (builder) => {
    builder.addCase(contactsDispatches.getContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(contactsDispatches.getContacts.fulfilled, (state, payload) => {
      state.contacts = payload.payload;
      state.loading = false;
    });
    builder.addCase(contactsDispatches.getContacts.rejected, (state) => {
      state.loading = false;
      state.contacts = [];
    });
    builder.addCase(contactsDispatches.getAllContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(contactsDispatches.getAllContacts.fulfilled, (state, payload) => {
      state.loading = false;
      state.totalContacts = payload.payload.length;
    });
    builder.addCase(contactsDispatches.getAllContacts.rejected, (state) => {
      state.loading = false;
      state.totalContacts = 0;
    });
    builder.addCase(contactsDispatches.deleteContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(contactsDispatches.deleteContact.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(contactsDispatches.deleteContact.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(contactsDispatches.updateContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(contactsDispatches.updateContact.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(contactsDispatches.updateContact.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { resetContacts } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
