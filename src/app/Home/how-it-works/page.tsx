
// "use client";

// import React from "react";
// import Image from "next/image";

// const Page = () => {
//   const steps = [
//     {
//       id: 1,
//       step: "Step 1",
//       title: "Upload an image",
//       description: "You upload any clear image of a person or object.",
//       imageSrc: "/aiony-haust-3TLl_97HNJo-unsplash-removebg-preview 1.png",
//       imageWidth: 120,
//       imageHeight: 120,
//       bgColor: "bg-[#F4EFFA]",
//       borderColor: "border-gray-200",
//       hasDecorations: true,
//     },
//     {
//       id: 2,
//       step: "Step 2",
//       title: "AI analysis",
//       description: "Our engine detects scale, angles, and proportions",
//       imageSrc:
//         "/26760494_2002.i123.009.S.m004.c13.mannequins_realistic_colored_1-removebg-preview 3@2x.png",
//       imageWidth: 100,
//       imageHeight: 140,
//       overlayImage: "/Group 2.png",
//       bgColor: "bg-[#5D2A8B]",
//       borderColor: "border-[#5D2A8B]",
//       featured: true,
//     },
//     {
//       id: 3,
//       step: "Step 3",
//       title: "View Measurements Instantly",
//       description: "Get exact height, width, and fit details",
//       imageSrc: "/18021 1.png",
//       imageWidth: 120,
//       imageHeight: 120,
//       bgColor: "bg-[#F8F4FC]",
//       borderColor: "border-purple-200",
//       hasDecorations: true,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold font-monument mb-3">
//             How it works
//           </h2>
//           <p className="font-manrope text-[#6E6E6EB2] text-base">
//             Get accurate measurements in just three steps
//           </p>
//         </div>

//         {/* Steps Grid */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className={`
//                 relative transform transition-transform duration-500 ease-in-out hover:scale-105
//                 ${step.featured ? "md:scale-110 md:-mt-8 z-10" : "z-0"}
//                 ${step.featured ? "w-full md:w-[340px]" : "w-full md:w-[300px]"}
//               `}
//             >
//               <div
//                 className={`
//                   ${step.bgColor}
//                   ${step.featured ? "text-white" : "text-gray-900"}
//                   border-2 ${step.borderColor} ${step.featured ? "border-none" : "border-dashed"}
//                   rounded-3xl overflow-hidden
//                   ${step.featured ? "shadow-2xl" : "shadow-sm"}
//                   relative
//                 `}
//               >
//                 {/* Decorative Elements */}
//                 {step.hasDecorations && (
//                   <div className="absolute top-6 right-6 flex flex-col items-end gap-2 z-20">
//                     {step.id === 1 && (
//                       <Image
//                         src="/Summertime Sadness.png"
//                         alt="decor-step-1"
//                         height={20}
//                         width={20}
//                       />
//                     )}
//                     {step.id === 3 && (
//                       <Image
//                         src="/5 Dots.png"
//                         alt="decor-step-3"
//                         height={20}
//                         width={20}
//                       />
//                     )}
//                   </div>
//                 )}

//                 {/* Step Badge */}
//                 <div className="px-6 pt-6">
//                   <span
//                     className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${
//                       step.featured
//                         ? "bg-white/20 text-white"
//                         : "bg-purple-100 text-purple-700"
//                     }`}
//                   >
//                     {step.step}
//                   </span>
//                 </div>

//                 {/* Image Container */}
//                 <div
//                   className={`${
//                     step.featured ? "h-64" : "h-56"
//                   } flex items-center justify-center p-6 relative`}
//                 >
//                   {step.featured ? (
//                     <div className="relative">
//                       {step.overlayImage && (
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <Image
//                             src={step.overlayImage}
//                             alt="Analysis circles"
//                             width={160}
//                             height={160}
//                             className="object-contain"
//                           />
//                         </div>
//                       )}
//                       {/* AI Image with side-to-side motion */}
//                       <Image
//                         src={step.imageSrc}
//                         alt={step.title}
//                         width={step.imageWidth}
//                         height={step.imageHeight}
//                         className="object-contain relative z-10 animate-slide"
//                       />
//                     </div>
//                   ) : (
//                     <Image
//                       src={step.imageSrc}
//                       alt={step.title}
//                       width={step.imageWidth}
//                       height={step.imageHeight}
//                       className="object-contain"
//                     />
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className={`px-6 pb-6 ${step.featured ? "pt-0" : "pt-2"}`}>
//                   <h3
//                     className={`text-xl font-bold mb-2 ${
//                       step.featured ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {step.title}
//                   </h3>
//                   <p
//                     className={`text-sm leading-relaxed ${
//                       step.featured ? "text-white/90" : "text-gray-500"
//                     }`}
//                   >
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         /* Smooth zoom in/out */
//         .hover\\:scale-105:hover {
//           transform: scale(1.05);
//         }

