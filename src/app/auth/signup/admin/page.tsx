
"use client";

import React, { JSX } from "react";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
// import { useAuth } from "@/api/hooks/useAuth";
import { Toast } from "@/app/components/ui/toast";
import { toast } from "@/app/components/hooks/use-toast";

interface SignUpFormValues {
  fullName: string;
  email: string;
  phone: string;
  preferredUrl: string;
  password: string;
  confirmPassword: string;
}

interface ApiError {
  response?: {
    data?: {
      errors?: Array<{ message: string }>;
      message?: string;
    };
  };
  message?: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits")
    .required("Phone number is required"),
  preferredUrl: Yup.string().required("Preferred URL is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
});

export default function OrganizationSignup(): JSX.Element {
  const router = useRouter();
  // const { client } = useAuth();

  const initialValues: SignUpFormValues = {
    fullName: "",
    email: "",
    phone: "",
    preferredUrl: "",
    password: "",
    confirmPassword: "",
  };

  // const { mutate: signUpMutate, isLoading } = useMutation({
  //   mutationFn: async (credentials: SignUpFormValues) => {
      
  //     // transform preferredUrl to full url (adjust per backend expectation)
  //     const payload = {
  //       name: credentials.fullName,
  //       email: credentials.email,
  //       phone: credentials.phone,
  //       preferredUrl: `https://${credentials.preferredUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}`,
  //       password: credentials.password,
  //       confirmPassword: credentials.confirmPassword,
  //     };

  //     const { data } = await client.post("/api/v1/auth/org/register", payload);
  //     return data;
  //   },
  //   onSuccess: () => {
  //     toast({ title: "REGISTRATION SUCCESSFUL!" });
  //     router.replace("/auth/login");
  //   },
  //   onError: (error: ApiError) => {
  //     const message =
  //       error?.response?.data?.errors?.[0]?.message ||
  //       error?.response?.data?.message ||
  //       error?.message ||
  //       "Registration failed";
  //     toast({ title: message });
  //   },
  // });

  const handleSubmit = (values: SignUpFormValues) => {
    // signUpMutate(values);
  };

  return (
    <div className="bg-[#FAF8F8] p-8 rounded-lg shadow-md w-full max-w-md my-4">
      {/* Mobile header: logo + brand (no tagline) */}
      <div className="flex items-center space-x-2 md:hidden mb-4">
        <Avatar asChild>
          <Image width={48} height={48} src="/logo.png" alt="Company Logo" />
        </Avatar>
        <span className="text-md font-bold text-gray-800">Data Capturing</span>
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-2">Sign Up</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <Field type="text" name="fullName" placeholder="Input text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Email address</label>
              <Field type="email" name="email" placeholder="Input text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <Field type="text" name="phone" placeholder="Input text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Preferred Url</label>
              <Field type="text" name="preferredUrl" placeholder="Input text (example: data-capturing.com/your-org or data-capturing.com)" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <ErrorMessage name="preferredUrl" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <Field type="password" name="password" placeholder="********" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
              <Field type="password" name="confirmPassword" placeholder="********" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button type="submit" className="w-full bg-[#EAAB40] text-white rounded-md py-2 mb-4 hover:bg-yellow-600" >
              {/* {isLoading ? "Signing Up..." : "Sign Up"} */}
              Sign Up
            </button>

            <p className="text-center text-gray-500">
              Already Have an account?{" "}
              <a href="/auth/login" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}