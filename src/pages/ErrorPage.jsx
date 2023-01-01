import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <section className="container flex min-h-screen items-center justify-center">
      <p className="text-xl font-bold">Oh no! Page not found!</p>
    </section>
  );
};

export default ErrorPage;
