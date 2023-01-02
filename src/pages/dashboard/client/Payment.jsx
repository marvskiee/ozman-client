import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { axiosInstance, delay } from "../../../config";

//firebase
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../data/firebase";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;
  const [receipt, setReceipt] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const setProofUrlRef = useRef();
  const uploadProof = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (receipt == null) {
      setIsLoading(false);
      return;
    }
    const imageRef = ref(storage, `images/${receipt.name + v4()}`);
    uploadBytes(imageRef, receipt)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setProofUrlRef.current = url;
          handlePayment();
        });
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  const handlePayment = async () => {
    if (receipt) {
      try {
        const res = await axiosInstance.put(
          "/api/payments/mark-pending/" + id,
          {
            id: id,
            receipt: setProofUrlRef.current,
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
      <form className="mt-10 mb-16 w-full md:w-1/2" onSubmit={uploadProof}>
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
              className="mt-2 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm font-normal text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
              multiple
            />
          </label>
        </div>

        <input
          type={!isLoading ? "submit" : "button"}
          value={!isLoading ? "Submit" : "Submitting..."}
          className="w-full cursor-pointer rounded bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-primaryHover md:w-auto"
        />
      </form>
    </section>
  );
};

export default Payment;
