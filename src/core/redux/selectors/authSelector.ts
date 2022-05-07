import { RootState } from "../store/store";

export const authSelectors = {
  isAuth: ({ auth }: RootState) => auth.isAuth,
};
