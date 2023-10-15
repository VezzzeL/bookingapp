import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="p-4">
      <Header />
      <Outlet />
    </div>
  );
};
