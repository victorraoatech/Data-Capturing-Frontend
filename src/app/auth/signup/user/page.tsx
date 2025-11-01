


"use client";

import React, { JSX } from "react";
import { useRouter } from "next/navigation";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/api/hooks/useAuth";
import { toast } from "@/app/components/hooks/use-toast";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
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
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .min(11, "Phone number must be 11 digits")
    .max(11, "Phone number must be 11 digits")
    .required("Phone number is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
});

export default function UserPage(): JSX.Element {
  const router = useRouter();
  const { client } = useAuth();

  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const { mutate: submitMutate, isPending } = useMutation({
    mutationFn: async (values: FormValues) => {
      const payload = {
        fullname: `${values.firstname.trim()} ${values.lastname.trim()}`,
        email: values.email,
        phone: values.phone,
        password: values.password,
        role: "CUSTOMER", 
      };

      const { data } = await client.post("/api/auth/register", payload);
      return data;
    },
    onSuccess: () => {
      toast({ title: "REGISTRATION SUCCESSFUL!" });
      router.replace("/auth/login");
    },
    onError: (error: ApiError) => {
      const message =
        error?.response?.data?.errors?.[0]?.message ||
        error?.response?.data?.message ||
        error?.message ||
        "Registration failed";
      toast({ title: message });
    },
  });

  const handleSubmit = (values: FormValues) => {
    submitMutate(values);
  };

  return (
    <div className="bg-[#FAF8F8] p-8 rounded-lg shadow-md w-full max-w-md my-4">
      {/* Mobile header: logo + brand (no tagline) */}
      <div className="flex items-center space-x-2 md:hidden mb-4">
        {/* <Avatar asChild>
          <Image width={48} height={48} src="/logo.png" alt="Company Logo" />
        </Avatar> */}
        <span className="text-md font-bold text-gray-800">Capture, Visualize, Secure </span>
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-2">Sign Up</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <Field 
                type="text" 
                name="firstname" 
                placeholder="Input text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              />
              <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <Field 
                type="text" 
                name="lastname" 
                placeholder="Input text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              />
              <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Email address</label>
              <Field 
                type="email" 
                name="email" 
                placeholder="Input text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <Field 
                type="text" 
                name="phone" 
                placeholder="Input text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
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

            <button 
              type="submit" 
              className="w-full bg-[#CC44A3CC] text-white rounded-md py-2 mb-4 hover:bg-yellow-600" 
              disabled={isPending}
            >
              {isPending ? "Signing Up..." : "Sign Up"}
            </button>

            <p className="text-center text-gray-500">
              Already Have an account?{" "}
              <a href="/auth/login" className="text-[#CC44A3CC] hover:underline">
                Sign In
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}