"use client"

// InLiveGlobalState.tsx
import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

interface InLiveContextProps {
  isLive: boolean;
  toggleLiveState: () => void;
}

const InLiveContext = createContext<InLiveContextProps | undefined>(undefined);

export const InLiveGlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    const liveStatus = Cookies.get("isLive") === "true";
    setIsLive(liveStatus);
  }, []);

  const toggleLiveState = () => {
    const newStatus = !isLive;
    setIsLive(newStatus);
    Cookies.set("isLive", newStatus.toString(), { expires: 7 });
  };

  return (
    <InLiveContext.Provider value={{ isLive, toggleLiveState }}>
      {children}
    </InLiveContext.Provider>
  );
};

export const useInLiveContext = () => {
  const context = React.useContext(InLiveContext);
  if (!context) {
    throw new Error(
      "useInLiveContext must be used within an InLiveGlobalProvider"
    );
  }
  return context;
};
