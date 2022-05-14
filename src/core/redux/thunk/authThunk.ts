import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInFetch } from "../../../api/fetches/auth/signInFetches";
import { signUpFetch } from "../../../api/fetches/auth/signUpFetches";

export const authDispatches = {
  logIn: createAsyncThunk("logIn", signInFetch),
  signUp: createAsyncThunk("signUp", signUpFetch),
};
