import { createSlice } from "@reduxjs/toolkit";
import { initialAuth } from "../../../modules/auth/initialValue/initialValueAuth";
import { authDispatches } from "../thunk/authThunk";

const authSlice = createSlice({
  initialState: initialAuth,
  name: "auth",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authDispatches.logIn.pending, (state) => {
      state.loading = true;
      state.accessToken = null;
    });
    builder.addCase(authDispatches.logIn.fulfilled, (state, payload) => {
      state.loading = false;
      state.accessToken = payload.payload.accessToken;
    });
    builder.addCase(authDispatches.logIn.rejected, (state) => {
      state.loading = false;
      state.accessToken = null;
    });
  },
});
export const authSliceReducer = authSlice.reducer;
