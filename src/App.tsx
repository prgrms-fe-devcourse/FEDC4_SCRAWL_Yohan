import { Global } from "@emotion/react";

import Login from "@components/Login";

import { getglobalStyles } from "@styles/globalStyles";

import { useThemeStore } from "@stores/theme.store";

import AppRouter from "./router";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <Global styles={getglobalStyles(theme)} />
      <Login>
        <AppRouter />
      </Login>
    </>
  );
}
export default App;
