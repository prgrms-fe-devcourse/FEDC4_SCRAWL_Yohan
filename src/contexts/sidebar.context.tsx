import React, { createContext, useState } from "react";

type SidebarContextType = {
  sidebarAppear: boolean;
  sidebarOpenBtnAppear: boolean;
  setSidebarAppear: (value: boolean) => void;
  setSidebarOpenBtnAppear: (value: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
type SidebarProviderProps = {
  children: React.ReactNode;
};
const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarAppear, setSidebarAppear] = useState(false);
  const [sidebarOpenBtnAppear, setSidebarOpenBtnAppear] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        sidebarAppear,
        sidebarOpenBtnAppear,
        setSidebarAppear,
        setSidebarOpenBtnAppear
      }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
