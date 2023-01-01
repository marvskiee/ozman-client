import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../config";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/Title";

const CustomerSupport = () => {
 const customerName = JSON.parse(localStorage.getItem("user"));
 const fullName = customerName.firstName + " " + customerName.lastName;
 const accNum = customerName.accountNumber;
 const applicationStatus = customerName.applicationStatus;
 let totalLength = 0;
 const navigate = useNavigate();
 useEffect(() => {
  // scroll to top
  window.scrollTo(0, 0);
  getAllInquiries();
 }, []);

 const getAllInquiries = async () => {
  await axiosInstance.get("/api/inquiries/all-inquiries").then((res) => {
   getDataLength(res.data.length);
  });
 };

 function getDataLength(length) {
  totalLength = parseInt(length + 1);
 }

 const handleCreateInquiry = async (e) => {
  e.preventDefault();
  const subscriberName = fullName;
  const accountNumber = accNum;
  const subject = e.target.subject.value;
  const concern = e.target.type.value;
  const status = "Queuing";
  const troubleTicketId = totalLength;
  try {
   const res = await axiosInstance.post("/api/inquiries/add-inquiry", {
    subscriberName: subscriberName,
    accountNumber: accountNumber,
    subject: subject,
    concern: concern,
    status: status,
    troubleTicketId: troubleTicketId,
   });
   navigate("/client-dashboard/customer-inquiries");
  } catch (err) {
   console.log(err.response);
  }
 };

 return (
  <section className="container py-12 px-4">
   <Title title="Message Us" />

   <form className="mt-8 w-full md:w-1/2" onSubmit={handleCreateInquiry}>
    <div className="mb-4 flex flex-col">
     <label className="pb-1 text-sm font-semibold">Subject of Concern</label>
     <select className="rounded border-gray-400" defaultValue="Slow Connection" id="subject">
      <option value="Slow Connection">Slow Connection</option>
      <option value="No Internet">No Internet</option>
     </select>
    </div>

    <div className="mb-4 flex flex-col">
     <label className="pb-1 text-sm font-semibold">Type of Concern</label>
     <textarea type="text" rows="8" className="rounded border-gray-400" id="type" />
    </div>

    <input type="submit" value="Submit" className="w-full cursor-pointer rounded bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primaryHover md:w-auto" />
   </form>
  </section>
 );
};

export default CustomerSupport;
