

"use client";

import React, { useState } from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => setUploadedImage(null);

  return (
    <section id="hero-section" className="relative bg-[#F4EFFA] overflow-hidden">
      {/* Decorative floating icon (optional) */}
      <div className="absolute top-20 right-24 opacity-20 pointer-events-none">
        <Image src="/Spiral 1.png" alt="spiral" width={64} height={64} className="object-contain" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: heading and description */}
          
          <div className="pt-6">
            <h1 className="font-monument font-normal text-3xl md:text-3xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              Smart, instant &<br />
              accurate way<br />
              to measure
            </h1>

            <p className="text-[#6E6E6EB2] font-manrope font-normal text-base md:text-lg max-w-xl">
              Upload a single image to get precise body or object measurements with our AI-powered engine.
            </p>
          </div>

          {/* Right: Upload Card */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(93,42,139,0.08)] p-6 md:p-8 w-full max-w-[520px]">
              {/* Inner dashed area */}
              <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl border-2 border-dashed border-purple-200 p-6 md:p-8 min-h-[360px] flex items-center justify-center">
                {uploadedImage ? (
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    {/* Preview */}
                    <img src={uploadedImage} alt="preview" className="w-full h-full object-cover" />
                    {/* Small reset button */}
                    <button
                      onClick={resetImage}
                      className="absolute top-3 right-3 bg-white/80 text-sm text-gray-700 px-3 py-1 rounded-md shadow-sm"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full gap-4">
                    {/* Left silhouette */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image
                        src="/gbarkz-vqKnuG8GaQc-unsplash-removebg-preview 1.png"
                        alt="silhouette"
                        width={140}
                        height={220}
                        className="object-contain"
                      />
                    </div>

                    {/* Center upload area */}
                    <div className="flex flex-col items-center justify-center gap-2">
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="flex items-center justify-center space-x-2 bg-[#5D2A8B] text-white px-4 py-2 rounded-full hover:opacity-95 transition">
                         
                          <span className="text-sm font-medium">Upload Image</span>
                        </div>
                      </label>

                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />

                      <p className=" font-manrope font-normal text-[#6E6E6EB2] text-xs mt-1">or drag and drop</p>
                      <p className="font-manrope font-normal text-[#6E6E6EB2] text-[11px] mt-3 max-w-[160px] text-center">paste your file here</p>
                    </div>

                    {/* Right object illustration */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image
                        src="/recha-oktaviani-t__61ap00Mc-unsplash-removebg-preview 1.png"
                        alt="object"
                        width={120}
                        height={140}
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* small helper text */}
              <p className="text-center font-manrope font-normal text-[#6E6E6EB2] text-xs mt-4">
                Supports .jpeg .jpg .png .webp — images are processed securely and deleted after 3 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
