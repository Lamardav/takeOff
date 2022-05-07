import { createSlice } from "@reduxjs/toolkit";
import { initialAuth } from "../../../modules/auth/initialValue/initialValueAuth";

const authSlice = createSlice({
  initialState: initialAuth,
  name: "auth",
  reducers: {},
});
export const authSliceReducer = authSlice.reducer;
