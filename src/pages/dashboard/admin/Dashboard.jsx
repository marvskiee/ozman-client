import React, { useState, useEffect, useMemo } from "react";
import { axiosInstance, delay } from "../../../config";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
 const [unpaidPayments, setUnpaidPayments] = useState([]);
 const [users, setUsers] = useState([]);
 const [pendingPayments, setPendingPayments] = useState([]);
 const [inquiries, setInquiries] = useState([]);
 const [loading, setLoading] = useState(true);
 const navigate = useNavigate();

 useEffect(() => {
  getAllUsers();
  getAllInquiries();
  getUnpaidDues();
  getPendingDues();
 }, []);
 async function getAllUsers(page = 0, query = "", limit = 10, appStatus = "") {
  setLoading(true);
  await axiosInstance.get(`api/users/all-users?pageNumber=${page}&limit=${limit}&filterApplicationStatus=${appStatus}&filterSearch=${query}`).then((res) => {
   setUsers(res.data.data);
  });
 }
 const getAllInquiries = async () => {
  await axiosInstance.get("/api/inquiries/all-inquiries").then((res) => {
   let allInquiries = res.data;
   setInquiries(allInquiries);
   setLoading(false);
  });
 };
 const getUnpaidDues = async () => {
  await axiosInstance.get("/api/payments/unpaid-payments").then((res) => {
   let allPayments = res.data;
   setUnpaidPayments(allPayments);
  });
 };
 const getPendingDues = async () => {
  await axiosInstance.get("/api/payments/pending-payments").then((res) => {
   let allPayments = res.data;
   setPendingPayments(allPayments);
   setLoading(false);
  });
 };
 return (
  <section>
   <h2 className="text-xl font-bold">Dashboard</h2>
   <div className="mt-5 h-full">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
     <div className="cursor-pointer rounded-md bg-green-500  p-10 duration-200 hover:shadow-xl" onClick={() => navigate("/admin-dashboard/subscribers")}>
      <p className="text-white">Total Subscribers</p>
      <p className="text-6xl font-bold text-white">{users.length}</p>
     </div>
     <div className="cursor-pointer rounded-md bg-orange-500  p-10 duration-200 hover:shadow-xl" onClick={() => navigate("/admin-dashboard/inquiries")}>
      <p className="text-white">Total Complaints</p>
      <p className="text-6xl font-bold text-white">{inquiries.length}</p>
     </div>
     <div className="cursor-pointer rounded-md bg-red-500  p-10 duration-200 hover:shadow-xl" onClick={() => navigate("/admin-dashboard/dues")}>
      <p className="text-white">Total Unpaid Dues</p>
      <p className="text-6xl font-bold text-white">{unpaidPayments.length}</p>
     </div>
     <div className="cursor-pointer rounded-md bg-yellow-400  p-10 duration-200 hover:shadow-xl" onClick={() => navigate("/admin-dashboard/dues")}>
      <p className="text-white">Total Pending Dues</p>
      <p className="text-6xl font-bold text-white">{pendingPayments.length}</p>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Dashboard;
