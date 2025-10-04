
"use client";

import Image from "next/image";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-white md:flex">
      
      <div
        className="hidden md:block md:w-[65%] bg-[#572E7F] text-white clip-slant"
        style={{
          background: "#572E7F",
          clipPath: "polygon(0 0, 78% 0, 60% 100%, 0% 100%)",
        }}
      >
        <div className="p-8">
          <h1 className="text-sm font-bold">Data Capturing</h1>
        </div>

        <div className="p-8 pt-12">
          <h2 className="text-4xl font-semibold text-[#E6E1EA] italic leading-tight">
            The future is tech.....
          </h2>
        </div>

        <div className="p-8 max-w-xs text-2xl text-white/80">
          Smart way of sharing measurement
        </div>

        <div className="absolute left-6 bottom-6 opacity-30 pointer-events-none" aria-hidden>
          <Image src="/Globe.svg" alt="Globe" width={320} height={320} priority />
        </div>

        <div className="absolute left-20 bottom-32 opacity-20 pointer-events-none" aria-hidden>
          <Image src="/Vector21.svg" alt="Vector" width={220} height={220} />
        </div>

        <div className="absolute left-48 bottom-28 opacity-20 pointer-events-none" aria-hidden>
          <Image src="/stars.svg" alt="Stars" width={120} height={120} />
        </div>
      </div>


        <div className="md:w-[35%] mt-4">{children}</div>
     
    </div>
  );
}