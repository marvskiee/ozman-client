import React from "react";
import { axiosInstance, delay } from "../../../config";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";

const AddUser = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Your password is too short."),
    address: yup.string().required("Address is required"),
    contactNumber: yup.string().required("Contact number is required"),
    legalDocument: yup.mixed().required("Valid ID is required"),
  });

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
    <section>
      <Toaster />
      <h2 className="text-xl font-bold">Add User</h2>

      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          address: "",
          contactNumber: "",
          accountNumber: "",
          selectedPlan: "Plan 999 - 10 Mbps",
          legalDocument: "",
        }}
        onSubmit={async (values) => {
          try {
            const filename = Date.now() + values.legalDocument.name;
            const data = new FormData();
            data.append("name", filename);
            data.append("file", values.legalDocument);
            const fileURL = filename;

            axiosInstance.post("/api/upload", data);
            const res = await axiosInstance.post("/api/auth/register", {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
              address: values.address,
              contactNumber: values.contactNumber,
              selectedPlan: values.selectedPlan,
              legalDocument: fileURL,
            });
            console.log(res);
            toast.success("Account Successfully Created");
            await delay(3000);
            navigate(-1);
          } catch (err) {
            console.log(err);
            toast.error("Failed to Create Account");
          }
          console.log(values.legalDocument.name);
        }}
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
              className="my-2 text-right text-xs italic text-red-400"
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
              className="my-1 text-right text-xs italic text-red-400"
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
              className="my-1 text-right text-xs italic text-red-400"
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
              className="my-1 text-right text-xs italic text-red-400"
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
              className="text-right text-xs italic text-red-400"
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
              className="text-right text-xs italic text-red-400"
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
              className="text-right text-xs italic text-red-400"
            />

            <input
              type="submit"
              value="Submit"
              className="w-full cursor-pointer rounded bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primaryHover md:w-auto"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddUser;
