

"use client";

import React, { JSX } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PersonIcon } from "@radix-ui/react-icons";

type UserType = "user" | "admin" | undefined;

export default function Signup(): JSX.Element {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>(undefined);

  const handleContinue = () => {
    if (userType) {
      router.push(`/auth/signup/${userType}`);
    }
  };

  return (
    <div className="">
      <div className="max-w-md   bg-gray-50 rounded-lg shadow-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-pink-500 text-white font-bold">
            DC
          </div>
          <div>
            <div className="text-lg font-extrabold" style={{ color: "#334155" }}>
              DataCap
            </div>
            <div className="text-xs text-gray-500">Smart way of capturing measurement</div>
          </div>
        </div>

        <h1 className="text-xl font-semibold mb-2">Sign Up</h1>
        <p className="text-sm text-gray-600 mb-4">How would you describe yourself?</p>

        <div className="space-y-3">
          <label
            onClick={() => setUserType("user")}
            className={`flex items-center gap-3 cursor-pointer rounded-lg p-3 border ${
              userType === "user" ? "border-indigo-500 ring-2 ring-indigo-100" : "border-gray-200"
            }`}
          >
            <div className="p-2 rounded-full bg-gray-100"><PersonIcon /></div>
            <div>
              <div className="font-medium">Individual</div>
             
            </div>
          </label>

          <label
            onClick={() => setUserType("admin")}
            className={`flex items-center gap-3 cursor-pointer rounded-lg p-3 border ${
              userType === "admin" ? "border-indigo-500 ring-2 ring-indigo-100" : "border-gray-200"
            }`}
          >
            <div className="p-2 rounded-full bg-gray-100"><PersonIcon /></div>
            <div>
              <div className="font-medium">Organization</div>
              {/* <div className="text-sm text-gray-500">Sign up an organisation or team</div> */}
            </div>
          </label>
        </div>

        <button
          onClick={handleContinue}
          disabled={!userType}
          className={`mt-6 w-full py-2 rounded-md text-white font-medium ${
            userType ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Have an account? <Link href="/auth/login" className="text-indigo-600">Log in</Link>
        </p>
      </div>
     </div>
  );
}
