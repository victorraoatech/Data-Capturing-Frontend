"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = useState(false)
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)

  const shouldShowLinks = !pathname?.startsWith("/auth")

  const signUpOptions = [
    { label: "Sign up as an organization", href: "/auth/signup/admin" },
    { label: "Sign up as an individual", href: "/auth/signup/user" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsScrolledPastHero(heroBottom <= 110)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navbarBackground = isScrolledPastHero ? "#FFFFFF" : "#F4EFFA"

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        width: "100%",
        height: "110px",
        background: navbarBackground,
      }}
    >
      <div 
        className="relative mx-auto"
        style={{
          width: "1440px",
          height: "110px",
        }}
      >
        {/* Logo */}
        <div 
          className="absolute flex items-center"
          style={{
            top: "31px",
            left: "80px",
          }}
        >
          <Link href="/">
            <Image src="/Group 1.png" alt="Brand Logo" width={55} height={48} className="object-contain" />
          </Link>
        </div>

        {shouldShowLinks && (
          <>
            {/* Navigation Links */}
            <nav 
              className="absolute flex items-center"
              style={{
                top: "55px",
                left: "824px",
                gap: "40px",
              }}
            >
              <Link
                href="/feature"
                className="text-[#1A1A1A] hover:text-[#5D2A8B] transition-colors"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline"
                  e.currentTarget.style.textDecorationThickness = "1px"
                  e.currentTarget.style.textUnderlineOffset = "4px"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                Features
              </Link>

              <Link
                href="/howIt-works"
                className="text-[#1A1A1A] hover:text-[#5D2A8B] transition-colors"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline"
                  e.currentTarget.style.textDecorationThickness = "1px"
                  e.currentTarget.style.textUnderlineOffset = "4px"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                How it works
              </Link>

              <Link
                href="/about"
                className="text-[#1A1A1A] hover:text-[#5D2A8B] transition-colors"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline"
                  e.currentTarget.style.textDecorationThickness = "1px"
                  e.currentTarget.style.textUnderlineOffset = "4px"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                About
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div 
              className="absolute flex items-center"
              style={{
                top: "47px",
                left: "1172px",
                gap: "20px",
              }}
            >
              {/* Sign Up button with dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSignUpDropdownOpen(!isSignUpDropdownOpen)}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: "106px",
                    height: "40px",
                    borderRadius: "20px",
                    border: "1px solid #5D2A8B",
                    background: "transparent",
                    color: "#5D2A8B",
                    padding: "8px 10px",
                    gap: "6px",
                    fontFamily: "Manrope",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  <span>Sign up</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isSignUpDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isSignUpDropdownOpen && (
                  <div 
                    className="absolute bg-white border border-[#5D2A8B] shadow-lg z-50"
                    style={{
                      top: "50px",
                      left: "0",
                      width: "240px",
                      borderRadius: "10px",
                      padding: "12px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {signUpOptions.map((option, idx) => (
                      <Link
                        key={idx}
                        href={option.href}
                        className="text-[#1A1A1A] hover:text-[#5D2A8B] transition-colors"
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "100%",
                          textDecoration: "underline",
                          textDecorationStyle: "solid",
                          textUnderlineOffset: "15%",
                        }}
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
                className="flex items-center justify-center transition-all duration-200 hover:opacity-90"
                style={{
                  width: "62px",
                  height: "38px",
                  borderRadius: "20px",
                  background: "#5D2A8B",
                  color: "#FFFFFF",
                  padding: "8px 10px",
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
