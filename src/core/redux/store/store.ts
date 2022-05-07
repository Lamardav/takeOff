import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "../slice/authSlice";
import { contactsSliceReducer } from "../slice/contactsSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    contacts: contactsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
