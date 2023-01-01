import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
 return (
  <>
   <Navbar />
   <main>
    <Outlet />
   </main>
   <Footer />
  </>
 );
};

export default App;
