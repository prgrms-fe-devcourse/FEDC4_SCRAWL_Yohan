import React, { createContext, useState } from "react";

type SidebarContextType = {
  sidebarAppear: boolean;
  setSidebarAppear: (value: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
type SidebarProviderProps = {
  children: React.ReactNode;
};
const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarAppear, setSidebarAppear] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarAppear, setSidebarAppear }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
