import React, { FC, Suspense } from "react";
import { store } from "./core/redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LoadingScreen } from "./components/emptyScreens/emptyScreen";
import { MainRoutes } from "./core/routes/mainRoutes";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <MainRoutes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};
