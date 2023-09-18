import { Suspense } from "react";

import { Global } from "@emotion/react";

import Toaster from "@components/Toaster";
import AuthErrorBoundary from "@components/_errorBoundaries/AuthErrorBoundary";

import { getGlobalStyles } from "@styles/globalStyles";

import { useThemeStore } from "@stores/theme.store";

import AppRouter from "./router";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <Global styles={getGlobalStyles(theme)} />
      <AuthErrorBoundary>
        <Suspense fallback={null}>
          <AppRouter />
        </Suspense>
      </AuthErrorBoundary>
      <Toaster />
    </>
  );
}
export default App;
