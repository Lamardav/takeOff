import React, { FC, Suspense } from "react";
import { MainRoutes } from "./core/routes/mainRoutes";
import { BrowserRouter } from "react-router-dom";
import { LoadingScreen } from "./components/emptyScreens/emptyScreen";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <MainRoutes />
      </Suspense>
    </BrowserRouter>
  );
};
