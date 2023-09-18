import { Toaster as Toast, ToastOptions } from "react-hot-toast";

import { useThemeStore } from "@stores/theme.store";

const Toaster = () => {
  const { theme } = useThemeStore();

  const defaultToasterOption: ToastOptions = {
    duration: 2000,
    style: {
      backgroundColor: theme.BACKGROUND200,
      color: theme.TEXT600,
      boxShadow: theme.SHADOW
    }
  };
  return <Toast toastOptions={defaultToasterOption} />;
};

export default Toaster;
