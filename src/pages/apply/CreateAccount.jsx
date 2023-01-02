import React, { useContext, useRef, useState } from "react";
import { axiosInstance, delay } from "../../config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Title from "../../components/Title";
import Modal from "../../components/Modal";
import Modal2 from "../../components/Modal2";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

//firebase
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../data/firebase";

const CreateAccount = () => {
  const { dispatch } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const from = location.state?.from?.pathname || "/client-dashboard";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const setProofUrlRef = useRef();
  const uploadProof = (values) => {
    // const filename = Date.now() + values.legalDocument.name;
    // const data = new FormData();
    // data.append("name", filename);
    // data.append("file", values.legalDocument);
    // const fileURL = filename;
    setIsLoading(true);

    if (values?.legalDocument == null) {
      setIsLoading(false);
      return;
    }
    const imageRef = ref(storage, `images/${values.legalDocument.name + v4()}`);
    uploadBytes(imageRef, values.legalDocument)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setProofUrlRef.current = url;
          sendHandler(values);
        });
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  const sendHandler = async (values) => {
    axiosInstance.post("api/sms/application-passed", {
      number: values.contactNumber.replace("+", ""),
    });
    axios.post(
      "https://api.engagespot.co/v3/notifications",
      {
        notification: {
          title: `${values.firstName} ${values.lastName} subscribes to Plan ${values.selectedPlan}`,
          url: "https://aiointernet.online/admin-dashboard/subscribers",
        },
        recipients: ["ezikielpuratulawan@gmail.com"],
      },
      {
        headers: {
          "X-ENGAGESPOT-API-KEY": "mpz2fsz9ftitwmf3h050wi",
          "X-ENGAGESPOT-API-SECRET":
            "1jenirs3l2npkbbbc53hkipba1i280da19ca791bjdeih965d",
        },
      }
    );
    try {
      const res = await axiosInstance.post("api/auth/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,

        address: values.address,
        contactNumber: values.contactNumber,
        selectedPlan: values.selectedPlan,
        legalDocument: setProofUrlRef.current,
      });
      console.log("bagoooooo: ", res.data._id);
      axiosInstance.post("api/email/verify", {
        to: res.data.email,
        _id: res.data._id,
      });

      toast.success(
        "Account Successfully Created. Please check your email to verify."
      );
      // dispatch({ type: "LOGIN", payload: res.data });
      await delay(3000);
      navigate("/login", { replace: true });
    } catch (err) {
      toast.error("Account Registration Failed");
      console.log(err);
    }
  };
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters.")
      .max(20, "Maximum of 20 characters only")
      .matches(/^[a-zA-Z ]*$/, "Numbers are not allowed"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters.")
      .max(20, "Maximum of 20 characters only")
      .matches(/^[a-zA-Z ]*$/, "Numbers are not allowed"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .max(50, "Maximum of 50 characters only"),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Your password is too short."),
    confirmPassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
    address: yup.string().required("Address is required"),
    contactNumber: yup
      .string()
      .required("Contact number is required")
      .matches(
        /^(\+639)\d{9}$/,
        "Must be valid a contact number (+639XXXXXXXXX)"
      ),
    selectedPlan: yup.string().required("Plan is required"),
    legalDocument: yup.mixed().required("Legal document is required"),
    acceptedTerms: yup
      .boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
    acceptedPrivacyPolicy: yup
      .boolean()
      .required("Required")
      .oneOf([true], "You must accept the Privacy Policy."),
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };

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

  return (
    <section className="container min-h-screen px-4">
      <Toaster />
      <header className="pt-12">
        <Title title="Create an Account" />
      </header>
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
          contactNumber: "+639",
          selectedPlan: plans[0].value,
          legalDocument: "",
          acceptedTerms: false,
        }}
        onSubmit={(values) => uploadProof(values)}
      >
        {({ setFieldValue }) => (
          <Form action="" className="mt-10 mb-16 w-full md:w-1/2">
            <Field name="firstName">
              {({ field, form }) => (
                <div className="mb-4 flex flex-col">
                  <label className="pb-1 text-sm font-semibold">
                    First Name
                  </label>
                  <input
                    {...field}
                    type="text"
                    className="rounded border-gray-400"
                    name="firstName"
                    style={
                      form.touched.firstName && form.errors.firstName
                        ? { border: "1px solid red" }
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="firstName"
              component="div"
              className="my-2 text-xs italic text-red-400"
            />

            <Field name="lastName">
              {({ field, form }) => (
                <div className="mb-4 flex flex-col">
                  <label className="pb-1 text-sm font-semibold">
                    Last Name
                  </label>
                  <input
                    {...field}
                    type="text"
                    className="rounded border-gray-400"
                    name="lastName"
                    style={
                      form.touched.lastName && form.errors.lastName
                        ? { border: "1px solid red" }
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="lastName"
              component="div"
              className="my-2 text-xs italic text-red-400"
            />

            <Field name="email">
              {({ field, form }) => (
                <div className="mb-4 flex flex-col">
                  <label className="pb-1 text-sm font-semibold">Email</label>
                  <input
                    {...field}
                    type="email"
                    className="rounded border-gray-400"
                    name="email"
                    style={
                      form.touched.email && form.errors.email
                        ? { border: "1px solid red" }
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="email"
              component="div"
              className="  my-2 text-xs italic text-red-400"
            />

            <Field name="password">
              {({ field, form }) => (
                <div className="mb-4 flex flex-col">
                  <label className="pb-1 text-sm font-semibold">Password</label>
                  <input
                    {...field}
                    type="password"
                    className="rounded border-gray-400"
                    name="password"
                    style={
                      form.touched.password && form.errors.password
                        ? { border: "1px solid red" }
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="password"
              component="div"
              className=" my-2 text-xs italic text-red-400"
            />

            <Field name="confirmPassword">
              {({ field, form }) => (
                <div className="mb-4 flex flex-col">
                  <label className="pb-1 text-sm font-semibold">
                    Confirm Password
                  </label>
                  <input
                    {...field}
                    type="password"
                    className="rounded border-gray-400"
                    name="confirmPassword"
                    style={
                      form.touched.confirmPassword &&
                      form.errors.confirmPassword
                        ? { border: "1px solid red" }
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="my-2 text-xs italic text-red-400"
            />

            <Field name="contactNumber">
              {({ field, form }) => (
                <div className="mb-4 flex flex-col">
                  <label className="pb-1 text-sm font-semibold">
                    Contact Number
                  </label>
                  <input
                    {...field}
                    type="tel"
                    className="rounded border-gray-400"
                    name="contactNumber"
                    style={
                      form.touched.contactNumber && form.errors.contactNumber
                        ? { border: "1px solid red" }
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="contactNumber"
              component="div"
              className="my-2 text-xs italic text-red-400"
            />

            <Field name="address">
              {({ field, form }) => (
                <div className="mb-4 flex flex-col">
                  <label className="pb-1 text-sm font-semibold">
                    Full Address
                  </label>
                  <input
                    {...field}
                    type="text"
                    className="rounded border-gray-400"
                    name="address"
                    style={
                      form.touched.address && form.errors.address
                        ? { border: "1px solid red" }
                        : null
                    }
                  />
                </div>
              )}
            </Field>
            <ErrorMessage
              name="address"
              component="div"
              className="my-2 text-xs italic text-red-400"
            />

            <div className="mb-4 flex flex-col">
              <label className="pb-1 text-sm font-semibold">Select Plan</label>
              <Field as="select" name="selectedPlan">
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.value}>
                    {plan.name}
                  </option>
                ))}
              </Field>
            </div>

            <div className="flex flex-col">
              <label className="pb-1 text-sm font-semibold">
                Upload Valid ID (Driver's License, Company or Any Government ID)
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("legalDocument", event.currentTarget.files[0]);
                }}
              />
              <small className="mt-2 font-medium text-red-600">
                Only JPG/JPEG, PNG files are allowed
              </small>
            </div>
            <ErrorMessage
              name="legalDocument"
              component="div"
              className="mt-2 text-xs italic text-red-400"
            />

            <div className="mt-6 mb-2 flex items-center">
              <input
                type="checkbox"
                className="checked:bg-primary"
                name="acceptedTerms"
                onChange={() => {
                  setFieldValue("acceptedTerms", true);
                }}
              />
              <p className="pl-2 text-sm">
                I have read and agreed to the{" "}
                <span className="font-semibold text-primary">
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="underline"
                    title="Open Terms & Conditions"
                  >
                    Terms and Conditions
                  </button>
                </span>
              </p>
            </div>
            <div className="mt-2 mb-5 flex items-center">
              <input
                type="checkbox"
                className="checked:bg-primary"
                name="acceptedPrivacyPolicy"
                onChange={() => {
                  setFieldValue("acceptedPrivacyPolicy", true);
                }}
              />
              <p className="pl-2 text-sm">
                I have read and agreed to Aio to use my information accordance
                with their{" "}
                <span className="font-semibold text-primary">
                  <button
                    type="button"
                    onClick={handleOpenModal2}
                    className="underline"
                    title="Privacy Policy"
                  >
                    Privacy Policy
                  </button>
                </span>
              </p>
            </div>
            <ErrorMessage
              name="acceptedPrivacyPolicy"
              component="div"
              className="mb-6 text-xs italic text-red-400"
            />

            <input
              type={!isLoading ? "submit" : "button"}
              value={!isLoading ? "Submit" : "Submitting..."}
              className="w-full cursor-pointer rounded bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primaryHover md:w-auto"
            />
          </Form>
        )}
      </Formik>
      <Modal open={openModal} close={() => setOpenModal(false)} />
      <Modal2 open={openModal2} close={() => setOpenModal2(false)} />
    </section>
  );
};

export default CreateAccount;
