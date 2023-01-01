import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { axiosInstance, delay } from "../../../config";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";

import { InfinitySpin } from "react-loader-spinner";
const Inquiries = () => {
 const customerName = JSON.parse(localStorage.getItem("user"));
 const myId = customerName.accountNumber;
 const [inquiries, setInquiries] = useState([]);
 const [loading, setLoading] = useState(true);
 const navigate = useNavigate();

 useEffect(() => {
  getAllInquiries();
 }, []);

 const getAllInquiries = async () => {
  setLoading(true);
  await axiosInstance.get("/api/inquiries/my-inquiries/" + myId).then((res) => {
   let allInquiries = res.data;
   console.log(res.data);
   setInquiries(allInquiries);
   setLoading(false);
  });
 };

 const inquiriesColumns = useMemo(
  () => [
   {
    Header: "Trouble Ticket ID",
    accessor: "troubleTicketId",
   },
   {
    Header: "Subject",
    accessor: "subject",
   },
   {
    Header: "Concern",
    accessor: "concern",
   },
   {
    Header: "Status",
    accessor: "status",
   },
   {
    Header: "Date Created",
    accessor: (row) => moment(row.createdAt).format("MMMM Do YYYY, h:mm a"),
   },
  ],
  [],
 );

 const tableInstance = useTable({
  columns: inquiriesColumns,
  data: inquiries,
 });

 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

 return (
  <section className="p-20">
   <h2 className="text-xl font-bold">My Inquiries</h2>

   <section className="py-6">
    <table {...getTableProps()} className="text-md w-full text-left text-sm">
     <thead className="bg-gray-50 text-xs uppercase">
      {headerGroups.map((headerGroup) => (
       <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
         <th {...column.getHeaderProps()} scope="col" className="py-3 px-6">
          {column.render("Header")}
         </th>
        ))}
       </tr>
      ))}
     </thead>
     <tbody {...getTableBodyProps()} className="dataTable">
      {rows.map((row, idx) => {
       prepareRow(row);

       return (
        <tr
         {...row.getRowProps()}
         className="border-white-400 bg-white-500 border-b"
         // onClick={() => handleClick(row.original)}
         // style={{ cursor: "pointer" }}
        >
         {row.cells.map((cell, idx) => (
          <td {...cell.getCellProps()} scope="row" className="dark:text-white-100  py-4 px-6 font-medium">
           {cell.render("Cell")}
          </td>
         ))}
        </tr>
       );
      })}
     </tbody>
    </table>
    <div className={`${loading ? "flex" : "hidden"} min-h-[530px] w-full items-center justify-center`}>
     <InfinitySpin width="200" color="#692090" ariaLabel="loading" />
    </div>
   </section>
  </section>
 );
};

export default Inquiries;
