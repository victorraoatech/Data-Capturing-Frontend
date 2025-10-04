"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useRouter } from "next/navigation";

import { useAuth } from "@/api/hooks/useAuth";
import { AuthContext, useAuthContext } from "@/AuthContext";
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

const FormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginData = z.infer<typeof FormSchema>;

const LoginForm = () => {
  const router = useRouter();
  const { client } = useAuth();
  const { signIn } = useAuthContext();

  const form = useForm<LoginData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });



  const onSubmit = (data: LoginData) => {
    // loginMutation.mutate(data);
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
            href="#"
            className="text-sm text-gray-500 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <Button
          type="submit"
        //   disabled={loginMutation.isPending}
          className="w-full bg-[#EAAB40] hover:bg-yellow-600"
        >
          {/* {loginMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              Logging in...
            </>
          ) : (
            "Login"
          )} */}

          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;