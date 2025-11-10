
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
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <UserSidebar onShow={showSidebar} setShow={setShowSidebar} />
      
      <div className="relative w-full overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}