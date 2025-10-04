

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSignUpDropdown = () => setIsSignUpDropdownOpen((prev) => !prev);

  // Hide nav links on /auth routes
  const shouldShowLinks = !pathname?.startsWith("/auth");

  const signUpOptions = [
    { label: "Sign up as Organisation", href: "/auth/signup/admin" },
    { label: "Sign up as Individual", href: "/auth/signup/user" },
   
  ];

  return (
    <header className="bg-white shadow-lg z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
            ⛁
          </div>
          <Link href="/" className="text-xl font-bold text-gray-900">
            DataCapture
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
              <Link href="/features" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
                Features
              </Link>

              <Link href="/get-started" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
                Get Started
              </Link>

              {/* Sign Up Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleSignUpDropdown}
                  className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium transition"
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
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 first:rounded-t-md last:rounded-b-md transition"
                        onClick={() => setIsSignUpDropdownOpen(false)}
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/auth/login" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition">
                Sign In
              </Link>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-white shadow-md z-40">
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
                  Get Started
                </Link>

                {/* Mobile Sign Up Dropdown */}
                <div>
                  <button
                    onClick={toggleSignUpDropdown}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
                  >
                    Sign Up
                    <svg
                      className={`w-4 h-4 transition-transform ${isSignUpDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isSignUpDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {signUpOptions.map((option, index) => (
                        <Link
                          key={index}
                          href={option.href}
                          className="block text-gray-600 hover:text-gray-900 text-sm py-2"
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
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
