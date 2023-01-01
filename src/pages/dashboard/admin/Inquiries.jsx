import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { axiosInstance, delay } from "../../../config";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { InfinitySpin } from "react-loader-spinner";
const Inquiries = () => {
 const [inquiries, setInquiries] = useState([]);
 const [loading, setLoading] = useState(true);
 const navigate = useNavigate();

 useEffect(() => {
  getAllInquiries();
 }, []);

 const getAllInquiries = async () => {
  setLoading(true);
  await axiosInstance.get("/api/inquiries/all-inquiries").then((res) => {
   let allInquiries = res.data;
   console.log(res.data);
   setInquiries(allInquiries);
   setLoading(false);
  });
 };

 async function updateStatus(val, id) {
  setLoading(true);
  try {
   const res = await axiosInstance.put("/api/inquiries/update-inquiry-status/" + id, {
    status: val,
   });
   toast.success("Status Updated");
   await delay(3000);
   await getAllInquiries();
   res.data;
  } catch (err) {
   console.log(err);
   await getAllInquiries();
   toast.error("Failed to Update Status");
  }
 }

 const handleClick = (data) => {
  navigate(`/admin-dashboard/view-inquiry/${data._id}`, { state: data });
 };

 const inquiriesColumns = useMemo(
  () => [
   {
    Header: "Trouble Ticket ID",
    accessor: "troubleTicketId",
   },
   {
    Header: "Account Number",
    accessor: "accountNumber",
   },
   {
    Header: "Subscriber Name",
    accessor: "subscriberName",
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
  ],
  [],
 );

 const tableInstance = useTable({
  columns: inquiriesColumns,
  data: inquiries,
 });

 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

 return (
  <section>
   <h2 className="text-xl font-bold">Customer Support</h2>

   <section className="py-6">
    <table {...getTableProps()} className={`${loading ? "hidden" : ""} text-md w-full text-left text-sm`}>
     <thead className="bg-gray-50 text-xs uppercase">
      {headerGroups.map((headerGroup) => (
       <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
         <th {...column.getHeaderProps()} scope="col" className="py-3 px-6">
          {column.render("Header")}
         </th>
        ))}
        <th scope="col" className="py-3 px-6">
         Update Status
        </th>
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
         <td>
          <select defaultValue={`${row.original.status}`} className="rounded" name="statusUpdate" id="statusUpdate" onChange={(event) => updateStatus(event.target.value, row.original._id)}>
           <option value="Queuing">Queuing</option>
           <option value="In Progress">In Progress</option>
           <option value="Accomplished">Accomplished</option>
          </select>
         </td>
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
