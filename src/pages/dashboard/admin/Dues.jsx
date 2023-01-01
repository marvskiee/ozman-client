import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import ClickableTable from "../../../components/dashboard/admin/ClickableTable";
import { axiosInstance } from "../../../config";
import { useNavigate } from "react-router-dom";

const Dues = () => {
 const [unpaidPayments, setUnpaidPayments] = useState([]);
 const [pendingPayments, setPendingPayments] = useState([]);
 const [paidPayments, setPaidPayments] = useState([]);
 const [loading, setLoading] = useState(true);
 const navigate = useNavigate();

 useEffect(() => {
  setLoading(true);
  getPendingDues();
  getUnpaidDues();
  getPaidDues();
 }, []);

 const getPendingDues = async () => {
  await axiosInstance.get("/api/payments/pending-payments").then((res) => {
   let allPayments = res.data;
   setPendingPayments(allPayments);
   setLoading(false);
  });
 };

 const getUnpaidDues = async () => {
  await axiosInstance.get("/api/payments/unpaid-payments").then((res) => {
   let allPayments = res.data;
   setUnpaidPayments(allPayments);
   setLoading(false);
  });
 };

 const getPaidDues = async () => {
  await axiosInstance.get("/api/payments/paid-payments").then((res) => {
   let allPayments = res.data;
   setPaidPayments(allPayments);
   setLoading(false);
  });
 };

 const paymentsColumns = useMemo(
  () => [
   {
    Header: "Account Number",
    accessor: "accountNumber",
   },
   {
    Header: "Subscriber Name",
    accessor: "subscriberName",
   },
   {
    Header: "Payment Due",
    accessor: "paymentDue",
    Cell: (e) => {
     const date = new Date(e.value).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
     });
     return <p>{date}</p>;
    },
   },
   {
    Header: "Plan",
    accessor: "amount",
   },
   {
    Header: "Payment Status",
    accessor: "paymentStatus",
   },
  ],
  [],
 );

 return (
  <section>
   <h2 className="text-xl font-bold">Dues</h2>

   <section className="py-6">
    <h2 className="pb-2 text-lg font-bold">Pending Dues</h2>
    <ClickableTable columns={paymentsColumns} data={pendingPayments} />
   </section>

   <section className="py-6">
    <h2 className="pb-2 text-lg font-bold">Unpaid Dues</h2>
    <ClickableTable columns={paymentsColumns} data={unpaidPayments} />
   </section>

   <hr />
   <section className="py-6">
    <h2 className="pb-2 text-lg font-bold">Paid Dues</h2>
    <ClickableTable columns={paymentsColumns} data={paidPayments} />
   </section>
  </section>
 );
};

export default Dues;
