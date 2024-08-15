"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from "react";

interface PanelContextProps {
  openSidePanel: boolean;
  toggleSidePanel: () => void;
}

const SidePanelContext = createContext<PanelContextProps | null>(null);

export const SidePanelProvider = ({ children }: { children: ReactNode }) => {
  const [openSidePanel, setOpenSidePanel] = useState<boolean>(false);

  const toggleSidePanel = () => {
    setOpenSidePanel((prevState) => !prevState);
  };
  return (
    <SidePanelContext.Provider value={{ openSidePanel, toggleSidePanel }}>
      {children}
    </SidePanelContext.Provider>
  );
};

export const useNoteSidePanel = () => {
  const context = useContext(SidePanelContext);
  if (!context) {
    throw new Error("useNoteSidePanel must be used within a SidePanelProvider");
  }
    return context;
};
