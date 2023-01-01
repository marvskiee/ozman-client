import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <section className="container flex min-h-screen items-center justify-center">
      <p className="text-xl font-bold">You are not authorized to access this page.</p>
    </section>
  );
};

export default UnauthorizedPage;
