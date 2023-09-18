import { Suspense } from "react";

import { Global } from "@emotion/react";

import Login from "@components/Login";
import Toaster from "@components/Toaster";

import { getGlobalStyles } from "@styles/globalStyles";

import { useThemeStore } from "@stores/theme.store";

import AppRouter from "./router";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <Global styles={getGlobalStyles(theme)} />
      <Suspense fallback={null}>
        <Login />
        <AppRouter />
        <Toaster />
      </Suspense>
    </>
  );
}
export default App;
