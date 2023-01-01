import React, { useState, useEffect, useMemo, useCallback } from "react";
import "regenerator-runtime/runtime";
import { InfinitySpin } from "react-loader-spinner";
import { useTable, useGlobalFilter } from "react-table";
import { axiosInstance } from "../../../config";
import { useNavigate } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

const Subscribers = () => {
 const [users, setUsers] = useState([]);
 const [allUsers, setAllUsers] = useState([]);
 const [pageNext, setPageNext] = useState(0);
 const [pagePrev, setPagePrev] = useState(0);
 const [loading, setLoading] = useState(false);
 const [isFirstPage, setIsFirstPage] = useState(true);
 const [isLastPage, setIsLastPage] = useState(true);
 const [searchQuery, setSearchQuery] = useState("");
 const [limit, setLimit] = useState(10);
 const [appStatus, setAppStatus] = useState("");
 const navigate = useNavigate();

 async function getAllUsers(page = 0, query = "", limit = 10, appStatus = "") {
  setLoading(true);
  await axiosInstance.get(`api/users/all-users?pageNumber=${page}&limit=${limit}&filterApplicationStatus=${appStatus}&filterSearch=${query}`).then((res) => {
   setUsers(res.data.data);
   setAllUsers(res.data.allData);
   if (res.data.previous) {
    setPagePrev(res.data.previous.pageNumber);
   }
   if (res.data.next) {
    setPageNext(res.data.next.pageNumber);
   }

   if (!res.data.next) {
    setIsLastPage(true);
   } else {
    setIsLastPage(false);
   }
   if (!res.data.previous) {
    setIsFirstPage(true);
   } else {
    setIsFirstPage(false);
   }
   console.log(res.data);
   setLoading(false);
  });
 }

 useEffect(() => {
  getAllUsers(0, "");
 }, []);

 async function filterSearch(query) {
  setSearchQuery(query);
  await getAllUsers(0, query, limit, appStatus);
 }

 async function filterLimit(query) {
  setLimit(query);
  await getAllUsers(0, searchQuery, query, appStatus);
 }

 async function filterAppStatus(query) {
  setAppStatus(query);
  await getAllUsers(0, searchQuery, limit, query);
 }

 async function handlePrevious() {
  return await getAllUsers(pagePrev, searchQuery, limit, appStatus);
 }
 async function handleNext() {
  return await getAllUsers(pageNext, searchQuery, limit, appStatus);
 }

 const handleClick = (data) => {
  navigate(`/admin-dashboard/edit-user/${data._id}`, { state: data });
 };

 const handleAdd = () => {
  navigate("/admin-dashboard/add-user");
 };

 const usersColumns = useMemo(
  () => [
   {
    Header: "Account Number",
    accessor: "accountNumber",
   },
   {
    Header: "Email",
    accessor: "email",
   },
   {
    Header: "First Name",
    accessor: "firstName",
   },
   {
    Header: "Last Name",
    accessor: "lastName",
   },
   {
    Header: "Address",
    accessor: "address",
   },
   {
    Header: "Contact Number",
    accessor: "contactNumber",
   },
   {
    Header: "Application Status",
    accessor: "applicationStatus",
   },
   {
    Header: "Role",
    accessor: "accessLevel",
   },
  ],
  [],
 );

 const { getTableProps, getTableBodyProps, headerGroups, rows, state, preGlobalFilteredRows, setGlobalFilter, prepareRow } = useTable(
  {
   columns: usersColumns,
   data: users,
  },
  useGlobalFilter,
 );

 return (
  <section>
   <div className="flex items-center justify-between">
    <h2 className="text-xl font-bold">Subscribers</h2>
   </div>
   <div className="mt-10 inline-flex gap-x-3">
    <div className="flex flex-col">
     <label className="pb-1 text-sm font-semibold">Items per page</label>
     <DebounceInput className="w-[500px] rounded px-2" placeholder="Search a record" minLength={1} debounceTimeout={500} onChange={(event) => filterSearch(event.target.value)} />
    </div>
    <div className="flex flex-col">
     <label htmlFor="item-number" className="pb-1 text-sm font-semibold">
      Items per page
     </label>
     <select name="item-number" id="item-number" className="rounded" onChange={(event) => filterLimit(event.target.value)}>
      <option value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="100">100</option>
     </select>
    </div>
    <div className="flex flex-col">
     <label htmlFor="app-status" className="pb-1 text-sm font-semibold">
      Application Status
     </label>
     <select name="app-status" id="app-status" className="rounded" onChange={(event) => filterAppStatus(event.target.value)}>
      <option value="">No Filter</option>
      <option value="Approved">Approved</option>
      <option value="Pending">Pending</option>
     </select>
    </div>
    <input type="submit" onClick={handleAdd} value="Add New Subscriber" className="mt-[24px] w-full cursor-pointer rounded bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-primaryHover md:w-auto" />
   </div>
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
     <tbody {...getTableBodyProps()} className={`${loading ? "hidden" : "dataTable"}`}>
      {rows.map((row, idx) => {
       prepareRow(row);

       return (
        <tr {...row.getRowProps()} key={idx} className="border-white-400 bg-white-500 border-b" onClick={() => handleClick(row.original)} style={{ cursor: "pointer" }}>
         {row.cells.map((cell, idx) => (
          <td {...cell.getCellProps()} key={idx} scope="row" className="dark:text-white-100 whitespace-nowrap py-4 px-6 font-medium">
           {cell.render("Cell")}
          </td>
         ))}
        </tr>
       );
      })}
     </tbody>
    </table>
    <div className={`${loading ? "flex" : "hidden"} min-h-[530px] w-full flex-col items-center justify-center`}>
     <InfinitySpin width="200" color="#692090" ariaLabel="loading" />
    </div>
    <footer className="mt-2 inline-flex w-full justify-end gap-x-2">
     <button className={`rounded-sm py-2 px-4 text-white duration-200 ${isFirstPage ? "bg-gray-400" : "bg-slate-800 hover:bg-slate-900"}`} disabled={isFirstPage} onClick={handlePrevious}>
      Previous
     </button>
     <button className={`rounded-sm py-2 px-4 text-white duration-200 ${isLastPage ? "bg-gray-400" : "bg-slate-800 hover:bg-slate-900"}`} disabled={isLastPage} onClick={handleNext}>
      Next
     </button>
    </footer>
   </section>
  </section>
 );
};

export default Subscribers;
