import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from "../../../modules/contacts/initialValue/initialvalueContacts";
import { getContacts } from "../thunk/contactsThunk";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: { resetContacts: () => initialContacts },
  extraReducers: (builder) => {
    builder.addCase(getContacts.pending, (state, payload) => {
      state.contacts;
      state.loading = true;
    });
    builder.addCase(getContacts.fulfilled, (state, payload) => {
      state.contacts = payload.payload;
      state.loading = false;
    });
    builder.addCase(getContacts.rejected, (state, payload) => {
      state.loading = false;
      state.contacts = [];
    });
  },
});

export const { resetContacts } = contactsSlice.actions;
export const contactsSliceReducer = contactsSlice.reducer;
