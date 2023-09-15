import { Suspense } from "react";
import { ToastOptions, Toaster } from "react-hot-toast";

import { Global } from "@emotion/react";

import Login from "@components/Login";

import { getGlobalStyles } from "@styles/globalStyles";

import { useThemeStore } from "@stores/theme.store";

import AppRouter from "./router";

function App() {
  const { theme } = useThemeStore();

  const defaultToasterOption: ToastOptions = {
    duration: 2000,
    style: {
      backgroundColor: theme.BACKGROUND200,
      color: theme.TEXT600,
      boxShadow: theme.SHADOW
    }
  };

  return (
    <>
      <Global styles={getGlobalStyles(theme)} />
      <Suspense fallback={null}>
        <Login />
        <AppRouter />
        <Toaster toastOptions={defaultToasterOption} />
      </Suspense>
    </>
  );
}
export default App;
