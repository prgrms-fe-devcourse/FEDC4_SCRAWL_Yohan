import { Link } from "react-router-dom";

import { Global } from "@emotion/react";

import Login from "@components/Login";

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
        <Login>
          <AppRouter />
        </Login>
      </ErrorBoundary>
    </>
  );
}
export default App;
