



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const HeroSection: React.FC = () => {
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);
//   const router = useRouter();

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const imageDataUrl = event.target?.result as string;
//         setUploadedImage(imageDataUrl);
        
//         // Route to upload-image page with the image data
//         router.push(`/upload-image`);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const resetImage = () => setUploadedImage(null);

//   return (
//     <section id="hero-section" className="relative bg-[#F4EFFA] overflow-hidden h-[742px] w-[1440px]">
//       <div className="relative  mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
//         <div className="grid grid-cols-2 gap-0 items-start" style={{ paddingTop: "160px" }}>
//           {/* Left: heading and description */}
//           <div className="relative" style={{ width: "614px" }}>
//             {/* Warm icon - positioned top left */}
//             <div className="absolute z-10" style={{ top: "-56px", left: "80px" }}>
//               <Image
//                 src="/Warm.png"
//                 alt=""
//                 height={80}
//                 width={90}
//               />
//             </div>
            
//             <h1 
//               className="text-[#1A1A1A] relative z-20"
//               style={{
//                 fontFamily: "Monument Extended, sans-serif",
//                 fontSize: "50px",
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 fontWeight: 400,
//                 marginBottom: "20px",
//               }}
//             >
//               Smart, instant &<br />
//               accurate way<br />
//               to measure
//             </h1>
            
            
//               <div className="absolute top-[180px] right-20 md:right-[50px]">
//                <Image 
//                 src="/Spiral 1.png" 
//                 alt="spiral" 
//                 width={90} 
//                 height={90} 
//                 className="object-contain" 
//               />
//             </div>
//             <p 
//               className="text-[#6E6E6EB2]  text-base md:text-lg max-w-xl mt-4"
//               style={{
//                 fontFamily: "Manrope, sans-serif",
//                 fontSize: "20px",
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 fontWeight: 400,
//               }}
//             >
//               Upload a single image to get precise body or<br />
//               object measurements with our AI-powered engine.
//             </p>
//           </div>

//           {/* Right: Upload Card */}
//           <div className="flex justify-end">
//             <div 
//               className="bg-white shadow-[0_10px_40px_rgba(93,42,139,0.12)]" 
//               style={{
//                 width: "518px",
//                 borderRadius: "20px",
//                 padding: "41px 38px",
//               }}
//             >
//               {/* Inner dashed area */}
//               <div 
//                 className="bg-[#F4EFFA] border-2 border-dashed flex items-center justify-center"
//                 style={{
//                   width: "442px",
//                   height: "378px",
//                   borderRadius: "20px",
//                   border: "1px dashed #EB83FF",
//                   strokeDasharray: "8, 8",
//                 }}
//               >
//                 {uploadedImage ? (
//                   <div className="w-full h-full rounded-2xl overflow-hidden relative">
//                     <img src={uploadedImage} alt="preview" className="w-full h-full object-cover" />
//                     <button
//                       onClick={resetImage}
//                       className="absolute top-3 right-3 bg-white/90 hover:bg-white text-sm text-gray-700 px-4 py-2 rounded-full shadow-md transition-all"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-center top-[52px] w-[421px] h-[346px] gap-4" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
//                     <div className="flex-shrink-0 flex items-center justify-center">
//                       <Image
//                         src="/gbarkz-vqKnuG8GaQc-unsplash-removebg-preview 1.png"
//                         alt="silhouette"
//                         width={140}
//                         height={220}
//                         className="object-contain"
//                       />
//                     </div>