//         /* Side-to-side motion for AI image */
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           50% {
//             transform: translateX(15px);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-slide {
//           animation: slide 4s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Page;
"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  const steps = [
    {
      id: 1,
      step: "Step 1",
      title: "Upload an image",
      description: "You upload any clear image of a person or object.",
      imageSrc: "/aiony-haust-3TLl_97HNJo-unsplash-removebg-preview 1.png",
      imageWidth: 120,
      imageHeight: 120,
      bgColor: "bg-[#F4EFFA]",
      borderColor: "border-gray-200",
      hasDecorations: true,
    },
    {
      id: 2,
      step: "Step 2",
      title: "AI analysis",
      description: "Our engine detects scale, angles, and proportions",
      imageSrc:
        "/26760494_2002.i123.009.S.m004.c13.mannequins_realistic_colored_1-removebg-preview 3@2x.png",
      imageWidth: 100,
      imageHeight: 140,
      overlayImage: "/Group 2.png",
      bgColor: "bg-[#5D2A8B]",
      borderColor: "border-[#5D2A8B]",
      featured: true,
    },
    {
      id: 3,
      step: "Step 3",
      title: "View Measurements Instantly",
      description: "Get exact height, width, and fit details",
      imageSrc: "/18021 1.png",
      imageWidth: 120,
      imageHeight: 120,
      bgColor: "bg-[#F8F4FC]",
      borderColor: "border-purple-200",
      hasDecorations: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-monument mb-3 lg:mb-4">
            How it works
          </h2>
          <p className="font-manrope text-[#6E6E6EB2] text-sm lg:text-base max-w-md mx-auto">
            Get accurate measurements in just three steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`
                relative transform transition-transform duration-500 ease-in-out hover:scale-105
                ${step.featured ? "lg:scale-110 lg:-mt-8 z-10" : "z-0"}
                ${step.featured ? "w-full lg:w-[340px]" : "w-full lg:w-[300px]"}
                max-w-sm mx-auto
              `}
            >
              <div
                className={`
                  ${step.bgColor}
                  ${step.featured ? "text-white" : "text-gray-900"}
                  border-2 ${step.borderColor} ${step.featured ? "border-none" : "border-dashed"}
                  rounded-3xl overflow-hidden
                  ${step.featured ? "shadow-2xl" : "shadow-sm"}
                  relative h-full
                `}
              >
                {/* Decorative Elements */}
                {step.hasDecorations && (
                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex flex-col items-end gap-2 z-20">
                    {step.id === 1 && (
                      <Image
                        src="/Summertime Sadness.png"
                        alt="decor-step-1"
                        height={16}
                        width={16}
                        className="w-4 h-4 lg:w-5 lg:h-5"
                      />
                    )}
                    {step.id === 3 && (
                      <Image
                        src="/5 Dots.png"
                        alt="decor-step-3"
                        height={16}
                        width={16}
                        className="w-4 h-4 lg:w-5 lg:h-5"
                      />
                    )}
                  </div>
                )}

                {/* Step Badge */}
                <div className="px-4 lg:px-6 pt-4 lg:pt-6">
                  <span
                    className={`inline-block px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs font-semibold ${
                      step.featured
                        ? "bg-white/20 text-white"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Image Container */}
                <div
                  className={`${
                    step.featured ? "h-48 lg:h-64" : "h-40 lg:h-56"
                  } flex items-center justify-center p-4 lg:p-6 relative`}
                >
                  {step.featured ? (
                    <div className="relative">
                      {step.overlayImage && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src={step.overlayImage}
                            alt="Analysis circles"
                            width={120}
                            height={120}
                            className="w-24 h-24 lg:w-40 lg:h-40 object-contain"
                            sizes="(max-width: 1024px) 96px, 160px"
                          />
                        </div>
                      )}
                      {/* AI Image with side-to-side motion */}
                      <Image
                        src={step.imageSrc}
                        alt={step.title}
                        width={step.imageWidth}
                        height={step.imageHeight}
                        className="object-contain relative z-10 animate-slide w-16 h-20 lg:w-20 lg:h-28"
                        sizes="(max-width: 1024px) 64px, 80px"
                      />
                    </div>
                  ) : (
                    <Image
                      src={step.imageSrc}
                      alt={step.title}
                      width={step.imageWidth}
                      height={step.imageHeight}
                      className="object-contain w-20 h-20 lg:w-24 lg:h-24"
                      sizes="(max-width: 1024px) 80px, 96px"
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`px-4 lg:px-6 pb-4 lg:pb-6 ${step.featured ? "pt-0" : "pt-2"}`}>
                  <h3
                    className={`text-lg lg:text-xl font-bold mb-2 ${
                      step.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs lg:text-sm leading-relaxed ${
                      step.featured ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        /* Side-to-side motion for AI image */
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide {
          animation: slide 4s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(5px);
            }
            100% {
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Page;