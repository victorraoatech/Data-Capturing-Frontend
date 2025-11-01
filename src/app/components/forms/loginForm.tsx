

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { Loader2 } from "lucide-react";

// import { useAuthContext } from "@/AuthContext";
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
// import { toast } from "../hooks/use-toast";

// interface LoginResponse {
//   token: string;
//   data: {
//     _id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string | null;
//     organizationId: string;
//     role: string;
//   };
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
//   password: z.string().min(1, "Password is required"),
// });

// type LoginData = z.infer<typeof FormSchema>;

// const LoginForm = () => {
//   const router = useRouter();
//   const { signIn } = useAuthContext();

//   const form = useForm<LoginData>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const loginMutation = useMutation({
//     mutationFn: async (credentials: LoginData) => {
//       const { data } = await axios.post<LoginResponse>(
//         `${process.env.NEXT_PUBLIC_BACKEND_API}api/users/login`,
//         credentials
//       );
//       return data;
//     },
//     onSuccess: (data) => {
//       // Store the token and user data
//       if (data.token) {
//         localStorage.setItem("authToken", data.token);
//         localStorage.setItem("userData", JSON.stringify(data.data));
        
//         // Call signIn from AuthContext if it handles state management
//         if (signIn) {
//           signIn(data.token, data.data);
//         }

//         toast({
//           title: "Login Successful!",
//           description: `Welcome back, ${data.data.firstName}!`,
//         });

//         // Redirect to dashboard or home
//         router.push("/user");
//       }
//     },
//     onError: (error: ApiError) => {
//       const message =
//         error?.response?.data?.errors?.[0]?.message ||
//         error?.response?.data?.message ||
//         error?.message ||
//         "Login failed. Please check your credentials.";
      
//       toast({
//         title: "Login Failed",
//         description: message,
//         variant: "destructive",
//       });
//     },
//   });

//   const onSubmit = (data: LoginData) => {
//     loginMutation.mutate(data);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input 
//                   placeholder="**********" 
//                   type="password"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <div className="flex justify-between items-center mb-4">
//           <label className="flex items-center text-sm text-gray-500">
//             <input type="checkbox" className="mr-2" /> 
//             Remember me
//           </label>
//           <a
//             href="/auth/forgot-password"
//             className="text-sm text-gray-500 hover:underline"
//           >
//             Forgot Password?
//           </a>
//         </div>

//         <Button
//           type="submit"
//           disabled={loginMutation.isPending}
//           className="w-full bg-[#EAAB40] hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loginMutation.isPending ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
//               Logging in...
//             </>
//           ) : (
//             "Login"
//           )}
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default LoginForm;



"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input";
import { Eye, EyeOff } from "lucide-react"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full "
    style={{borderRadius: "40px"}}
    >
      {/* Google Sign Up Button */}

        <button
           
            className="w-full h-[60px] flex items-center justify-center gap-2 border-gray-300 border-[1px] hover:bg-gray-50 bg-white text-gray-900 rounded-[10px] font-manrope text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-700 font-medium">Sign up with Google</span>
          </button>
      {/* <Button
        type="button"
        variant="outline"
        className="w-full h-[60px] flex items-center justify-center gap-2 border-gray-300 border-[1px] hover:bg-gray-50 bg-white text-gray-900 rounded-[10px] font-manrope text-base"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Sign up with Google
      </Button> */}

      <div className="w-full h-[25px] relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-[#FBFAFC] text-gray-500 font-manrope">or</span>
        </div>
      </div>

      {/* First Name Field */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium text-gray-600 font-manrope">First Name</label>
        <Input
          type="text"
          placeholder="Demola"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="w-full h-[60px] border-gray-300 border-[1px] rounded-[10px] px-4 py-3 font-manrope text-base placeholder:text-gray-400"
          required
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <label className="text-xs font-medium text-gray-600 font-manrope">Password</label>
          <a
  href="#"
  style={{
    // @ts-expect-error - custom CSS property not in React types
    textDecorationOffset: "4px",
    lineHeight: "100%",
    letterSpacing: "0%",
  }}
  className="font-manrope text-[16px] font-light text-[#5D2A8B] underline hover:no-underline"
>
  Forgot Password?
</a>
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full h-[60px] border-gray-300 border-[1px] pr-10 rounded-[10px] px-4 py-3 font-manrope text-base placeholder:text-gray-400"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-[60px] bg-[#5D2A8B] hover:bg-purple-700 text-white font-semibold rounded-[10px] mt-4 font-manrope text-base"
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  )
}