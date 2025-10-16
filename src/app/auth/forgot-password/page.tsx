// app/auth/forgot-password/ForgotPasswordForm.tsx
// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useMutation } from "@tanstack/react-query";
// import { Loader2 } from "lucide-react";
// import Link from "next/link";

// import { useAuth } from "@/api/hooks/useAuth";
// import { Button } from "@/app/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/app/components/ui/form";
// import { Input } from "@/app/components/ui/input";
// import { toast } from "@/app/components/hooks/use-toast";

// interface ForgotPasswordResponse {
//   message: string;
//   success: boolean;
// }

// interface ApiError {
//   response?: {
//     data?: {
//       errors?: Array<{ message: string }>;
//       message?: string;
//     };
//   };
//   message?: string;
// }

// const FormSchema = z.object({
//   email: z.string().email("Invalid email address"),
// });

// type ForgotPasswordData = z.infer<typeof FormSchema>;

// const ForgotPasswordForm = () => {
//   const { client } = useAuth();

//   const form = useForm<ForgotPasswordData>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       email: "",
//     },
//   });

//   const forgotPasswordMutation = useMutation({
//     mutationFn: async (data: ForgotPasswordData) => {
//       const { data: response } = await client.post<ForgotPasswordResponse>(
//         "auth/forgot-password",
//         data
//       );
//       return response;
//     },
//     onSuccess: (data) => {
//       toast({
//         title: "Email Sent!",
//         description: "Check your email for a password reset link.",
//       });
//       form.reset();
//     },
//     onError: (error: ApiError) => {
//       const message =
//         error?.response?.data?.errors?.[0]?.message ||
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to send reset email. Please try again.";
      
//       toast({
//         title: "Error",
//         description: message,
//         variant: "destructive",
//       });
//     },
//   });

//   const onSubmit = (data: ForgotPasswordData) => {
//     forgotPasswordMutation.mutate(data);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email Address</FormLabel>
//               <FormControl>
//                 <Input 
//                   placeholder="example@mail.com" 
//                   type="email"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button
//           type="submit"
//           disabled={forgotPasswordMutation.isPending}
//           className="w-full bg-[#EAAB40] hover:bg-yellow-600"
//         >
//           {forgotPasswordMutation.isPending ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
//               Sending...
//             </>
//           ) : (
//             "Send Reset Link"
//           )}
//         </Button>

//         <div className="text-center">
//           <Link 
//             href="/auth/login" 
//             className="text-sm text-blue-500 hover:underline"
//           >
//             Back to Login
//           </Link>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default ForgotPasswordForm;

"use client";

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Head from 'next/head';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/api/hooks/useAuth';

interface ForgotPasswordResponse {
  message: string;
  success: boolean;
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

interface RequestStatus {
  success: boolean;
  message: string;
}

interface FormValues {
  email: string;
}

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPasswordPage = () => {
  const { client } = useAuth();
  const [requestStatus, setRequestStatus] = useState<RequestStatus>({
    success: false,
    message: '',
  });

  const forgotPasswordMutation = useMutation<
    ForgotPasswordResponse,
    ApiError,
    string
  >({
    mutationFn: async (email: string) => {
      const { data } = await client.post<ForgotPasswordResponse>(
        'auth/forgot-password',
        { email }
      );
      return data;
    },
    onSuccess: (data) => {
      setRequestStatus({
        success: true,
        message: data.message || 'Password reset link sent successfully!',
      });
    },
    onError: (error: ApiError) => {
      const message =
        error?.response?.data?.errors?.[0]?.message ||
        error?.response?.data?.message ||
        error?.message ||
        'Failed to send reset email. Please try again.';
      
      setRequestStatus({
        success: false,
        message,
      });
    },
  });

  const handleSubmit = (
    values: FormValues, 
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setRequestStatus({ success: false, message: '' });
    forgotPasswordMutation.mutate(values.email, {
      onSettled: () => {
        setSubmitting(false);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F8]">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Forgot Password
            </h1>
            <p className="text-gray-600 mt-2">
              Enter your email and we&apos;ll send you a link to reset your
              password
            </p>
          </div>

          {requestStatus.success ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
              <p>{requestStatus.message}</p>
              <p className="mt-2">
                Please check your email for further instructions.
              </p>
            </div>
          ) : (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="your@email.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {requestStatus.message && !requestStatus.success && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                      {requestStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`w-full bg-[#EAAB40] text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Reset Link"}
                  </button>
                </Form>
              )}
            </Formik>
          )}

          <div className="text-center mt-6">
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-800"
            >
              Remember your password? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;