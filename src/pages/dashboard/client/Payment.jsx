import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosInstance, delay } from "../../../config";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const [receipt, setReceipt] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (receipt) {
      try {
        const filename = Date.now() + receipt.name;
        const data = new FormData();
        data.append("name", filename);
        data.append("file", receipt);
        const fileURL = filename;

        axiosInstance.post("api/upload", data);

        const res = await axiosInstance.put(
          "/api/payments/mark-pending/" + id,
          {
            id: id,
            receipt: fileURL,
          }
        );
        toast.success("Payment Successfully Updated");
        await delay(3000);
        navigate(-1);
      } catch (err) {
        console.log(err);
        toast.error("Failed to Update Payment");
      }
    } else {
      toast.error("Please Upload Receipt");
    }
  };

  return (
    <section className="container flex items-center justify-center px-4">
      <Toaster />
      <form className="mt-10 mb-16 w-full md:w-1/2" onSubmit={handlePayment}>
        <h1 className="mb-3 text-2xl font-bold">Payment</h1>
        <div className="flex flex-col">
          <label className="mb-3 pb-1 text-sm font-medium">
            Upload Payment Receipt
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setReceipt(e.target.files[0]);
              }}
              class="mt-2 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm font-normal text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              multiple
            />
          </label>
        </div>

        <input
          type="submit"
          value="Submit"
          className="w-full cursor-pointer rounded bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-primaryHover md:w-auto"
        />
      </form>
    </section>
  );
};

export default Payment;
