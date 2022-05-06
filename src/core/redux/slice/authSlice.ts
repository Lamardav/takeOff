import { createSlice } from "@reduxjs/toolkit";
import { initialAuth } from "../../../modules/auth/initialValue/initialValueAuth";

const authSlice = createSlice({
  initialState: initialAuth,
  name: "auth",
  reducers: {
    reset: () => ({ ...initialAuth, mass: ["0", "1", "2", "3"] }),
    renew: (state) => ({ ...state }),
  },
});
export const { reset, renew } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
