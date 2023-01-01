import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  return allowedRoles?.includes(currentUser?.accessLevel) ? (
    <Outlet />
  ) : currentUser ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
