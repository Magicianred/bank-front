import React from "react";
import { Navbar } from "./Navbar";

const Dashboard: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export { Dashboard };
