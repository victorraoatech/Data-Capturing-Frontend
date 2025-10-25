
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// const CaptureFooter = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <div className="w-full flex justify-center bg-white py-12">
//       {/* container that matches design width */}
//       <div className="w-full max-w-5xl">
//         {/* Purple banner */}
//         <div className="bg-[#5D2A8B] rounded-xl text-white px-8 py-8 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 shadow-md">
//           <div className="max-w-lg">
//             <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
//               Ready to capture now?
//             </h2>
//             <p className="mt-2 text-sm md:text-base text-purple-100 opacity-90">
//               Experience instant, accurate measurements with AI.
//             </p>
//           </div>

//           <div className="flex items-center justify-end w-full md:w-auto">
//             <button
//               type="button"
//               className="ml-0 md:ml-6 inline-flex items-center px-4 py-2 rounded-full bg-white text-purple-700 font-semibold shadow-sm hover:shadow-lg transition"
//             >
//               Upload Image
//             </button>
//           </div>
//         </div>

//         {/* Footer (light lavender background) */}
//        <footer className="w-full bg-[#f7f4fa] text-gray-700 py-8 px-6 md:px-16">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-6 mb-4">
//         {/* Logo */}
//          <div className="flex items-center space-x-3">
//            <Link href="/">
//              <Image
//               src="/Group 1.png"
//               alt="Brand Logo"
//               width={40}
//               height={40}
//               className="object-contain"
//             />
//           </Link>
//         </div>

//         {/* Quick Links & Contact */}
//         <div className="flex flex-col md:flex-row gap-8">
//           <div>
//             <h3 className="font-semibold mb-2 text-purple-800">Quick links</h3>
//             <ul className="space-y-1">
//               <li><Link href="#">Features</Link></li>
//               <li><Link href="#">How it works</Link></li>
//               <li><Link href="#">About</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-2 text-purple-800">Contact</h3>
//             <ul className="space-y-1">
//               <li>+234 000 000 0000</li>
//               <li>
//                 <a href="mailto:DC@emailaddress.com.ng">
//                   DC@emailaddress.com.ng
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom line */}
//       <div className="text-sm text-gray-500 flex flex-col md:flex-row justify-between">
//         <div className="space-x-4">
//           <Link href="#">Legal</Link>
//           <Link href="#">Privacy</Link>
//           <Link href="#">Terms of Services</Link>
//         </div>
//         <p className="mt-2 md:mt-0">
//           © {currentYear} Icons with Arklind Group. All rights reserved.
//         </p>
//       </div>
//     </footer>
//       </div>
//     </div>
//   );
// };

// export default CaptureFooter;
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear(); // gets the actual year dynamically

  return (
    <footer className="bg-[#f7f4fa] text-gray-700 py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-6 mb-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
           <Link href="/">
             <Image
              src="/Group 1.png"
              alt="Brand Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className=" font-manrope   font-semibold mb-2 text-[#1A1A1A]">Quick links</h3>
            <ul className="space-y-1 font-manrope font-normal text-[#6E6E6EB2]">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className=" font-manrope  font-semibold mb-2 text-[#1A1A1A]">Contact</h3>
            <ul className="space-y-1 font-manrope font-normal text-[#6E6E6EB2]">
              <li>+234 000 000 0000</li>
              <li>
                <a href="mailto:DC@emailaddress.com.ng">
                  DC@emailaddress.com.ng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-sm text-gray-500 flex flex-col md:flex-row justify-between">
        <div className="space-x-4">
          <Link href="#">Legal</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms of Services</Link>
        </div>
        <p className="mt-2 md:mt-0">
          © {currentYear} Icons with Arklind Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
