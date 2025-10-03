import LoginForm from "@/app/components/forms/loginForm";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="bg-[#FAF8F8] p-6 rounded-lg shadow-md w-full max-w-md">
      {/* Mobile logo - reduced spacing */}
      <div className="flex items-center space-x-2 md:hidden mb-4">
        <Avatar asChild>
          <Image
            width={48}
            height={12}
            src="/logo.png"
            alt="Company Logo"
            className=""
          />
        </Avatar>
        <span className="text-md font-bold text-gray-800">
          DATA CAPTURING
        </span>
      </div>
      
  
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>

     
      <div className="py-2 mt-4">
        <LoginForm />
      </div>

      <p className="text-start text-gray-500 mt-4">
        Don&apos;t have an account?{" "}
        <a href="/auth/signup" className="text-blue-500 hover:underline">
          Create one
        </a>
      </p>
    </div>
  );
};

export default LoginPage;