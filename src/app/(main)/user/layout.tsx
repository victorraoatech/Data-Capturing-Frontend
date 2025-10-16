
"use client";

import Navbar from "@/app/components/navbar";
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
      {/* Sidebar */}
      <UserSidebar onShow={showSidebar} setShow={setShowSidebar} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${showSidebar ? 'ml-64' : 'ml-0'}`}>
        <div className="px-4 md:px-12 py-6">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
}