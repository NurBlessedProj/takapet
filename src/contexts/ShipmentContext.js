"use client";
import { createContext, useState, useEffect } from "react";

const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
  const [selected, setSelected] = useState(() => {
    if (typeof window !== "undefined") {
      const savedSelected = localStorage.getItem("selected");
      return savedSelected ? JSON.parse(savedSelected) : [];
    } else {
      return [];
    }
  });

  // const [selected, setSelected] = useState("");
  console.log(selected);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selected", JSON.stringify(selected));
    }
  }, [selected]);

  return (
    <ShipmentContext.Provider value={[selected, setSelected]}>
      {children}
    </ShipmentContext.Provider>
  );
};

export default ShipmentContext;
