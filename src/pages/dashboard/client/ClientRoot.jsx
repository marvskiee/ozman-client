import React from "react";
import { Outlet } from "react-router-dom";
import ClientNavbar from "../../../components/dashboard/client/ClientNavbar";

const Root = () => {
  return (
    <>
      <ClientNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
