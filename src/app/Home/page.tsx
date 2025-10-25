"use client"
import React, { useState } from "react";

import Image from "next/image";

import Navbar from "../components/navbar";
import Hero from "@/app/Home/hero/page"
import { UserSidebar } from "../components/sidebar";
import HowItWorks from "./how-it-works/page";
import Features from "@/app/Home/features/page"
import Audience from "./users/page";
import Footer from "./footer/page";
import ReadyToCapture from "./capture/page";





const HomePage = () => {
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

  
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
              <Navbar />
          
            <UserSidebar onShow={false} setShow={function (value: React.SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
            } }/>
            
            <main className="flex-grow">
              <Hero/>

               <HowItWorks/>
               <Features/>

                {/* Testimonial */}
               <section className="relative bg-[#5D2A8B] text-white py-16 overflow-hidden">
  <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center relative z-10">
    {/* Text Content */}
    <h2 className="text-3xl font-bold mb-4">
      Ready to capture now?
    </h2>
    <p className="mb-8 text-base">
      Experience instant, accurate measurements with AI.
    </p>

    {/* Upload Area */}
    <div className="flex flex-col items-center justify-center gap-2">
      <label htmlFor="image-upload" className="cursor-pointer">
        <div className="flex items-center justify-center space-x-2 bg-white text-[#120071] px-6 py-2 rounded-full hover:opacity-90 transition">
          <span className="text-sm font-semibold">Upload Image</span>
        </div>
      </label>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  </div>

  <div className="absolute top-4 right-8">
    <Image
      src="/Warm.png"
      alt="silhouette"
      width={140}
      height={220}
      className="object-contain"
    />
  </div>
</section>


                <Audience/>
           <section className="bg-[#F4EFFA] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-monument font-normal">
              Powered by AI technology
            </h2>
            <p className=" font-manrope font-normal text-[#6E6E6EB2] text-lg leading-relaxed">
              Our intelligent system uses computer vision and machine learning to detect shapes, calculate proportions, and deliver measurements with remarkable accuracy, all from the images uploaded.
            </p>
            
            {/* Features List */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 bg-[#E4D8F380] rounded-lg w-[78%] px-2">
                <p className="font-manrope font-normal text-[#6E6E6EB2]">Image upload → AI analysis → Accurate measurements</p>
              </div>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
            {/* Left Decorative Icon */}
            <Image
              src='/Rss Feed Streamline Ultimate Regular - Free (4).png'
              alt="AI Icon"
              width={70}
              height={70}
              className="absolute left-0 top-1/2 -translate-y-1/2 opacity-80"
            />
            
            {/* Center Frame/Orb */}
            <div className="relative z-10">
              <Image
                src='/Frame.png'
                alt="AI Technology Visualization"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
            
            {/* Right Decorative Icon */}
            <Image
              src='/Rss Feed Streamline Ultimate Regular - Free (5).png'
              alt="AI Icon"
              width={70}
              height={70}
              className="absolute right-0 top-1/2 -translate-y-1/2 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
            </main>
             <ReadyToCapture/>
              <Footer/>
             
        </div>
    );
};

export default HomePage;


