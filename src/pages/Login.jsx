import React, { useEffect, useContext, useState } from "react";
import { axiosInstance } from "../config";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import MapImg from "../assets/images/map.jpg";
import Carousel from "../components/Carousel";

const Login = () => {
 const [error, setError] = useState(false);
 const navigate = useNavigate();
 const { dispatch } = useContext(AuthContext);
 const delay = (ms) => new Promise((res) => setTimeout(res, ms));

 const handleLogin = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
   const res = await axiosInstance.post("api/auth/login", {
    email: email,
    password: password,
   });
   dispatch({ type: "LOGIN", payload: res.data });
   console.log(res.data);
   await delay(1000);
   redirectUser(res.data.accessLevel);
  } catch (err) {
   setError(true);
   console.log(err);
  }
 };

 const redirectUser = (accessLevel) => {
  localStorage.setItem("accessLevel", accessLevel);

  if (accessLevel === "Admin") {
   navigate("/admin-dashboard", { replace: true });
  } else {
   navigate("/client-dashboard", { replace: true });
  }
 };

 useEffect(() => {
  // scroll to top
  window.scrollTo(0, 0);
 }, []);

 return (
  <section className="min-h-screen">
   <div className="hidden md:block">
    <Carousel />
   </div>
   <div className="p-4 md:mx-auto md:w-8/12 md:p-12 lg:w-1/2">
    <Link to="/" className="mt-10 inline-block text-sm font-semibold text-primary hover:underline hover:underline-offset-8 md:mt-0">
     Back to homepage
    </Link>

    <h2 className="pb-3 pt-4 text-3xl font-bold">Login</h2>

    {error && (
     <div className="mb-4 rounded bg-red-600 py-3 text-center">
      <p className="text-sm font-medium text-white">Incorrect Email/Password</p>
     </div>
    )}

    <form onSubmit={handleLogin}>
     <div className="mb-4 flex flex-col">
      <label className="pb-1 text-sm font-semibold">Email</label>
      <input type="email" className="rounded border-gray-400" id="email" />
     </div>

     <div className="mb-4 flex flex-col">
      <label className="pb-1 text-sm font-semibold">Password</label>
      <input type="password" className="rounded border-gray-400" id="password" />
     </div>

     <input type="submit" value="Login" className="w-full cursor-pointer rounded bg-primary px-8 py-3 text-sm font-medium text-white transition hover:bg-primaryHover md:w-auto" />
    </form>
   </div>
  </section>
 );
};

export default Login;
