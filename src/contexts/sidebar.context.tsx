import React, { createContext, useState } from "react";

type SidebarContextType = {
  sidebarAppear: boolean;
  setSidebarAppear: (value: boolean) => void;
  setsidebarAppearFalse: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
type SidebarProviderProps = {
  children: React.ReactNode;
};
const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarAppear, setSidebarAppear] = useState(false);
  const setsidebarAppearFalse = () => setSidebarAppear(false);
  return (
    <SidebarContext.Provider
      value={{ sidebarAppear, setSidebarAppear, setsidebarAppearFalse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
