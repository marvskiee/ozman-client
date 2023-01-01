import React, { useEffect } from "react";
import { axiosInstance } from "../config";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

const Support = () => {
 const navigate = useNavigate();
 useEffect(() => {
  // scroll to top
  window.scrollTo(0, 0);
 }, []);

 const handleCreateInquiry = async (e) => {
  e.preventDefault();
  const subscriberName = e.target.subscriberName.value;
  const accountNumber = e.target.accountNumber.value;
  const subject = e.target.subject.value;
  const concern = e.target.type.value;
  try {
   const res = await axiosInstance.post("api/inquiries/add-inquiry", {
    subscriberName,
    accountNumber,
    subject,
    concern,
   });
   navigate(-1);
  } catch (err) {
   console.log(err);
  }
 };

 return (
  <section className="container py-12 px-4">
   <Title title="Message Us" />

   <form className="mt-8 w-full md:w-1/2" onSubmit={handleCreateInquiry}>
    <div className="mb-4 flex flex-col">
     <label className="pb-1 text-sm font-semibold">Subscriber Name</label>
     <input type="text" className="rounded border-gray-400" id="subscriberName" />
    </div>

    <div className="mb-4 flex flex-col">
     <label className="pb-1 text-sm font-semibold">Account Number</label>
     <input type="text" className="rounded border-gray-400" id="accountNumber" />
    </div>

    <div className="mb-4 flex flex-col">
     <label className="pb-1 text-sm font-semibold">Subject of Concern</label>
     <input type="text" className="rounded border-gray-400" id="subject" />
    </div>

    <div className="mb-4 flex flex-col">
     <label className="pb-1 text-sm font-semibold">Type of Concern</label>
     <textarea type="text" className="rounded border-gray-400" id="type" />
    </div>

    <input type="submit" value="Submit" className="w-full cursor-pointer rounded bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primaryHover md:w-auto" />
   </form>
  </section>
 );
};

export default Support;
