
// "use client";

// import React, { JSX } from "react";
// import { Avatar } from "@radix-ui/react-avatar";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Field, Form, Formik, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "@/app/components/hooks/use-toast";
// import axios from "axios";

// interface SignUpFormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirmPassword: string;
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

// const validationSchema = Yup.object({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   email: Yup.string().email("Invalid email address").required("Email is required"),
//   phone: Yup.string()
//     .matches(/^\+?[0-9]{10,15}$/, "Phone number must be valid (10-15 digits)")
//     .required("Phone number is required"),
//   password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// export default function OrganizationSignup(): JSX.Element {
//   const router = useRouter();

//   const initialValues: SignUpFormValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   };

//   const { mutate: signUpMutate, isPending } = useMutation({
//     mutationFn: async (credentials: SignUpFormValues) => {
//       // Format phone number - add + prefix if not present
//       const formattedPhone = credentials.phone.startsWith("+") 
//         ? credentials.phone 
//         : `+${credentials.phone}`;

//       const payload = {
//         email: credentials.email,
//         password: credentials.password,
//         first_name: credentials.firstName,
//         last_name: credentials.lastName,
//         phone: formattedPhone,
//       };

//       const { data } = await axios.post(
//         `${process.env.NEXT_PUBLIC_BACKEND_API}auth/signup`,
//         payload
//       );
//       return data;
//     },
//     onSuccess: (data) => {
//       toast({ 
//         title: "Registration Successful!", 
//         description: "Your account has been created successfully." 
//       });
//       router.push("/auth/login");
//     },
//     onError: (error: ApiError) => {
//       const message =
//         error?.response?.data?.errors?.[0]?.message ||
//         error?.response?.data?.message ||
//         error?.message ||
//         "Registration failed. Please try again.";
//       toast({ 
//         title: "Registration Failed", 
//         description: message,
//         variant: "destructive" 
//       });
//     },
//   });

//   const handleSubmit = (values: SignUpFormValues) => {
//     signUpMutate(values);
//   };

//   return (
//     <div className="bg-[#FAF8F8] p-8 rounded-lg shadow-md w-full max-w-md my-4">
//       {/* Mobile header: logo + brand */}
//       <div className="flex items-center space-x-2 md:hidden mb-4">
//         <Avatar asChild>
//           <Image width={48} height={48} src="/logo.png" alt="Company Logo" />
//         </Avatar>
//         <span className="text-md font-bold text-gray-800">Data Capturing</span>
//       </div>

//       <h2 className="text-2xl font-bold mb-6 mt-2 text-gray-800">Sign Up</h2>

//       <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//         {() => (
//           <Form>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">First Name</label>
//               <Field 
//                 type="text" 
//                 name="firstName" 
//                 placeholder="Enter your first name" 
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
//               />
//               <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Last Name</label>
//               <Field 
//                 type="text" 
//                 name="lastName" 
//                 placeholder="Enter your last name" 
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
//               />
//               <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Email Address</label>
//               <Field 
//                 type="email" 
//                 name="email" 
//                 placeholder="your.email@example.com" 
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
//               />
//               <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
//               <Field 
//                 type="text" 
//                 name="phone" 
//                 placeholder="+2348144782521" 
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
//               />
//               <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Password</label>
//               <Field 
//                 type="password" 
//                 name="password" 
//                 placeholder="********" 
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
//               />
//               <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
//             </div>

//             <div className="mb-4">
//               <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
//               <Field 
//                 type="password" 
//                 name="confirmPassword" 
//                 placeholder="********" 
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
//               />
//               <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
//             </div>

//             <button 
//               type="submit" 
//               disabled={isPending}
//               className="w-full bg-[#EAAB40] text-white rounded-md py-2 mb-4 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" 
//             >
//               {isPending ? "Signing Up..." : "Sign Up"}
//             </button>

//             <p className="text-center text-gray-500">
//               Already Have an account?{" "}
//               <a href="/auth/login" className="text-blue-500 hover:underline">
//                 Sign In
//               </a>
//             </p>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }



"use client";

import React, { JSX, useState } from "react";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { useAuth } from "@/api/hooks/useAuth"; 
import { toast } from "@/app/components/hooks/use-toast";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";

// TYPES AND INTERFACES
interface SignUpResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  data: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    organizationId: string;
    role: string;
  };
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
      errors?: Array<{ message: string }>;
    };
  };
  message: string;
}

// DEFINE THE FORM SCHEMA
const FormSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Phone number must be valid (10-15 digits)"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof FormSchema>;

export default function OrganizationSignup(): JSX.Element {
  const router = useRouter();
  const { client } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  // SIGN UP MUTATION
  const SignUpMutation = useMutation<SignUpResponse, ApiError, SignUpData>({
    mutationFn: async (credentials) => {
      // Format phone number - add + prefix if not present
      const formattedPhone = credentials.phone.startsWith("+") 
        ? credentials.phone 
        : `+${credentials.phone}`;

      const payload = {
        email: credentials.email,
        password: credentials.password,
        first_name: credentials.firstName,
        last_name: credentials.lastName,
        phone: formattedPhone,
      };

      const { data } = await client.post("/auth/signup", payload);
      return data;
    },
    onSuccess: (data) => {
      console.log("Registration successful", data);
      toast({
        title: "Registration Successful!",
        description: "Your account has been created successfully.",
      });
      router.push("/auth/login");
    },
    onError: (error: ApiError) => {
      console.log(error);
      const errorMessage = error.response?.data?.message || error.message || "Registration failed. Please try again.";
      setError(errorMessage);
      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  // HANDLE SUBMIT
  const onSubmit = (data: SignUpFormValues) => {
    setError(null);
    SignUpMutation.mutate(data);
  };

  return (
    <div className="bg-[#FAF8F8] p-8 rounded-lg shadow-md w-full max-w-md my-4">
      {/* Mobile header: logo + brand */}
      <div className="flex items-center space-x-2 md:hidden mb-4">
        <Avatar asChild>
          <Image width={48} height={48} src="/logo.png" alt="Company Logo" />
        </Avatar>
        <span className="text-md font-bold text-gray-800">Data Capturing</span>
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-2 text-gray-800">Sign Up</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid  gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+2348144782521" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={SignUpMutation.isPending}
            className="w-full bg-[#EAAB40] hover:bg-yellow-600"
          >
            {SignUpMutation.isPending ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>

          <p className="text-center text-gray-500">
            Already Have an account?{" "}
            <a href="/auth/login" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </Form>
    </div>
  );
}