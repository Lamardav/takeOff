import React, { FC, Suspense } from "react";
import { MainRoutes } from "./core/routes/mainRoutes";
import { BrowserRouter } from "react-router-dom";
import { LoadingScreen } from "./components/emptyScreens/emptyScreen";
import { Provider } from "react-redux";
import { store } from "./core/redux/store/store";

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
