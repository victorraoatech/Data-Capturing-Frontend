

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";

import { useAuthContext } from "@/AuthContext";
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
import { toast } from "../hooks/use-toast";

interface LoginResponse {
  token: string;
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

interface ApiError {
  response?: {
    data?: {
      errors?: Array<{ message: string }>;
      message?: string;
    };
  };
  message?: string;
}

const FormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginData = z.infer<typeof FormSchema>;

const LoginForm = () => {
  const router = useRouter();
  const { signIn } = useAuthContext();

  const form = useForm<LoginData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      const { data } = await axios.post<LoginResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_API}api/users/login`,
        credentials
      );
      return data;
    },
    onSuccess: (data) => {
      // Store the token and user data
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userData", JSON.stringify(data.data));
        
        // Call signIn from AuthContext if it handles state management
        if (signIn) {
          signIn(data.token, data.data);
        }

        toast({
          title: "Login Successful!",
          description: `Welcome back, ${data.data.firstName}!`,
        });

        // Redirect to dashboard or home
        router.push("/user");
      }
    },
    onError: (error: ApiError) => {
      const message =
        error?.response?.data?.errors?.[0]?.message ||
        error?.response?.data?.message ||
        error?.message ||
        "Login failed. Please check your credentials.";
      
      toast({
        title: "Login Failed",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LoginData) => {
    loginMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input 
                  placeholder="example@mail.com" 
                  type="email"
                  {...field} 
                />
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
                <Input 
                  placeholder="**********" 
                  type="password"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center text-sm text-gray-500">
            <input type="checkbox" className="mr-2" /> 
            Remember me
          </label>
          <a
            href="/auth/forgot-password"
            className="text-sm text-gray-500 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <Button
          type="submit"
          disabled={loginMutation.isPending}
          className="w-full bg-[#EAAB40] hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loginMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;

