


import LoginForm from "@/app/components/forms/loginForm"
import Image from "next/image"

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-white">
      <div className="w-full max-w-[1349px] h-auto md:h-[935px] flex flex-col md:flex-row items-stretch overflow-hidden gap-10">
        
        <div className="hidden md:block md:w-[700px] h-full">
          <Image
            src="/Frame 1.png"
            alt="Data Capturing Illustration"
            width={700}
            height={935}
            priority
            className="w-full h-full object-cover rounded-l-[40px]"
          />
        </div>

      
        <div className="w-full md:w-[609px] h-auto min-h-screen md:min-h-[800px] bg-[#FBFAFC] rounded-[20px] md:rounded-[40px] relative flex flex-col">
         
          <div className="pt-8 pl-6 md:pt-[50px] md:pl-[50px]">
            <Image width={55} height={48} src="/Group 1.png" alt="Company Logo" className="object-contain" />
          </div>

        
          <div className="px-6 md:px-[50px] pt-8 md:pt-12 w-full">
            <div className="w-full h-auto flex flex-col gap-4">
              <h1 className="font-[family-name:var(--font-monument)] text-[24px] md:text-[30px] font-normal leading-[100%] text-gray-900">
                Welcome Back
              </h1>
              <p className="font-manrope text-[16px] md:text-[18px] font-light leading-[120%] md:leading-[100%] text-[#5D2A8B]">
                Login to your account to continue tracking your measurement
              </p>
            </div>
          </div>

         
          <div className="px-6 md:px-[50px] pt-8 w-full flex-1">
            <LoginForm />
          </div>

         
          <div className="px-6 pb-8 md:pb-0 md:absolute md:top-[702px] md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-[257px] h-[25px]">
            <p className="font-manrope text-[16px] md:text-[18px] font-light leading-[100%] text-gray-500 text-center">
              Don&apos;t have an account?{" "}
              <a href="/auth/signup" className="text-[#5D2A8B] font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage