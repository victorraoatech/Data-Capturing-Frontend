
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
   
  const isAbout = pathname === "/about";
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
        setIsScrolledPastHero(heroBottom < 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navbar background logic
  const navbarBackground = isAbout 
    ? "bg-[#d0c1df] shadow-lg" 
    : isScrolledPastHero 
      ? "bg-white shadow-lg" 
      : "bg-[#F4EFFA]"; 

  return (
    <header className={`${navbarBackground} transition-all duration-300 z-50 sticky top-0`}>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo / Brand */}
        <div className="flex items-center">
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

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {shouldShowLinks && (
            <nav className="flex items-center space-x-8">
              <Link
                href="/feature"
                className="text-[#5D2A8B] hover:text-[#5D2A8B] hover:underline hover:decoration-[#5D2A8B] hover:decoration-2 text-sm font-medium transition"
              >
                Features
              </Link>

              <Link 
                href="/howIt-works" 
                className="text-[#5D2A8B] hover:text-[#5D2A8B] hover:underline hover:decoration-[#5D2A8B] hover:decoration-2 text-sm font-medium transition"
              >
                How it works
              </Link>

              <Link 
                href="/about" 
                className="text-[#5D2A8B] hover:text-[#5D2A8B] hover:underline hover:decoration-[#5D2A8B] hover:decoration-2 text-sm font-medium transition"
              >
                About
              </Link>

              {/* Sign Up button with dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleSignUpDropdown}
                  aria-haspopup="true"
                  aria-expanded={isSignUpDropdownOpen}
                  className="focus:outline-none transition-all duration-200 inline-flex items-center"
                  style={{
                    width: "110px",
                    height: "40px",
                    borderRadius: "20px",
                    background: "transparent",
                    border: "1px solid #5D2A8B",
                    color: "#5D2A8B",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    boxSizing: "border-box",
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = "#5D2A8B";
                    el.style.color = "#fff";
                    el.style.boxShadow = "0 8px 20px rgba(93,42,139,0.12)";
                    el.style.border = "1px solid transparent";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = "transparent";
                    el.style.color = "#5D2A8B";
                    el.style.boxShadow = "none";
                    el.style.border = "1px solid #5D2A8B";
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, lineHeight: "100%" }}>Sign Up</span>

                  {/* caret icon */}
                  <svg
                    className={`w-4 h-4 transition-transform ${isSignUpDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "inherit" }}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
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

              {/* Login button */}
              <Link
                href="/auth/login"
                className="flex items-center justify-center focus:outline-none transition-all duration-200 hover:opacity-90"
                style={{
                  width: "70px",
                  height: "40px",
                  borderRadius: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  background: "#5D2A8B",
                  color: "#fff",
                  textAlign: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600 }}>Login</span>
              </Link>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute left-0 right-0 ${isAbout ? 'bg-[#d0c1df]' : isScrolledPastHero ? 'bg-white' : 'bg-[#F4EFFA]'} shadow-md z-40`}>
          <nav className="flex flex-col space-y-2 p-4 max-w-7xl mx-auto">
            {shouldShowLinks && (
              <>
                <Link
                  href="/feature"
                  className="text-[#5D2A8B] underline decoration-[#5D2A8B] hover:text-[#5D2A8B] text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>

                <Link
                  href="/howIt-works"
                  className="text-[#5D2A8B] underline decoration-[#5D2A8B] hover:text-[#5D2A8B] text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </Link>

                <Link
                  href="/about"
                  className="text-[#5D2A8B] hover:text-[#5D2A8B] hover:underline hover:decoration-[#5D2A8B] hover:decoration-2 text-sm font-medium transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Sign Up */}
                <div>
                  <button
                    type="button"
                    onClick={toggleSignUpDropdown}
                    aria-haspopup="true"
                    aria-expanded={isSignUpDropdownOpen}
                    className="flex items-center justify-center focus:outline-none transition-all duration-200"
                    style={{
                      width: "110px",  
                      height: "40px",
                      borderRadius: "20px", 
                      background: "transparent",
                      border: "1px solid #5D2A8B",
                      color: "#5D2A8B",
                      padding: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "#5D2A8B";
                      el.style.color = "#fff";
                      el.style.boxShadow = "0 8px 20px rgba(93,42,139,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.background = "transparent";
                      el.style.color = "#5D2A8B";
                      el.style.boxShadow = "none";
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 600 }}>Sign Up</span>

                    {/* caret icon */}
                    <svg
                      className={`w-4 h-4 transition-transform ${isSignUpDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "inherit" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
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
                  className="flex items-center justify-center focus:outline-none transition-all duration-200"
                  style={{
                    width: "70px",
                    height: "40px",
                    borderRadius: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    background: "#5D2A8B",
                    color: "#fff",
                    textAlign: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span style={{ fontSize: 14, fontWeight: 600 }}>Login</span>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}