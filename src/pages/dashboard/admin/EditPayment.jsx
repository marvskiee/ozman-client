import React from "react";
import { axiosInstance, delay } from "../../../config";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const EditPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  //  const PF = "https://aiointernet.herokuapp.com/files/";
  const PF = "http://localhost:8080/files/";

  console.log(data);
  const handleMarkAsPaid = async () => {
    try {
      const res = await axiosInstance.put(
        "/api/payments/mark-paid/" + data._id,
        {
          id: data._id,
          email: data.subscriberEmail,
          accountNumber: data.accountNumber,
          amount: data.amount,
        }
      );
      toast.success("Payment Successfully Updated");

      await delay(3000);
      navigate(-1);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Update Payment");
    }
  };

  return (
    <section>
      <h2 className="text-xl font-bold">Payment Details</h2>
      <Toaster />
      <section className="space-y-4 divide-y-2 py-6">
        <p className="flex flex-col font-semibold">
          Subscriber Name:{" "}
          <span className="font-normal">{data.subscriberName}</span>
        </p>
        <p className="flex flex-col pt-4 font-semibold">
          Payment Status:{" "}
          <span className="font-normal">{data.paymentStatus}</span>
        </p>
        <p className="flex flex-col pt-4 font-semibold">
          Payment Due:{" "}
          <span className="font-normal">
            {new Date(data.paymentDue).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
        <p className="flex flex-col pt-4 font-semibold">
          Amount: <span className="font-normal">₱{data.amount}</span>
        </p>
        {data.receipt && (
          <>
            <p className="flex flex-col pt-4 font-semibold">Receipt:</p>
            <img className="h-48 w-96 object-none" src={PF + data.receipt} />
          </>
        )}
        <button
          disabled={data.paymentStatus === "Paid"}
          onClick={handleMarkAsPaid}
          className="start-billing-btn"
        >
          Confirm Payment
        </button>
      </section>
    </section>
  );
};

export default EditPayment;
