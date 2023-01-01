import React from "react";
import { Outlet } from "react-router-dom";

import { Engagespot } from "@engagespot/react-component";
// Components
import AdminNavbar from "../../../components/dashboard/admin/AdminNavbar";
const theme = {
 notificationButton: {
  iconFill: "#5350f6",
  iconSize: "32px",
 },
 colors: {
  brandingPrimary: "#5350f6",
  colorSecondary: "#ecebfa",
 },
 feedItem: {
  hoverBackground: "#ecebfa",
 },
 dropdown: {
  hoverBackground: "#ecebfa",
  menuItemHoverBackground: "#ecebfa",
 },
};
const AdminRoot = () => {
 return (
  <section className="flex">
   <AdminNavbar />
   <div className="fixed right-5 top-3">
    <Engagespot apiKey="mpz2fsz9ftitwmf3h050wi" userId="ezikielpuratulawan@gmail.com" theme={theme} />
   </div>
   <main className="ml-52 flex-1 py-7 px-5">
    <Outlet />
   </main>
  </section>
 );
};

export default AdminRoot;
