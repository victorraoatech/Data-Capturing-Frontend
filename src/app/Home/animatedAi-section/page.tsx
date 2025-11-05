// import React from 'react';
// import Image from 'next/image';

// const AnimatedAISection = () => {
//   return (
//     <>
//       <style>{`
//         @keyframes pulse-zoom {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//         }

//         @keyframes inner-pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.15);
//             opacity: 0.8;
//           }
//         }

     

//         .animate-inner-pulse {
//           animation: inner-pulse 2s ease-in-out infinite;
//         }

//         .animate-glow-pulse {
//           animation: glow-pulse 3s ease-in-out infinite;
//         }

//         .animate-rotate-slow {
//           animation: rotate-slow 20s linear infinite;
//         }

//         .animated-orb-wrapper {
//           position: relative;
//         }

//         // .animated-orb-wrapper::before {
//         //   content: '';
//         //   position: absolute;
//         //   inset: -20px;
//         //   background: radial-gradient(circle, rgba(93, 42, 139, 0.15) 0%, transparent 70%);
//         //   animation: inner-pulse 2.5s ease-in-out infinite;
//         //   border-radius: 50%;
//         //   pointer-events: none;
//         // }

//         // .animated-orb-wrapper::after {
//         //   content: '';
//         //   position: absolute;
//         //   inset: -10px;
//         //   border: 2px solid rgba(93, 42, 139, 0.2);
//         //   border-radius: 50%;
//         //   animation: pulse-zoom 3s ease-in-out infinite;
//         //   pointer-events: none;
//         // }
//       `}</style>

//       <section className="bg-[#F4EFFA] py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex items-center justify-between gap-12">
//             {/* Left Side - Text Content */}
//             <div className="flex-1">
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-monument font-normal">
//                 Powered by AI technology
//               </h2>
//               <p className="font-manrope font-normal text-[#6E6E6EB2] text-lg leading-relaxed">
//                 Our intelligent system uses computer vision and machine learning to detect shapes, calculate proportions, and deliver measurements with remarkable accuracy, all from the images uploaded.
//               </p>
              
//               {/* Features List */}
//               <div className="mt-8 space-y-3">
//                 <div className="flex items-center gap-3 bg-[#E4D8F380] rounded-lg w-[78%] px-2">
//                   <p className="font-manrope font-normal text-[#6E6E6EB2]">Image upload → AI analysis → Accurate measurements</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Images */}
//             <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
//               {/* Left Decorative Icon */}
//               <Image
//                 src='/Rss Feed Streamline Ultimate Regular - Free (4).png'
//                 alt="AI Icon"
//                 width={70}
//                 height={70}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 opacity-80"
//               />
              
//               {/* Center Frame/Orb with Animation */}
//               <div className="relative z-10 animated-orb-wrapper animate-pulse-zoom animate-glow-pulse">
//                 <div className="animate-inner-pulse">
//                   <Image
//                     src='/Frame.png'
//                     alt="AI Technology Visualization"
//                     width={400}
//                     height={400}
//                     className="rounded-full"
//                   />
//                 </div>
//               </div>
              
//               {/* Right Decorative Icon */}
//               <Image
//                 src='/Rss Feed Streamline Ultimate Regular - Free (5).png'
//                 alt="AI Icon"
//                 width={70}
//                 height={70}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 opacity-80"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AnimatedAISection;

import React from 'react';
import Image from 'next/image';

const AnimatedAISection = () => {
  return (
    <>
      <style>{`
        @keyframes pulse-zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes inner-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }

        .animate-inner-pulse {
          animation: inner-pulse 2s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animated-orb-wrapper {
          position: relative;
        }

        @media (max-width: 768px) {
          .animate-inner-pulse {
            animation: inner-pulse 3s ease-in-out infinite;
          }
        }
      `}</style>

      <section className="bg-[#F4EFFA] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gray-800 font-monument font-normal">
                Powered by AI technology
              </h2>
              <p className="font-manrope font-normal text-[#6E6E6EB2] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our intelligent system uses computer vision and machine learning to detect shapes, calculate proportions, and deliver measurements with remarkable accuracy, all from the images uploaded.
              </p>
              
              {/* Features List */}
              <div className="mt-6 lg:mt-8 space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-3 bg-[#E4D8F380] rounded-lg w-full max-w-md mx-auto lg:mx-0 px-4 py-3">
                  <p className="font-manrope font-normal text-[#6E6E6EB2] text-sm lg:text-base">
                    Image upload → AI analysis → Accurate measurements
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="flex-1 flex items-center justify-center relative min-h-[300px] lg:min-h-[400px] order-1 lg:order-2 w-full max-w-md mx-auto">
              {/* Left Decorative Icon - Hidden on mobile, visible on desktop */}
              <Image
                src='/Rss Feed Streamline Ultimate Regular - Free (4).png'
                alt="AI Icon"
                width={70}
                height={70}
                className="hidden lg:block absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 opacity-80"
              />
              
              {/* Center Frame/Orb with Animation */}
              <div className="relative z-10 animated-orb-wrapper">
                <div className="animate-inner-pulse">
                  <Image
                    src='/Frame.png'
                    alt="AI Technology Visualization"
                    width={300}
                    height={300}
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-contain"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>
              
              {/* Right Decorative Icon - Hidden on mobile, visible on desktop */}
              <Image
                src='/Rss Feed Streamline Ultimate Regular - Free (5).png'
                alt="AI Icon"
                width={70}
                height={70}
                className="hidden lg:block absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 opacity-80"
              />

              {/* Mobile decorative icons */}
              <Image
                src='/Rss Feed Streamline Ultimate Regular - Free (4).png'
                alt="AI Icon"
                width={40}
                height={40}
                className="lg:hidden absolute left-2 top-4 opacity-60"
              />
              <Image
                src='/Rss Feed Streamline Ultimate Regular - Free (5).png'
                alt="AI Icon"
                width={40}
                height={40}
                className="lg:hidden absolute right-2 bottom-4 opacity-60"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedAISection;