// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// const HeroSection: React.FC = () => {
//   const [uploadedImage, setUploadedImage] = useState<string | null>(null);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setUploadedImage(event.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const resetImage = () => setUploadedImage(null);

//   return (
//     <section id="hero-section" className="relative bg-[#F4EFFA] overflow-hidden">
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           {/* Left: heading and description */}
//           <div className="pt-6 relative">
//             {/* Warm icon - positioned top left */}
//             <div className="absolute -top-[2] -left-2 -z-10">
//               <Image
//                 src="/Warm.png"
//                 alt=""
//                 height={80}
//                 width={80}
//               />
//             </div>
            
//             <h1 className="font-monument font-normal text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
//               Smart, instant &<br />
//               accurate way<br />
//               to measure
//             </h1>
            
//             {/* Spiral icon - positioned to the right of the heading */}
//             <div className="absolute top-[210px] right-0 md:right-[50px]">
//               <Image 
//                 src="/Spiral 1.png" 
//                 alt="spiral" 
//                 width={90} 
//                 height={90} 
//                 className="object-contain" 
//               />
//             </div>
            
//             <p className="text-[#6E6E6EB2] font-manrope font-normal text-base md:text-lg max-w-xl mt-4">
//               Upload a single image to get precise body or <br/> object measurements with our AI-powered engine.
//             </p>
//           </div>

// {/* Right: Upload Card */}
// <div className="flex flex-col justify-center md:justify-end items-start md:items-end">
//   <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(93,42,139,0.12)] p-6 md:p-8 w-full max-w-[520px]">
//     {/* Inner dashed area */}
//     <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl border-2 border-dashed border-purple-200 p-6 md:p-8 min-h-[360px] flex items-center justify-center">
//       {uploadedImage ? (
//         <div className="w-full h-full rounded-2xl overflow-hidden relative">
//           <img src={uploadedImage} alt="preview" className="w-full h-full object-cover" />
//           <button
//             onClick={resetImage}
//             className="absolute top-3 right-3 bg-white/90 hover:bg-white text-sm text-gray-700 px-4 py-2 rounded-full shadow-md transition-all"
//           >
//             Remove
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center justify-between w-full gap-4">
//           <div className="flex-shrink-0 flex items-center justify-center">
//             <Image
//               src="/gbarkz-vqKnuG8GaQc-unsplash-removebg-preview 1.png"
//               alt="silhouette"
//               width={140}
//               height={220}
//               className="object-contain"
//             />
//           </div>

//           <div className="flex flex-col items-center justify-center gap-2">
//            <label htmlFor="image-upload" className="cursor-pointer inline-block">
//   <div
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
//       width: "129px",
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



//             <input
//               id="image-upload"
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="hidden"
//             />

//             <p className="font-manrope font-normal text-[#6E6E6EB2] text-xs mt-1">or drag and drop</p>
//             <p className="font-manrope font-normal text-[#6E6E6EB2] text-[11px] mt-3 max-w-[160px] text-center leading-relaxed">
//               paste your file here
//             </p>
//           </div>

//           <div className="flex-shrink-0 flex items-center justify-center">
//             <Image
//               src="/recha-oktaviani-t__61ap00Mc-unsplash-removebg-preview 1.png"
//               alt="object"
//               width={120}
//               height={140}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   </div>


//   <p
//     className="font-manrope font-light text-[14px] text-[#6E6E6EB2] leading-[100%] tracking-[0%] mt-4 text-center"
//     style={{ width: "100%", maxWidth: "520px" }}
//   >
//     “Images are processed securely and deleted after 3 hours. No training on user <br/>data.”
//   </p>
// </div>



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
    <section id="hero-section" className="relative bg-[#F4EFFA] overflow-hidden h-[742px] w-[1440px]">
      <div className="relative  mx-auto" style={{ paddingLeft: "80px", paddingRight: "80px" }}>
        <div className="grid grid-cols-2 gap-0 items-start" style={{ paddingTop: "160px" }}>
          {/* Left: heading and description */}
          <div className="relative" style={{ width: "614px" }}>
            {/* Warm icon - positioned top left */}
            <div className="absolute z-10" style={{ top: "-56px", left: "80px" }}>
              <Image
                src="/Warm.png"
                alt=""
                height={80}
                width={90}
              />
            </div>
            
            <h1 
              className="text-[#1A1A1A] relative z-20"
              style={{
                fontFamily: "Monument Extended, sans-serif",
                fontSize: "50px",
                lineHeight: "100%",
                letterSpacing: "0%",
                fontWeight: 400,
                marginBottom: "20px",
              }}
            >
              Smart, instant &<br />
              accurate way<br />
              to measure
            </h1>
            
            
              <div className="absolute top-[180px] right-20 md:right-[50px]">
               <Image 
                src="/Spiral 1.png" 
                alt="spiral" 
                width={90} 
                height={90} 
                className="object-contain" 
              />
            </div>
            <p 
              className="text-[#6E6E6EB2]  text-base md:text-lg max-w-xl mt-4"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                fontWeight: 400,
              }}
            >
              Upload a single image to get precise body or<br />
              object measurements with our AI-powered engine.
            </p>
          </div>

          {/* Right: Upload Card */}
          <div className="flex justify-end">
            <div 
              className="bg-white shadow-[0_10px_40px_rgba(93,42,139,0.12)]" 
              style={{
                width: "518px",
                borderRadius: "20px",
                padding: "41px 38px",
              }}
            >
              {/* Inner dashed area */}
              <div 
                className="bg-[#F4EFFA] border-2 border-dashed flex items-center justify-center"
                style={{
                  width: "442px",
                  height: "378px",
                  borderRadius: "20px",
                  border: "1px dashed #EB83FF",
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
                  <div className="flex items-center justify-center top-[52px] w-[421px] h-[346px] gap-4" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <Image
                        src="/gbarkz-vqKnuG8GaQc-unsplash-removebg-preview 1.png"
                        alt="silhouette"
                        width={140}
                        height={220}
                        className="object-contain"
                      />
                    </div>

                    <div 
                      className="flex flex-col  mt-30 "
                      style={{
                        width: "173px",
                        height: "41.48px",
                        gap: "12px",
                      }}
                    >
                   <label htmlFor="image-upload" className="cursor-pointer inline-block">
   <div
    role="button"
    aria-label="Upload Image"
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "scale(1.06)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 36px rgba(93,42,139,0.18)";
      (e.currentTarget as HTMLDivElement).style.border = "2px solid #C8A2E0"; // Light purple border on hover
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
    className="flex items-center justify-center bg-[#5D2A8B] text-white shadow-md transition-all duration-300 ease-in-out"
    style={{
      width: "173px",
      height: "40.45px",
      gap: "10.86px",
      borderRadius: "21.72px",
      paddingTop: "7.24px",
      paddingRight: "13.57px",
      paddingBottom: "7.24px",
      paddingLeft: "13.57px",
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
                          lineHeight: "100%",
                          maxWidth: "160px",
                        }}
                      >
                         paste your file <span className="underline decoration-[#6E6E6EB2]">here</span>
                      </p>
                    </div>

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
            </div>
          </div>
        </div>

        {/* Privacy message - positioned below the card */}
        <div className="absolute" style={{ top: "635px", left: "831px", width: "518px", height: "38px" }}>
          <p
            className="text-[#6E6E6EB2] text-center"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "100%",
            }}
          >
            `&quot;Images are processed securely and deleted after 3 hours. No training on user<br />data.`&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;