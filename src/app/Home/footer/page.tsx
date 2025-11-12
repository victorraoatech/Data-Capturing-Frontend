
"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const handleUploadClick = () => {
    router.push("/upload-image");
  };

  return (
    <div className="relative">
      {/* Ready to Capture Section - Positioned on top of footer */}
      <div className="relative z-10 flex justify-center -mb-20" style={{ paddingLeft: "92px", paddingRight: "92px" }}>
        <div
          className="bg-[#5D2A8B] text-white shadow-lg rounded-[20px]"
          style={{
            width: "1255px",
            height: "236px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 72px 0 80px",
          }}
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-left">
              <h2
                className="text-white mb-4"
                style={{
                  fontFamily: "Monument Extended",
                  fontWeight: 400,
                  fontSize: "36px",
                  lineHeight: "100%",
                }}
              >
                Ready to capture now?
              </h2>
              <p
                className="text-white opacity-90"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                }}
              >
                Experience instant, accurate measurements with AI.
              </p>
            </div>
            
            <button
              onClick={handleUploadClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)"
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(255,255,255,0.3)"
                e.currentTarget.style.border = "2px solid #C8A2E0"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                e.currentTarget.style.border = "2px solid transparent"
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.98)"
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1.06)"
              }}
              className="bg-white text-[#5D2A8B] px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out cursor-pointer"
              style={{
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "16px",
                transformOrigin: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "2px solid transparent",
              }}
            >
              Upload Image
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#f7f4fa] text-gray-700 pt-32 pb-8">
        <div className="relative mx-auto" style={{ width: "1440px" }}>
          <div className="flex justify-between items-start border-b border-gray-300 pb-6 mb-4" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
            {/* Logo - Aligned with navbar logo */}
            <div className="flex items-start">
              <Link href="/">
                <Image
                  src="/Group 1.png"
                  alt="Brand Logo"
                  width={55}
                  height={48}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Quick Links & Contact */}
            <div className="flex gap-16">
              {/* Quick Links */}
              <div style={{ width: "102px" }}>
                <h3 
                  className="font-manrope font-semibold text-[#1A1A1A] mb-5"
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Quick links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="#" 
                      className="hover:text-[#5D2A8B] transition-colors"
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0.05em",
                        color: "#6E6E6EB2",
                      }}
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="hover:text-[#5D2A8B] transition-colors"
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0.05em",
                        color: "#6E6E6EB2",
                      }}
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#" 
                      className="hover:text-[#5D2A8B] transition-colors"
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0.05em",
                        color: "#6E6E6EB2",
                      }}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div style={{ width: "235px" }}>
                <h3 
                  className="font-manrope font-semibold text-[#1A1A1A] mb-5"
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Contact
                </h3>
                <ul className="space-y-2">
                  <li
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0.05em",
                      color: "#6E6E6EB2",
                    }}
                  >
                    (+234) 809 722 7891
                  </li>
                  <li>
                    <a 
                      href="mailto:DC@emailaddress.com.ng"
                      className="hover:text-[#5D2A8B] transition-colors"
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0.05em",
                        color: "#6E6E6EB2",
                      }}
                    >
                      Gamai@raoatech.com
                    </a>
                  </li>
                  <li
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0.05em",
                      color: "#6E6E6EB2",
                    }}
                  >
                    1A, Huges Avenue, <br />
Alagomeji, Yaba, Lagos state.<br />
Nigeria.
                    
                   
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
            <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
              <Link href="#" className="hover:text-[#5D2A8B] transition-colors">Legal</Link>
              <Link href="#" className="hover:text-[#5D2A8B] transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-[#5D2A8B] transition-colors">Terms of Services</Link>
            </div>
            <p>
              © {currentYear} Powered by Raoatech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
