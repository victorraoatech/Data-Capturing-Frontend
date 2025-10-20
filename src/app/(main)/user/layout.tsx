
"use client";


import { UserSidebar } from "@/app/components/sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="min-h-screen bg-[#F7F0FE]">
      
      <UserSidebar onShow={showSidebar} setShow={setShowSidebar} />
      
      
      <div className={`transition-all duration-300 ${showSidebar ? 'ml-64' : 'ml-0'}`}>
        <div className="px-4 md:px-12 py-6">
          
          {children}
        </div>
      </div>
    </div>
  );
}