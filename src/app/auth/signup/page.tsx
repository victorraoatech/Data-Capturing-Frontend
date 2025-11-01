
// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import Link from "next/link";

// type UserType = "brand" | "individual";

// export default function Signup() {
//   const [userType, setUserType] = useState<UserType>("brand");
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleSubmit = (e: React.MouseEvent) => {
//     e.preventDefault();
//     console.log("Sign up:", { ...formData, userType });
//   };

//   const handleGoogleSignup = () => {
//     console.log("Sign up with Google");
//   };

//   return (
//     <div className="w-full  flex items-center justify-center p-6">
//       {/* Main Container - 1440x1024 equivalent */}
//       <div className="w-full max-w-[1349px] h-[935px] flex justify-between gap-10">
        
//         {/* Left Side - Illustration (700x935) */}
//         <div className=" rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden">
//           <Image
//             width={700}
//             height={935}
//             src="/Frame 335677.png"
//             alt="Company Logo"
//             className=""
//           />
//         </div>

//         {/* Right Side - Form (609x935) */}
//         <div className="w-[609px] h-[935px] bg-[#FBFAFC] rounded-[40px] flex flex-col shadow-sm px-16 ">
//           {/* Logo */}
//           <div className="mb-8">
//             <Image
//               width={55}
//               height={48}
//               src="/Group 1.png"
//               alt="Company Logo"
//               className=""
//             />
//           </div>

//           {/* Header */}
//           <div className="w-full mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
//             <p className="text-gray-500 text-sm">Create an account with us and get started!</p>
//           </div>

//           {/* User Type Toggle */}
//           <div className="w-full mb-6">
//             <div className="text-xs text-gray-500 mb-2">SIGN UP AS</div>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => setUserType("brand")}
//                 className={`flex-1 py-2 px-4 rounded-lg border transition ${
//                   userType === "brand"
//                     ? "bg-purple-50 border-purple-600 text-purple-600"
//                     : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
//                 }`}
//               >
//                 Brand
//               </button>
//               <button
//                 onClick={() => setUserType("individual")}
//                 className={`flex-1 py-2 px-4 rounded-lg border transition ${
//                   userType === "individual"
//                     ? "bg-purple-50 border-purple-600 text-purple-600"
//                     : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
//                 }`}
//               >
//                 Individual
//               </button>
//             </div>
//           </div>

//           {/* Google Sign Up */}
//           <button
//             onClick={handleGoogleSignup}
//             className="w-full py-3 px-4 border border-gray-200 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition mb-6"
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//               <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//             </svg>
//             <span className="text-gray-700 font-medium">Sign up with Google</span>
//           </button>

//           {/* Divider */}
//           <div className="w-full flex items-center gap-4 mb-6">
//             <div className="flex-1 h-px bg-gray-200"></div>
//             <span className="text-gray-400 text-sm">or</span>
//             <div className="flex-1 h-px bg-gray-200"></div>
//           </div>

//           {/* Form Inputs */}
//           <div className="w-full space-y-4">
//             <div>
//               <input
//                 type="text"
//                 placeholder={userType === "brand" ? "Brand Name" : "Name"}
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <input
//                 type="email"
//                 placeholder={userType === "brand" ? "Brand Email" : "Email"}
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//               />
//             </div>

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="w-full py-3 px-4 bg-[#5D2A8B] text-white rounded-lg font-medium hover:bg-[#5D2A8B] transition"
//             >
//               Sign Up
//             </button>

//             {/* "Have an account?" link - positioned closer to the button */}
//             <div className="mb-14 text-center">
//               <p className="text-sm text-gray-500">
//                 Already have an account?{" "}
//                 <Link href="/auth/login" className="text-[#5D2A8B] font-medium hover:underline">
//                   Log in
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

type UserType = "brand" | "individual";

export default function Signup() {
  const [userType, setUserType] = useState<UserType>("brand");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Sign up:", { ...formData, userType });
  };

  const handleGoogleSignup = () => {
    console.log("Sign up with Google");
  };

  return (
    <div className="w-full flex items-center justify-center p-4 sm:p-6">
      {/* Main Container - Responsive */}
      <div className="w-full max-w-[1349px] h-auto min-h-screen sm:h-[935px] flex flex-col sm:flex-row justify-between gap-6 sm:gap-10">
        
        {/* Left Side - Illustration (Hidden on mobile) */}
        <div className="hidden sm:flex rounded-[40px] flex-col items-center justify-center relative overflow-hidden">
          <Image
            width={700}
            height={935}
            src="/Frame 335677.png"
            alt="Company Logo"
            className=""
          />
        </div>

        {/* Right Side - Form (Full width on mobile) */}
        <div className="w-full sm:w-[609px] h-auto sm:h-[935px] bg-[#FBFAFC] rounded-[20px] sm:rounded-[40px] flex flex-col shadow-sm px-6 sm:px-16 py-8 sm:py-0">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <Image
              width={55}
              height={48}
              src="/Group 1.png"
              alt="Company Logo"
              className=""
            />
          </div>

          {/* Header */}
          <div className="w-full mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
            <p className="text-gray-500 text-sm">Create an account with us and get started!</p>
          </div>

          {/* User Type Toggle */}
          <div className="w-full mb-6">
            <div className="text-xs text-gray-500 mb-2">SIGN UP AS</div>
            <div className="flex gap-4">
              <button
                onClick={() => setUserType("brand")}
                className={`flex-1 py-2 px-4 rounded-lg border transition ${
                  userType === "brand"
                    ? "bg-purple-50 border-purple-600 text-purple-600"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                Brand
              </button>
              <button
                onClick={() => setUserType("individual")}
                className={`flex-1 py-2 px-4 rounded-lg border transition ${
                  userType === "individual"
                    ? "bg-purple-50 border-purple-600 text-purple-600"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                Individual
              </button>
            </div>
          </div>

          {/* Google Sign Up */}
          <button
            onClick={handleGoogleSignup}
            className="w-full py-3 px-4 border border-gray-200 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-700 font-medium">Sign up with Google</span>
          </button>

          {/* Divider */}
          <div className="w-full flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form Inputs */}
          <div className="w-full space-y-4">
            <div>
              <input
                type="text"
                placeholder={userType === "brand" ? "Brand Name" : "Name"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder={userType === "brand" ? "Brand Email" : "Email"}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-[#5D2A8B] text-white rounded-lg font-medium hover:bg-[#5D2A8B] transition"
            >
              Sign Up
            </button>

            {/* "Have an account?" link */}
            <div className="mb-8 sm:mb-14 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-[#5D2A8B] font-medium hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}