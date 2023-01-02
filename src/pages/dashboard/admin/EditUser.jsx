import React, { useState } from "react";
import { axiosInstance, delay } from "../../../config";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  console.log(data);
  const path = location.pathname.split("/")[2];
  //  const PF = "https://aiointernet.herokuapp.com/files/"; // TODO: Uncomment in production
  const PF = "http://localhost:8080/files/"; // TODO: Remove thin in production

  const plans = [
    {
      id: 1,
      value: "Plan 999 - 10 Mbps",
      name: "Plan 999 - 10 Mbps",
    },
    {
      id: 2,
      value: "Plan 1499 - 20 Mbps",
      name: "Plan 1499 - 20 Mbps",
    },
    {
      id: 3,
      value: "Plan 1699 - 30 Mbps",
      name: "Plan 1699 - 30 Mbps",
    },
  ];

  const handleUpdate = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;
    const contactNumber = e.target.contactNumber.value;
    const selectedPlan = e.target.plans.value;
    try {
      const res = await axiosInstance.put(
        "/api/users/update-user/" + data._id,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          address: address,
          contactNumber: contactNumber,
          selectedPlan: selectedPlan,
        }
      );
      toast.success("Account Successfully Updated");
      await delay(3000);
      res.data && navigate(-1);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Update Account");
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(
        "/api/users/delete-user/" + data._id,
        {
          id: data._id,
        }
      );
      toast.success("Account Successfully Deleted");
      await delay(3000);
      res.data && navigate(-1);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Delete Account");
    }
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleApprove = async () => {
    try {
      axiosInstance.post("api/sms/application-approved", {
        number: data.contactNumber.replace("+", ""),
      });
      // const res = await axiosInstance.put("/api/users/approve-application/" + data._id, {
      //   id: data._id,
      //   applicationStatus: "Approved",
      //   contactNumber: data.contactNumber,
      //   accountNumber: randomNumberInRange(1000000000000, 9999999999999).toString(),
      //  });
      await axiosInstance.put("/api/users/approve-application/" + data._id, {
        id: data._id,
        applicationStatus: "Approved",
        contactNumber: data.contactNumber,
        accountNumber: randomNumberInRange(
          1000000000000,
          9999999999999
        ).toString(),
      });
      toast.success("Application has been Approved");
      await delay(3000);
      //  res.data && navigate(-1);
      navigate(-1);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Update Application");
    }
  };

  const handleStartBilling = async () => {
    console.log("should start billing");
    console.log(data);
    try {
      axiosInstance.post("api/sms/start-billing", {
        number: data.contactNumber.replace("+", ""),
      });
      const res = await axiosInstance.post(
        "/api/payments/start-billing/" + data._id,
        {
          name: data.firstName + " " + data.lastName,
          date: new Date(),
          amount: data.selectedPlan,
          accountNumber: data.accountNumber,
          subscriberEmail: data.email,
        }
      );
      toast.success("Billing has been Started");
      await delay(3000);
      res.data && navigate(-1);
    } catch (err) {
      console.log(err);
      toast.error("Failed to Start Billing");
    }
  };

  return (
    <section className="container min-h-screen">
      <Toaster />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Edit User</h2>
          {data.accessLevel === "Customer" && (
            <h3 className="text-base font-medium">
              Application Status: {data.applicationStatus}
            </h3>
          )}
          {data.accessLevel === "Customer" && (
            <h3 className="text-base font-medium">
              Billing Status: {data.billingStatus}
            </h3>
          )}
        </div>
        <div>
          {data.applicationStatus === "Pending" &&
            data.accessLevel === "Customer" && (
              <button
                onClick={handleApprove}
                className="w-full cursor-pointer rounded bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primaryHover md:w-auto"
              >
                Approve Application
              </button>
            )}
          {data.applicationStatus === "Approved" &&
            data.accessLevel === "Customer" && (
              <button
                disabled={data.billingStatus === "Started"}
                onClick={handleStartBilling}
                className="start-billing-btn"
              >
                Start Billing
              </button>
            )}
        </div>
      </div>

      <form
        action=""
        className="mt-10 mb-16 w-full md:w-1/2"
        onSubmit={handleUpdate}
      >
        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">First Name</label>
          <input
            defaultValue={data.firstName}
            type="text"
            name="fname"
            className="rounded border-gray-400"
            id="firstName"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Last Name</label>
          <input
            defaultValue={data.lastName}
            type="text"
            name="lname"
            className="rounded border-gray-400"
            id="lastName"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Email</label>
          <input
            defaultValue={data.email}
            type="email"
            name="email"
            className="rounded border-gray-400"
            id="email"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Password</label>
          <input
            defaultValue
            type="password"
            className="rounded border-gray-400"
            id="password"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Contact Number</label>
          <input
            defaultValue={data.contactNumber}
            type="text"
            name="contact"
            className="rounded border-gray-400"
            id="contactNumber"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Full Address</label>
          <input
            defaultValue={data.address}
            type="text"
            name="address"
            className="rounded border-gray-400"
            id="address"
          />
        </div>

        {data.accessLevel === "Customer" && (
          <>
            <div className="mb-4 flex flex-col">
              <label className="pb-1 text-sm font-semibold">Select Plan</label>
              <select
                name="plans"
                id="plans"
                className="rounded border-gray-400"
                defaultValue={data.selectedPlan}
              >
                {plans.map((plan) => (
                  <option key={plan.id} name="plan" value={plan.value}>
                    {plan.name}
                  </option>
                ))}
              </select>
            </div>

            {data.legalDocument && (
              <div className="mb-6 flex flex-col">
                <label className="pb-1 text-sm font-semibold">
                  Valid Document
                </label>
                <a
                  href={PF + data.legalDocument}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pb-1 text-sm font-semibold underline hover:underline"
                >
                  Preview
                </a>
              </div>
            )}

            <div className="space-x-2">
              <input
                type="submit"
                value="Update"
                className="w-100 cursor-pointer rounded bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primaryHover md:w-auto"
              />
              <button
                value="Delete"
                onClick={handleDelete}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default EditUser;
