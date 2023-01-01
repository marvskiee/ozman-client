import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Auth Context
import { AuthContextProvider } from "./context/AuthContext";

// Pages
import App from "./App";
import News from "./pages/News";
import Support from "./pages/Support";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import CheckAvailability from "./pages/apply/CheckAvailability";
import CreateAccount from "./pages/apply/CreateAccount";
import Login from "./pages/Login";
import Verify from "./pages/Verify";

// Client Dashboard Pages
import ClientRoot from "./pages/dashboard/client/ClientRoot";
import HomeDashboard from "./pages/dashboard/client/HomeDashboard";
import CustomerSupport from "./pages/dashboard/client/Support";
import CustomerInquiries from "./pages/dashboard/client/Inquiries";

// Admin Dashboard Pages
import AdminRoot from "./pages/dashboard/admin/AdminRoot";
import Subscribers from "./pages/dashboard/admin/Subscribers";
import Dues from "./pages/dashboard/admin/Dues";
import Inquiries from "./pages/dashboard/admin/Inquiries";
import Dashboard from "./pages/dashboard/admin/Dashboard";
import AdminNews from "./pages/dashboard/admin/News";
import AdminSupport from "./pages/dashboard/admin/Support";
import ManagePlans from "./pages/dashboard/admin/ManagePlans";
import RequireAuth from "./auth/RequireAuth";
import EditUser from "./pages/dashboard/admin/EditUser";
import AddUser from "./pages/dashboard/admin/AddUser";
import EditPayment from "./pages/dashboard/admin/EditPayment";
import Payment from "./pages/dashboard/client/Payment";
import EditNews from "./pages/dashboard/admin/EditNews";

const router = createBrowserRouter([
  // Landing Page
  {
    // Public Routes
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/verify/:id",
        element: <Verify />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/apply",
        element: <CheckAvailability />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
    ],
  },
  // Client Dashboard
  {
    element: <RequireAuth allowedRoles={["Customer"]} />,
    children: [
      {
        path: "/client-dashboard",
        element: <ClientRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/client-dashboard",
            element: <HomeDashboard />,
          },
          {
            path: "/client-dashboard/payment/:id",
            element: <Payment />,
          },
          {
            path: "/client-dashboard/customer-support",
            element: <CustomerSupport />,
          },
          {
            path: "/client-dashboard/customer-inquiries",
            element: <CustomerInquiries />,
          },
        ],
      },
    ],
  },

  // Admin Dasboard
  {
    element: <RequireAuth allowedRoles={["Admin"]} />,
    children: [
      {
        path: "/admin-dashboard",
        element: <AdminRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/admin-dashboard",
            element: <Dashboard />,
          },
          {
            path: "/admin-dashboard/subscribers",
            element: <Subscribers />,
          },
          {
            path: "/admin-dashboard/add-user",
            element: <AddUser />,
          },
          {
            path: "/admin-dashboard/edit-user/:id",
            element: <EditUser />,
          },
          {
            path: "/admin-dashboard/dues",
            element: <Dues />,
          },
          {
            path: "/admin-dashboard/edit-payment/:id",
            element: <EditPayment />,
          },
          {
            path: "/admin-dashboard/inquiries",
            element: <Inquiries />,
          },
          {
            path: "/admin-dashboard/news",
            element: <AdminNews />,
          },
          {
            path: "/admin-dashboard/edit-news/:id",
            element: <EditNews />,
          },
          {
            path: "/admin-dashboard/support",
            element: <AdminSupport />,
          },
          {
            path: "/admin-dashboard/manage-plans",
            element: <ManagePlans />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
  // <SOA />
);
