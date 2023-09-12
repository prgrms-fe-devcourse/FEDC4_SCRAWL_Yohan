import { Link } from "react-router-dom";

import { Global } from "@emotion/react";

import { getglobalStyles } from "@styles/globalStyles";

import { useThemeStore } from "@stores/theme.store";

import { PATH } from "@constants/index";

import ErrorBoundary from "@utils/ErrorBoundary";

import AppRouter from "./router";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <Global styles={getglobalStyles(theme)} />
      <ErrorBoundary fallback={<Link to={PATH.HOME} />}>
        <AppRouter />
      </ErrorBoundary>
    </>
  );
}
export default App;
