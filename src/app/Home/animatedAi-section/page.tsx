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

        // @keyframes glow-pulse {
        //   0%, 100% {
        //     box-shadow: 0 0 20px rgba(93, 42, 139, 0.3);
        //   }
        //   50% {
        //     box-shadow: 0 0 40px rgba(93, 42, 139, 0.6);
        //   }
        // }

        // @keyframes rotate-slow {
        //   from {
        //     transform: rotate(0deg);
        //   }
        //   to {
        //     transform: rotate(360deg);
        //   }
        // }

        // .animate-pulse-zoom {
        //   animation: pulse-zoom 3s ease-in-out infinite;
        // }

        .animate-inner-pulse {
          animation: inner-pulse 2s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animated-orb-wrapper {
          position: relative;
        }

        // .animated-orb-wrapper::before {
        //   content: '';
        //   position: absolute;
        //   inset: -20px;
        //   background: radial-gradient(circle, rgba(93, 42, 139, 0.15) 0%, transparent 70%);
        //   animation: inner-pulse 2.5s ease-in-out infinite;
        //   border-radius: 50%;
        //   pointer-events: none;
        // }

        // .animated-orb-wrapper::after {
        //   content: '';
        //   position: absolute;
        //   inset: -10px;
        //   border: 2px solid rgba(93, 42, 139, 0.2);
        //   border-radius: 50%;
        //   animation: pulse-zoom 3s ease-in-out infinite;
        //   pointer-events: none;
        // }
      `}</style>

      <section className="bg-[#F4EFFA] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-monument font-normal">
                Powered by AI technology
              </h2>
              <p className="font-manrope font-normal text-[#6E6E6EB2] text-lg leading-relaxed">
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
              
              {/* Center Frame/Orb with Animation */}
              <div className="relative z-10 animated-orb-wrapper animate-pulse-zoom animate-glow-pulse">
                <div className="animate-inner-pulse">
                  <Image
                    src='/Frame.png'
                    alt="AI Technology Visualization"
                    width={400}
                    height={400}
                    className="rounded-full"
                  />
                </div>
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
    </>
  );
};

export default AnimatedAISection;