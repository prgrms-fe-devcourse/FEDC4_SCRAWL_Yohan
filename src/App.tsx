import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      <Global styles={getGlobalStyles(theme)} />
      <RootErrorBoundary>
        <AuthErrorBoundary>
          <Suspense fallback={null}>
            <ScrollToTop />
            <AppRouter />
          </Suspense>
        </AuthErrorBoundary>
      </RootErrorBoundary>
      <Toaster />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
