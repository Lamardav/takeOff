import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseFetch } from "../../../api/baseFetch";

export const getContacts = createAsyncThunk("getpos/fetchGetTeamById", async function FetchGET(_, { rejectWithValue }) {
  try {
    return await baseFetch({
      url: "contacts",
      method: "GET",
    });
  } catch (err: any) {
    if (err.message) {
      return rejectWithValue(err.message);
    } else {
      return rejectWithValue(err);
    }
  }
});
