"use client";
import { useState, createContext, useContext } from "react";

export const LeadwayContext = createContext({} as any);

export function LeadWayProvider({ children }: any) {
  const [info, setInfo] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LeadwayContext.Provider value={{ info, setInfo, isLogged, setIsLogged }}>
      {children}
    </LeadwayContext.Provider>
  );
}

export function useLeadway() {
  return useContext(LeadwayContext);
}
