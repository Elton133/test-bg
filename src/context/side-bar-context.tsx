"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";

interface SideBarContextProps {
  openSideBar: boolean;
  toggleSideBar: () => void;
}

const SideBarContext = createContext<SideBarContextProps | null>(null);

export const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const toggleSideBar = () => {
    setOpenSideBar((prevState) => !prevState);
  };
  return (
    <SideBarContext.Provider value={{ openSideBar, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useNoteSidePanel must be used within a SidePanelProvider");
  }
    return context;
};
