

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
//   const toggleSignUpDropdown = () => setIsSignUpDropdownOpen((prev) => !prev);

//   const shouldShowLinks = !pathname?.startsWith("/auth");

//   const signUpOptions = [
//     { label: "Sign up as Organisation", href: "/auth/signup/admin" },
//     { label: "Sign up as Individual", href: "/auth/signup/user" },
//   ];

//   return (
//     <header className="bg-white shadow-lg z-50 sticky top-0">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Left: Logo / Brand */}
//         <div className="flex items-center space-x-3">
//           <Link href="/">
//             <Image
//               src="/Group 1.png"
//               alt="Brand Logo"
//               width={40}
//               height={40}
//               className="object-contain"
//             />
//           </Link>
//         </div>

//         {/* Mobile hamburger */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
//           aria-label="Toggle menu"
//           aria-expanded={isMenuOpen}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>

//         {/* Desktop nav */}
//         <div className="hidden md:flex items-center space-x-6">
//           {shouldShowLinks && (
//             <nav className="flex items-center space-x-4">
//               <Link href="/features" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
//                 Features
//               </Link>

//               <Link href="/get-started" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
//                 How It Works
//               </Link>

//               <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
//                 About
//               </Link>

//               {/* Desktop Sign Up Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={toggleSignUpDropdown}
//                   className="flex items-center text-[#5D2A8B] border border-[#5D2A8B] bg-transparent rounded-md px-3 py-1 text-sm font-medium transition hover:bg-[#5D2A8B] hover:text-white"
//                   aria-haspopup="true"
//                   aria-expanded={isSignUpDropdownOpen}
//                 >
//                   Sign Up
//                   <svg
//                     className={`ml-1 w-4 h-4 transition-transform ${isSignUpDropdownOpen ? "rotate-180" : ""}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {isSignUpDropdownOpen && (
//                   <div className="absolute top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                     {signUpOptions.map((option, idx) => (
//                       <Link
//                         key={idx}
//                         href={option.href}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md transition"
//                         onClick={() => setIsSignUpDropdownOpen(false)}
//                       >
//                         {option.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/auth/login"
//                 className="bg-[#5D2A8B] text-white rounded-lg text-sm font-medium transition w-[80px] text-center py-2"
//               >
//                 Login
//               </Link>
//             </nav>
//           )}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden absolute left-0 right-0 bg-white shadow-md z-40">
//           <nav className="flex flex-col space-y-2 p-4 max-w-7xl mx-auto">
//             {shouldShowLinks && (
//               <>
//                 <Link
//                   href="/features"
//                   className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Features
//                 </Link>

//                 <Link
//                   href="/get-started"
//                   className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   How It Works
//                 </Link>

//                 <Link
//                   href="/about"
//                   className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   About
//                 </Link>

//                 {/* Mobile Sign Up (styled like desktop) */}
//                 <div>
//                   <button
//                     onClick={toggleSignUpDropdown}
//                     className=" text-[#5D2A8B] border border-[#5D2A8B] bg-transparent rounded-md px-3 py-2 text-sm  w-[80px] font-medium transition hover:bg-[#5D2A8B] hover:text-white"
//                     aria-expanded={isSignUpDropdownOpen}
//                   >
//                     Sign Up
//                   </button>

//                   {isSignUpDropdownOpen && (
//                     <div className="mt-2 ml-2 space-y-1">
//                       {signUpOptions.map((option, index) => (
//                         <Link
//                           key={index}
//                           href={option.href}
//                           className="block text-gray-600 hover:text-gray-900 text-sm py-1 px-2 rounded transition"
//                           onClick={() => {
//                             setIsSignUpDropdownOpen(false);
//                             setIsMenuOpen(false);
//                           }}
//                         >
//                           {option.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <Link
//                   href="/auth/login"
//                   className="bg-[#5D2A8B] text-white rounded-lg text-sm font-medium transition w-[70px] text-center py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Login
//                 </Link>
//               </>
//             )}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSignUpDropdown = () => setIsSignUpDropdownOpen((prev) => !prev);

  const shouldShowLinks = !pathname?.startsWith("/auth");

  const signUpOptions = [
    { label: "Sign up as Organisation", href: "/auth/signup/admin" },
    { label: "Sign up as Individual", href: "/auth/signup/user" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // When hero section is scrolled out of view (with some threshold)
        setIsScrolledPastHero(heroBottom < 80); // 80px is approximately navbar height
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background based on scroll position
  const navbarBackground = isScrolledPastHero 
    ? "bg-white shadow-lg" 
    : "bg-[#F4EFFA]"; // Your specified color for hero section

  return (
    <header className={`${navbarBackground} transition-all duration-300 z-50 sticky top-0`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Brand */}
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

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {shouldShowLinks && (
            <nav className="flex items-center space-x-4">
              <Link href="/feature" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
                Features
              </Link>

              <Link href="/get-started" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
                How It Works
              </Link>

              <Link href="/about" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
                About
              </Link>

              {/* Desktop Sign Up Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleSignUpDropdown}
                  className="flex items-center text-[#5D2A8B] border border-[#5D2A8B] bg-transparent rounded-md px-3 py-1 text-sm font-medium transition hover:bg-[#5D2A8B] hover:text-white"
                  aria-haspopup="true"
                  aria-expanded={isSignUpDropdownOpen}
                >
                  Sign Up
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform ${isSignUpDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isSignUpDropdownOpen && (
                  <div className="absolute top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    {signUpOptions.map((option, idx) => (
                      <Link
                        key={idx}
                        href={option.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md transition"
                        onClick={() => setIsSignUpDropdownOpen(false)}
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/auth/login"
                className="bg-[#5D2A8B] text-white rounded-lg text-sm font-medium transition w-[80px] text-center py-2"
              >
                Login
              </Link>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute left-0 right-0 ${isScrolledPastHero ? 'bg-white' : 'bg-[#F4EFFA]'} shadow-md z-40`}>
          <nav className="flex flex-col space-y-2 p-4 max-w-7xl mx-auto">
            {shouldShowLinks && (
              <>
                <Link
                  href="/features"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>

                <Link
                  href="/get-started"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>

                <Link
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Sign Up (styled like desktop) */}
                <div>
                  <button
                    onClick={toggleSignUpDropdown}
                    className=" text-[#5D2A8B] border border-[#5D2A8B] bg-transparent rounded-md px-3 py-2 text-sm  w-[80px] font-medium transition hover:bg-[#5D2A8B] hover:text-white"
                    aria-expanded={isSignUpDropdownOpen}
                  >
                    Sign Up
                  </button>

                  {isSignUpDropdownOpen && (
                    <div className="mt-2 ml-2 space-y-1">
                      {signUpOptions.map((option, index) => (
                        <Link
                          key={index}
                          href={option.href}
                          className="block text-gray-600 hover:text-gray-900 text-sm py-1 px-2 rounded transition"
                          onClick={() => {
                            setIsSignUpDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {option.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/auth/login"
                  className="bg-[#5D2A8B] text-white rounded-lg text-sm font-medium transition w-[70px] text-center py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}