import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/ozma-logo.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const handleIsOpen = () => {
  setIsOpen(!isOpen);
 };

 const navLinks = [
  {
   id: 1,
   name: "Home",
   path: "/",
  },
  {
   id: 2,
   name: "News",
   path: "/news",
  },
  {
   id: 4,
   name: "About",
   path: "/about",
  },
 ];

 return (
  <header className="relative z-20 w-full shadow">
   <nav className="container flex items-center justify-between bg-bodyBg py-3 px-4">
    <div className="flex items-center">
     <Link to="/" className="mr-10">
      <img src={Logo} className="w-20" alt="AIO Logo" />
     </Link>
     <ul className="hidden items-center space-x-2 md:flex">
      {navLinks.map((link) => (
       <li key={link.id}>
        <NavLink to={link.path} className="nav-link">
         {link.name}
        </NavLink>
       </li>
      ))}
     </ul>
    </div>
    <div className="hidden space-x-2 md:flex">
     <Link to="/apply" className="apply-btn">
      Apply
     </Link>
     <Link to="/login" className="login-btn">
      Login
     </Link>
    </div>
    <button onClick={handleIsOpen} className="md:hidden">
     <FaBars size={20} />
    </button>
   </nav>

   <div className={isOpen ? "fixed left-0 top-0 h-screen w-full bg-black bg-opacity-40 md:hidden" : ""}>
    <nav className={isOpen ? "fixed left-0 top-0 h-screen w-[75%] bg-bodyBg p-6 duration-150 ease-in sm:w-[60%] md:w-[45%]" : "fixed left-[-100%] top-0 p-6 duration-150 ease-in"}>
     <div className="flex items-center justify-between">
      <img src={Logo} alt="Logo" className="h-10" />
      <button onClick={handleIsOpen}>
       <MdClose size={25} />
      </button>
     </div>
     <div>
      <ul className="my-12 inline-block space-y-10">
       {navLinks.map((link) => (
        <li key={link.id}>
         <NavLink to={link.path} className="mobile-nav-link" onClick={handleIsOpen}>
          {link.name}
         </NavLink>
        </li>
       ))}
      </ul>
      <div className="flex flex-col space-y-2 text-center">
       <Link to="/apply" className="apply-btn" onClick={handleIsOpen}>
        Apply
       </Link>
       <Link to="/login" className="login-btn" onClick={handleIsOpen}>
        Login
       </Link>
      </div>
     </div>
    </nav>
   </div>
  </header>
 );
};

export default Navbar;
