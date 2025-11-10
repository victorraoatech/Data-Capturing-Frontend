"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const HeroSection: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const router = useRouter()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string
        setUploadedImage(imageDataUrl)
        router.push(`/upload-image`)
      }
      reader.readAsDataURL(file)
    }
  }

  const resetImage = () => setUploadedImage(null)

  return (
    <section 
      id="hero-section" 
      className="relative"
      style={{
        width: "100%",
        height: "742px",
        marginTop: "110px", // Account for fixed navbar
        marginBottom: "200px",
        background: "#F4EFFA",
      }}
    >
      <div 
        className="relative"
        style={{
          width: "1440px",
          height: "742px",
          margin: "0 auto",
        }}
      >
        {/* Warm Icon - Overlapping with heading text */}
        <div 
          className="absolute"
          style={{
            top: "160px",
            left: "130px",
            zIndex: 5,
          }}
        >
          <Image
            src="/Warm.png"
            alt=""
            width={100}
            height={90}
            className="object-contain"
          />
        </div>

        {/* Spiral Icon - Right side near description */}
        <div 
          className="absolute"
          style={{
            top: "397px",
            left: "550px",
            zIndex: 5,
          }}
        >
          <Image
            src="/Spiral 1.png"
            alt=""
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        {/* Left Container */}
        <div 
          className="absolute"
          style={{
            width: "614px",
            height: "266px",
            top: "217px",
            left: "80px",
            gap: "20px",
          }}
        >
          {/* Heading */}
          <h1 
            className="text-[#1A1A1A] relative"
            style={{
              fontFamily: "Monument Extended",
              fontWeight: 400,
              fontSize: "50px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "614px",
              height: "180px",
              marginBottom: "20px",
              zIndex: 10,
            }}
          >
            Smart, instant &<br />
            accurate way<br />
            to measure
          </h1>

          {/* Description */}
          <p 
            className="text-[#6E6E6EB2]"
            style={{
              fontFamily: "Manrope",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "557px",
              height: "66px",
            }}
          >
            Upload a single image to get precise body or<br />
            object measurements with our AI-powered engine.
          </p>
        </div>

        {/* Right Container - Upload Card */}
        <div 
          className="absolute"
          style={{
            width: "518px",
            height: "459px",
            top: "160px",
            left: "830px",
            borderRadius: "20px",
            boxShadow: "0px 8px 24px 0px #5D2A8B1A",
            background: "#FFFFFF",
          }}
        >
          {/* Inner Container with Dashed Border */}
          <div 
            className="absolute bg-[#F4EFFA]"
            style={{
              width: "421px",
              height: "346px",
              top: "52px",
              left: "49px",
              borderRadius: "20px",
              border: "1px dashed #EB83FF",
            }}
          >
            {uploadedImage ? (
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img src={uploadedImage} alt="preview" className="w-full h-full object-cover" />
                <button
                  onClick={resetImage}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-sm text-gray-700 px-4 py-2 rounded-full shadow-md transition-all"
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                {/* Left Image */}
                <div 
                  className="absolute"
                  style={{
                    width: "167px",
                    height: "251px",
                    top: "25px",
                    left: "-2px",
                  }}
                >
                  <Image
                    src="/gbarkz-vqKnuG8GaQc-unsplash-removebg-preview 1.png"
                    alt="silhouette"
                    width={167}
                    height={251}
                    className="object-contain"
                  />
                </div>

                {/* Right Image */}
                <div 
                  className="absolute"
                  style={{
                    width: "200.49px",
                    height: "300.74px",
                    top: "1px",
                    left: "242px",
                  }}
                >
                  <Image
                    src="/recha-oktaviani-t__61ap00Mc-unsplash-removebg-preview 1.png"
                    alt="object"
                    width={200}
                    height={301}
                    className="object-contain"
                  />
                </div>

                {/* Upload Button and Text */}
               
                <div 
                  className="absolute"
                  style={{
                    width: "173px",
                    height: "91.48px",
                    top: "222px",
                    left: "124px",
                    gap: "12px",
                  }}
                >
                  {/* Upload Button */}
                  <label htmlFor="image-upload" className="cursor-pointer inline-block">
                    <div
                      role="button"
                      aria-label="Upload Image"
                      className="flex items-center justify-center bg-[#5D2A8B] text-white transition-all duration-300 ease-in-out"
                      style={{
                        width: "173px",
                        height: "41.48px",
                        borderRadius: "20px",
                        padding: "7.24px 13.57px",
                        gap: "10.86px",
                        border: "2px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement
                        el.style.transform = "scale(1.06)"
                        el.style.boxShadow = "0 14px 36px rgba(93,42,139,0.3)"
                        el.style.border = "2px solid #C8A2E0"
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement
                        el.style.transform = "scale(1)"
                        el.style.boxShadow = "none"
                        el.style.border = "2px solid transparent"
                      }}
                      onMouseDown={(e) => {
                        const el = e.currentTarget as HTMLDivElement
                        el.style.transform = "scale(0.98)"
                      }}
                      onMouseUp={(e) => {
                        const el = e.currentTarget as HTMLDivElement
                        el.style.transform = "scale(1.06)"
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Manrope",
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: "100%",
                        }}
                      >
                        Upload Image
                      </span>
                    </div>
                  </label>

                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* "or paste your file here" text */}
                  <p 
                    className="text-center"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: 300,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textAlign: "center",
                      color: "#6E6E6EB2",
                      width: "160px",
                      height: "38px",
                      margin: "12px auto 0",
                    }}
                  >
                    or paste your file <span style={{ textDecoration: "underline" }}>here</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Privacy Message */}
        <div 
          className="absolute text-[#6E6E6EB2] text-center"
          style={{
            width: "518px",
            height: "38px",
            top: "635px",
            left: "831px",
            fontFamily: "Manrope",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          &quot;Images are processed securely and deleted after 3 hours. No training on user data.&quot;
        </div>


      </div>
    </section>
  )
}

export default HeroSection
