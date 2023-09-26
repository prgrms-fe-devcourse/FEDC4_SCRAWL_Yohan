import { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import { Global } from "@emotion/react";

import Toaster from "@components/Toaster";
import AuthErrorBoundary from "@components/_errorBoundaries/AuthErrorBoundary";
import RootErrorBoundary from "@components/_errorBoundaries/RootErrorBoundary";

import { getGlobalStyles } from "@styles/globalStyles";

import { useThemeStore } from "@stores/theme.store";

import AppRouter from "./router";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <Helmet key={location.pathname}>
        <title>괴발개발</title>
      </Helmet>
      <Global styles={getGlobalStyles(theme)} />
      <RootErrorBoundary>
        <AuthErrorBoundary>
          <Suspense fallback={null}>
            <AppRouter />
          </Suspense>
        </AuthErrorBoundary>
      </RootErrorBoundary>
      <Toaster />
    </>
  );
}
export default App;
