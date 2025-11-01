
// import type React from "react"
// import Image from "next/image"

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 ">
//       <div className="w-[1349px] h-[935px] flex items-stretch overflow-hidden ">
//         {/* Left side - Image section */}
//         <div className="w-[700px] h-full">
//           <Image
//             src="/Frame 1.png"
//             alt="Data Capturing Illustration"
//             width={700}
//             height={935}
//             priority
//             className="w-full h-full object-cover rounded-l-[40px]"
//           />
//         </div>

//         {/* Right side - Form section */}
//         <div className="w-[609px] h-full bg-[#FBFAFC] rounded-r-[40px] relative">
//           {children}
//         </div>
//       </div>
//     </div>
//   )
// }



// src/app/auth/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {children}
    </div>
  );
}