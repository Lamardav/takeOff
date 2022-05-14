import { RootState } from "../store/store";

export const authSelectors = {
  loading: ({ auth }: RootState) => auth.loading,
  isAuth: ({ auth }: RootState) => auth.isAuth,
};