//                     <div 
//                       className="flex flex-col  mt-30 "
//                       style={{
//                         width: "173px",
//                         height: "41.48px",
//                         gap: "12px",
//                       }}
//                     >
//                    <label htmlFor="image-upload" className="cursor-pointer inline-block">
//    <div
//     role="button"
//     aria-label="Upload Image"
//     onMouseEnter={(e) => {
//       (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06)";
//       (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 36px rgba(93,42,139,0.18)";
//       (e.currentTarget as HTMLDivElement).style.border = "2px solid #C8A2E0"; // Light purple border on hover
//     }}
//     onMouseLeave={(e) => {
//       (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
//       (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 40px rgba(93,42,139,0.12)";
//       (e.currentTarget as HTMLDivElement).style.border = "2px solid transparent";
//     }}
//     onMouseDown={(e) => {
//       (e.currentTarget as HTMLDivElement).style.transform = "scale(0.98)";
//     }}
//     onMouseUp={(e) => {
//       (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06)";
//     }}
//     className="flex items-center justify-center bg-[#5D2A8B] text-white shadow-md transition-all duration-300 ease-in-out"
//     style={{
//       width: "173px",
//       height: "40.45px",
//       gap: "10.86px",
//       borderRadius: "21.72px",
//       paddingTop: "7.24px",
//       paddingRight: "13.57px",
//       paddingBottom: "7.24px",
//       paddingLeft: "13.57px",
//       transformOrigin: "center",
//       border: "2px solid transparent",
//       boxShadow: "0 10px 40px rgba(93,42,139,0.12)",
//     }}
//   >
//     <span
//       style={{
//         fontSize: "14px",
//         lineHeight: "100%",
//         fontFamily: "Manrope, sans-serif",
//         fontWeight: 600,
//       }}
//     >
//       Upload Image
//     </span>
//   </div>
// </label>

//                       <input
//                         id="image-upload"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="hidden"
//                       />

//                       <p 
//                         className="text-[#6E6E6EB2] text-center"
//                         style={{
//                           fontFamily: "Manrope, sans-serif",
//                           fontSize: "11px",
//                           fontWeight: 400,
//                           lineHeight: "100%",
//                           maxWidth: "160px",
//                         }}
//                       >
//                          paste your file <span className="underline decoration-[#6E6E6EB2]">here</span>
//                       </p>
//                     </div>

