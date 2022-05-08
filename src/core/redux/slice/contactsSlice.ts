import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from "../../../modules/contacts/initialValue/initialvalueContacts";
import { contactsDispatches } from "../thunk/contactsThunk";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: { resetContacts: () => initialContacts },
  extraReducers: (builder) => {
    builder.addCase(contactsDispatches.getContacts.pending, (state) => {
      state.contacts;
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
  },
});

export const { resetContacts } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
