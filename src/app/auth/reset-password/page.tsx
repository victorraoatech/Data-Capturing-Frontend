
// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useMutation } from "@tanstack/react-query";
// import { Loader2 } from "lucide-react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";

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

// interface ResetPasswordResponse {
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
//   password: z.string().min(8, "Password must be at least 8 characters"),
//   confirmPassword: z.string(),
//   token: z.string().optional(),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords don't match",
//   path: ["confirmPassword"],
// });

// type ResetPasswordData = z.infer<typeof FormSchema>;

// const ResetPasswordForm = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const token = searchParams.get('token');
//   const { client } = useAuth();

//   const form = useForm<ResetPasswordData>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       password: "",
//       confirmPassword: "",
//       token: token || "",
//     },
//   });

//   const resetPasswordMutation = useMutation({
//     mutationFn: async (data: ResetPasswordData) => {
//       const { data: response } = await client.post<ResetPasswordResponse>(
//         "auth/reset-password",
//         {
//           password: data.password,
//           token: data.token,
//         }
//       );
//       return response;
//     },
//     onSuccess: (data) => {
//       toast({
//         title: "Password Reset!",
//         description: "Your password has been reset successfully.",
//       });
//       router.push("/auth/login");
//     },
//     onError: (error: ApiError) => {
//       const message =
//         error?.response?.data?.errors?.[0]?.message ||
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to reset password. Please try again.";
      
//       toast({
//         title: "Error",
//         description: message,
//         variant: "destructive",
//       });
//     },
//   });

//   const onSubmit = (data: ResetPasswordData) => {
//     if (!data.token) {
//       toast({
//         title: "Error",
//         description: "Invalid reset token",
//         variant: "destructive",
//       });
//       return;
//     }
//     resetPasswordMutation.mutate(data);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>New Password</FormLabel>
//               <FormControl>
//                 <Input 
//                   placeholder="Enter new password" 
//                   type="password"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="confirmPassword"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Confirm New Password</FormLabel>
//               <FormControl>
//                 <Input 
//                   placeholder="Confirm new password" 
//                   type="password"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button
//           type="submit"
//           disabled={resetPasswordMutation.isPending}
//           className="w-full bg-[#EAAB40] hover:bg-yellow-600"
//         >
//           {resetPasswordMutation.isPending ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
//               Resetting...
//             </>
//           ) : (
//             "Reset Password"
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

// export default ResetPasswordForm;

import React from 'react'

const page = () => {
  return (
    <div>
      page
    </div>
  )
}

export default page
