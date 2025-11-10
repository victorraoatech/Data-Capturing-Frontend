"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type UserType = "user" | "admin";

export default function Signup() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<UserType | null>(null);

  const handleContinue = () => {
    if (selectedType) {
      router.push(`/auth/signup/${selectedType}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .monument-extended { font-family: 'Monument Extended', sans-serif; }
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      <div className="relative" style={{ width: "1440px", minHeight: "1000px", margin: "0 auto" }}>
        {/* Left Image Section */}
        <div 
          className="absolute"
          style={{
            width: "700px",
            height: "935px",
            top: "35px",
            left: "45px",
            borderRadius: "40px",
            background: "linear-gradient(180deg, #F4EFFA 0%, #5D2A8B 10%)",
            overflow: "hidden"
          }}
        >
          <Image 
            src="/Frame 335677.png" 
            alt="Data Capturing Illustration" 
            width={700} 
            height={935} 
            priority 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Right Form Section */}
        <div 
          className="absolute"
          style={{
            width: "609px",
            height: "935px",
            top: "35px",
            left: "785px",
            borderRadius: "40px",
            background: "#FBFAFC",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px"
          }}
        >
          {/* Logo */}
          <div 
            className="absolute"
            style={{
              top: "50px",
              left: "50px"
            }}
          >
            <Image 
              width={55} 
              height={48} 
              src="/Group 1.png" 
              alt="Company Logo" 
              className="object-contain" 
            />
          </div>

          {/* Content Container */}
          <div style={{ width: "484px", marginTop: "80px" }}>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 
                className="monument-extended"
                style={{
                  fontSize: "30px",
                  fontWeight: 400,
                  lineHeight: "100%",
                  color: "#1A1A1A",
                  marginBottom: "16px"
                }}
              >
                Create Account
              </h1>
              <p 
                className="manrope"
                style={{
                  fontWeight: 300,
                  fontSize: "18px",
                  lineHeight: "100%",
                  color: "#6E6E6EB2"
                }}
              >
                Choose your account type to get started
              </p>
            </div>

            {/* Account Type Selection */}
            <div style={{ marginBottom: "32px" }}>
              {/* User Account Option */}
              <div
                onClick={() => setSelectedType("user")}
                style={{
                  padding: "24px",
                  border: selectedType === "user" ? "2px solid #5D2A8B" : "2px solid #E5E7EB",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: selectedType === "user" ? "#F4EFFA" : "white",
                  marginBottom: "16px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h3 
                      className="manrope"
                      style={{
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#1A1A1A",
                        marginBottom: "8px"
                      }}
                    >
                      User Account
                    </h3>
                    <p 
                      className="manrope"
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#6E6E6E",
                        lineHeight: "140%"
                      }}
                    >
                      For individuals who want to use the data capturing service
                    </p>
                  </div>
                  <div 
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: selectedType === "user" ? "2px solid #5D2A8B" : "2px solid #D1D5DB",
                      background: selectedType === "user" ? "#5D2A8B" : "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginLeft: "16px"
                    }}
                  >
                    {selectedType === "user" && (
                      <div 
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "white"
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Admin Account Option */}
              <div
                onClick={() => setSelectedType("admin")}
                style={{
                  padding: "24px",
                  border: selectedType === "admin" ? "2px solid #5D2A8B" : "2px solid #E5E7EB",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: selectedType === "admin" ? "#F4EFFA" : "white"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h3 
                      className="manrope"
                      style={{
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#1A1A1A",
                        marginBottom: "8px"
                      }}
                    >
                      Admin Account
                    </h3>
                    <p 
                      className="manrope"
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#6E6E6E",
                        lineHeight: "140%"
                      }}
                    >
                      For administrators who manage the platform and users
                    </p>
                  </div>
                  <div 
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: selectedType === "admin" ? "2px solid #5D2A8B" : "2px solid #D1D5DB",
                      background: selectedType === "admin" ? "#5D2A8B" : "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginLeft: "16px"
                    }}
                  >
                    {selectedType === "admin" && (
                      <div 
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "white"
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!selectedType}
              className="manrope"
              style={{
                width: "100%",
                height: "60px",
                background: selectedType ? "#5D2A8B" : "#D1D5DB",
                color: "white",
                borderRadius: "10px",
                border: "none",
                fontWeight: 600,
                fontSize: "20px",
                cursor: selectedType ? "pointer" : "not-allowed",
                transition: "all 0.2s",
                marginBottom: "24px"
              }}
            >
              Continue
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p 
                className="manrope"
                style={{
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "#6E6E6E"
                }}
              >
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  style={{
                    fontWeight: 500,
                    color: "#5D2A8B",
                    textDecoration: "none"
                  }}
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
