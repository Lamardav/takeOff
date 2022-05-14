import { createSlice } from "@reduxjs/toolkit";
import { initialAuth } from "../../../modules/auth/initialValue/initialValueAuth";
import { authDispatches } from "../thunk/authThunk";

const authSlice = createSlice({
  initialState: initialAuth,
  name: "auth",
  reducers: {
    setAuthFalse: () => ({ ...initialAuth, isAuth: false }),
    setAuthTrue: () => ({ ...initialAuth, isAuth: true }),
  },
  extraReducers: (builder) => {
    builder.addCase(authDispatches.logIn.pending, (state) => {
      state.loading = true;
      state.isAuth;
    });
    builder.addCase(authDispatches.logIn.fulfilled, (state, payload) => {
      localStorage.setItem("accessToken", payload.payload.accessToken);
      state.loading = false;
      state.isAuth = true;
    });
    builder.addCase(authDispatches.logIn.rejected, (state) => {
      state.loading = false;
      state.isAuth = false;
    });
    builder.addCase(authDispatches.signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authDispatches.signUp.fulfilled, (state, payload) => {
      localStorage.setItem("accessToken", payload.payload.accessToken);
      state.loading = false;
      state.isAuth = true;
    });
    builder.addCase(authDispatches.signUp.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setAuthFalse, setAuthTrue } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