//                     <div className="flex-shrink-0 flex items-center justify-center">
//                       <Image
//                         src="/recha-oktaviani-t__61ap00Mc-unsplash-removebg-preview 1.png"
//                         alt="object"
//                         width={120}
//                         height={140}
//                         className="object-contain"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Privacy message - positioned below the card */}
//         <div className="absolute" style={{ top: "635px", left: "831px", width: "518px", height: "38px" }}>
//           <p
//             className="text-[#6E6E6EB2] text-center"
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontSize: "14px",
//               fontWeight: 300,
//               lineHeight: "100%",
//             }}
//           >
//             `&quot;Images are processed securely and deleted after 3 hours. No training on user<br />data.`&quot;
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        setUploadedImage(imageDataUrl);
        
        // Route to upload-image page with the image data
        router.push(`/upload-image`);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => setUploadedImage(null);

  return (
    <section id="hero-section" className="relative bg-[#F4EFFA] w-full min-h-screen flex items-center">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-20 max-w-7xl w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left: heading and description */}
          <div className="relative w-full lg:w-auto text-center lg:text-left">
            {/* Warm icon - positioned exactly like in commented code */}
            <div className="absolute z-10 hidden lg:block" style={{ top: "-50px", left: "80px" }}>
              <Image
                src="/Warm.png"
                alt=""
                height={80}
                width={90}
                className="object-contain"
              />
            </div>
            
            {/* Spiral icon - positioned exactly like in commented code */}
            {/* <div className="absolute hidden lg:block" style={{ top: "180px", left: "0px" }}>
              <Image 
                src="/Spiral 1.png" 
                alt="spiral" 
                width={90} 
                height={90} 
                className="object-contain" 
              />
            </div> */}

            {/* Mobile icons */}
            <div className="absolute z-10 lg:hidden -top-8 left-1/2 transform -translate-x-1/2">
              <Image
                src="/Warm.png"
                alt=""
                height={60}
                width={70}
                className="w-16 h-16"
              />
            </div>
            
            <div className="absolute   top-[180px] right-20 md:right-[50px]">
              <Image 
                src="/Spiral 1.png" 
                alt="spiral" 
                width={60}
                height={60}
                className="w-16 h-16 object-contain" 
              />
            </div>

            <div className="lg:max-w-[614px] mx-auto lg:mx-0 lg:pt-8">
              <h1 
                className="text-[#1A1A1A] relative z-20"
                style={{
                  fontFamily: "Monument Extended, sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 2.5rem)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  fontWeight: 400,
                  marginBottom: "24px",
                }}
              >
                Smart, instant &<br />
                accurate way<br />
                to measure
              </h1>
              
              <p 
                className="text-[#6E6E6EB2] text-lg lg:text-xl mt-6 lg:mt-4"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  fontWeight: 400,
                }}
              >
                Upload a single image to get precise body or<br className="hidden sm:block" />
                object measurements with our AI-powered engine.
              </p>
            </div>
          </div>

          {/* Right: Upload Card and Privacy Text */}
          <div className="flex justify-center lg:justify-start w-full">
            <div className="w-full max-w-[518px]">
              {/* Upload Card */}
              <div 
                className="bg-white shadow-[0_10px_40px_rgba(93,42,139,0.12)] w-full"
                style={{
                  borderRadius: "20px",
                  padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2.5rem)",
                }}
              >
                {/* Inner dashed area */}
                <div 
                  className="bg-[#F4EFFA] border-2 border-dashed border-[#EB83FF] flex items-center justify-center w-full"
                  style={{
                    height: "clamp(280px, 40vw, 378px)",
                    borderRadius: "20px",
                    strokeDasharray: "8, 8",
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
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full h-full p-4 gap-4 sm:gap-6">
                      {/* Left silhouette image */}
                      <div className="flex-shrink-0 flex items-center justify-center order-2 sm:order-1">
                        <Image
                          src="/gbarkz-vqKnuG8GaQc-unsplash-removebg-preview 1.png"
                          alt="silhouette"
                          width={100}
                          height={160}
                          className="w-16 h-24 sm:w-20 sm:h-32 lg:w-28 lg:h-40 object-contain"
                        />
                      </div>

                      {/* Upload button and text - Centered and moved down */}
                      <div 
                        className="flex flex-col items-center justify-center order-1 sm:order-2 gap-3 mt-4 lg:mt-8"
                      >
                        <label htmlFor="image-upload" className="cursor-pointer inline-block">
                          <div
                            role="button"
                            aria-label="Upload Image"
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06)";
                              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 36px rgba(93,42,139,0.18)";
                              (e.currentTarget as HTMLDivElement).style.border = "2px solid #C8A2E0";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 40px rgba(93,42,139,0.12)";
                              (e.currentTarget as HTMLDivElement).style.border = "2px solid transparent";
                            }}
                            onMouseDown={(e) => {
                              (e.currentTarget as HTMLDivElement).style.transform = "scale(0.98)";
                            }}
                            onMouseUp={(e) => {
                              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06)";
                            }}
                            className="flex mt-20 bg-[#5D2A8B] text-white shadow-md transition-all duration-300 ease-in-out hover:bg-[#4a2170]"
                            style={{
                              width: "140px",
                              height: "40px",
                              borderRadius: "21.72px",
                              padding: "7px 14px",
                              transformOrigin: "center",
                              border: "2px solid transparent",
                              boxShadow: "0 10px 40px rgba(93,42,139,0.12)",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                lineHeight: "100%",
                                fontFamily: "Manrope, sans-serif",
                                fontWeight: 600,
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

                        <p 
                          className="text-[#6E6E6EB2] text-center"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "120%",
                            maxWidth: "160px",
                          }}
                        >
                          paste your file <span className="underline decoration-[#6E6E6EB2]">here</span>
                        </p>
                      </div>

                      {/* Right object image */}
                      <div className="flex-shrink-0 flex items-center justify-center order-3">
                        <Image
                          src="/recha-oktaviani-t__61ap00Mc-unsplash-removebg-preview 1.png"
                          alt="object"
                          width={90}
                          height={110}
                          className="w-14 h-18 sm:w-16 sm:h-20 lg:w-20 lg:h-24 object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Privacy message - Starts exactly where right container starts */}
              <div className="w-full text-center lg:text-left mt-6 lg:mt-4 pl-0 lg:pl-0">
                <p
                  className="text-[#6E6E6EB2] text-sm sm:text-base leading-relaxed"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 300,
                    lineHeight: "140%",
                    fontSize: "14px",
                  }}
                >
                  `&quot;Images are processed securely and deleted after 3 hours. No training on user data.`&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;