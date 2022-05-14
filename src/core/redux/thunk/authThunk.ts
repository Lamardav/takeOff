import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInFetch } from "../../../api/fetches/auth/signInFetches";

export const authDispatches = {
  logIn: createAsyncThunk("logIn", signInFetch),
};
