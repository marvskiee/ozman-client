import { useEffect, useState, useMemo, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Pending from "../../../components/Pending";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config";
import ViewOnlyTable from "../../../components/ViewOnlyTable";
import NoBalance from "../../../components/NoBalance";

const HomeDashboard = () => {
  const customerName = JSON.parse(localStorage.getItem("user"));
  const firstName = customerName.firstName;
  const id = customerName._id;
  const applicationStatus = customerName.applicationStatus;

  const [paymentData, setPaymentData] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [date, setDate] = useState();
  const [coverage, setCoverage] = useState();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    setLoading(true);
    getSingleUserPayment();
    getUserPaidDues();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "payment-history-copy",
  });

  const getSingleUserPayment = async () => {
    const name = customerName.firstName + " " + customerName.lastName;
    await axiosInstance
      .get("/api/payments/user-payments/" + name)
      .then((res) => {
        let payments = res.data;
        if (payments.length !== 0) {
          setPaymentData(payments);
          setDate(payments[0].paymentStart);
          setCoverage(payments[0].paymentDue);
        }
        setLoading(false);
      });
  };

  const getUserPaidDues = async () => {
    const name = customerName.firstName + " " + customerName.lastName;
    await axiosInstance
      .get("/api/payments/user-paid-payments/" + name)
      .then((res) => {
        let payments = res.data;
        if (payments.length !== 0) {
          setPaymentHistory(payments);
          setDate(payments[0].paymentStart);
          setCoverage(payments[0].paymentDue);
        }
        setLoading(false);
        console.log(res.data);
      });
  };

  const handleClick = () => {
    navigate(`/client-dashboard/payment/${paymentData[0]._id}`, {
      state: paymentData[0]._id,
    });
  };

  const paymentsColumns = useMemo(
    () => [
      {
        Header: "Reference No.",
        accessor: "_id",
      },
      {
        Header: "Bill Coverage",
        accessor: "paymentDue",
        Cell: (e) => {
          const date = new Date(e.value).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
          return <p>{date}</p>;
        },
      },
      {
        Header: "Payment Due",
        accessor: "paymentStart",
        Cell: (e) => {
          const date = new Date(e.value).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
          return <p>{date}</p>;
        },
      },
      {
        Header: "Payment Status",
        accessor: "paymentStatus",
      },
    ],
    []
  );

  return (
    <section className="container px-4 py-12">
      <h1 className="text-2xl font-bold">Welcome, {firstName}!</h1>
      {applicationStatus === "Approved" ? (
        <>
          {paymentData.length !== 0 ? (
            <div>
              <p className="pt-1 text-sm">
                Account Number: {customerName?.accountNumber}
              </p>

              <section className="py-6">
                <h2 className="pb-1 text-lg font-semibold">Balance</h2>
                <button
                  onClick={handleClick}
                  className="mb-5 rounded bg-primary px-3 py-2 text-sm text-white transition hover:bg-primaryHover"
                >
                  Upload Receipt
                </button>
                <button
                  onClick={handlePrint}
                  className="mx-2 mb-5 rounded bg-gray-500 px-3 py-2 text-sm text-white transition hover:bg-gray-600"
                >
                  Print Balance Report
                </button>
                <article className="w-full rounded bg-white p-6 shadow-md">
                  <section className="space-x- flex items-center gap-4">
                    <div className="w-full">
                      <h3 className="pb-3 font-semibold">Bill Coverage</h3>
                      <p>
                        {new Date(coverage).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="w-full">
                      <h3 className="pb-3 font-semibold">Due Date</h3>
                      <p>
                        {new Date(date).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="w-full">
                      <h3 className="pb-3 font-semibold">Amount</h3>
                      <p>₱{paymentData[0].amount}</p>
                    </div>
                  </section>
                  <footer className="mt-4 rounded bg-primary p-4 text-white">
                    <section className="flex items-center space-x-2">
                      <p>Total:</p>
                      <p>₱{paymentData[0].amount}</p>
                    </section>
                  </footer>
                </article>
              </section>
            </div>
          ) : (
            <NoBalance />
          )}
          <ViewOnlyTable
            columns={paymentsColumns}
            data={paymentHistory}
            reference={componentRef}
          />
        </>
      ) : (
        <>
          <Pending />
        </>
      )}
    </section>
  );
};

export default HomeDashboard;
