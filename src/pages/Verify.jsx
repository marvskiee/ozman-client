import React, { useEffect, useState } from "react";
import { axiosInstance, delay } from "../config";
import { useLocation, useNavigate } from "react-router-dom";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.pathname.replace("/verify/", "");
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(true);
  useEffect(() => {
    const load = async () => {
      const res = await axiosInstance.put(`api/users/verify-account/${data}`);
      setSuccess(res.data.success);
      setIsLoading(false);
      await delay(3000);
      navigate("/login", { replace: true });
    };
    load();
    // axiosInstance.put()
  }, []);
  return (
    <div className="flex min-h-verify items-center justify-center">
      <p className="p-10 text-center text-3xl font-semibold">
        {isLoading
          ? "Account verifying, Please Wait!"
          : success
          ? "Congratulations your account is now verified!"
          : "Account not found!"}
      </p>
    </div>
  );
};

export default Verify;
