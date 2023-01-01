import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Logo from "../../../assets/images/ozma-logo.png";

import Modal3 from "../../Modal3";

const ClientNavbar = () => {
 const navigate = useNavigate();
 const { dispatch } = useContext(AuthContext);

 const [openModal, setOpenModal] = useState(false);
 const handleOpenModal = () => {
  setOpenModal(true);
 };
 const handleLogOut = () => {
  // TODO: Add Log out functionality
  dispatch({ type: "LOGOUT" });
  navigate("/login");
 };
 const handleCustomerSupport = () => {
  navigate("/client-dashboard/customer-support");
 };
 const handleMyActivities = () => {
  navigate("/client-dashboard/customer-inquiries");
 };
 const handleMyPayment = () => {
  navigate("/client-dashboard");
 };
 return (
  <header className="shadow">
   <nav className="container flex items-center justify-between px-4 py-3">
    <div>
     <img src={Logo} className="w-20" alt="Ozma Logo" />
    </div>
    <div className="inline-flex gap-x-3">
     <button onClick={handleOpenModal} className="rounded-md  py-2 px-4 shadow duration-200 hover:bg-[#692090] hover:text-white">
      Pay via Gcash QR
     </button>
     <button onClick={handleMyPayment} className="rounded-md  py-2 px-4 shadow duration-200 hover:bg-[#692090] hover:text-white">
      My Payment
     </button>
     <button onClick={handleMyActivities} className="rounded-md  py-2 px-4 shadow duration-200 hover:bg-[#692090] hover:text-white">
      My Complaints
     </button>
     <button onClick={handleCustomerSupport} className="rounded-md  py-2 px-4 shadow duration-200 hover:bg-[#692090] hover:text-white">
      Customer Support
     </button>
     <button onClick={handleLogOut} className="logout-btn">
      Log Out
     </button>
    </div>
   </nav>
   <Modal3 open={openModal} close={() => setOpenModal(false)} />
  </header>
 );
};

export default ClientNavbar;
