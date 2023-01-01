import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaWifi } from "react-icons/fa";
import { AiFillWarning, AiFillDashboard } from "react-icons/ai";
import { IoIosHelpCircle } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const AdminNavbar = () => {
 const navigate = useNavigate();
 const { dispatch } = useContext(AuthContext);

 const handleLogOut = () => {
  // TODO: Add Log out functionality
  dispatch({ type: "LOGOUT" });
  // If successful, redirect to login page
  navigate("/login");
 };

 const links = [
  {
   id: 1,
   name: "Dashboard",
   icon: <AiFillDashboard />,
   path: "/admin-dashboard",
  },
  {
   id: 2,
   name: "Subscribers",
   icon: <FaUserCircle />,
   path: "/admin-dashboard/subscribers",
  },
  {
   id: 3,
   name: "Dues",
   icon: <AiFillWarning />,
   path: "/admin-dashboard/dues",
  },
  {
   id: 4,
   name: "Customer Support",
   icon: <IoIosHelpCircle />,
   path: "/admin-dashboard/inquiries",
  },
  {
   id: 5,
   name: "News",
   icon: <BiNews />,
   path: "/admin-dashboard/news",
  },
  // {
  //   id: 6,
  //   name: "Manage Plans",
  //   icon: <FaWifi />,
  //   path: "/admin-dashboard/manage-plans",
  // },
 ];

 return (
  <aside className="fixed top-0 left-0 h-screen w-52 bg-primary p-5 text-white">
   <p className="mb-10 font-bold">Admin</p>

   <nav>
    <ul>
     {links.map((link) => (
      <li key={link.id} className="mb-7 flex items-center space-x-3 hover:underline hover:underline-offset-8">
       {link.icon}
       <Link to={link.path}>{link.name}</Link>
      </li>
     ))}
    </ul>
   </nav>

   <section>
    <button className="mt-28 w-full rounded-md bg-primaryHover py-2 text-sm transition hover:bg-purple-900" onClick={handleLogOut}>
     Logout
    </button>
   </section>
  </aside>
 );
};

export default AdminNavbar;
