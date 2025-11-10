import React from 'react';
import Image from 'next/image';

const AnimatedAISection = () => {
  return (
    <>
      <style>{`
        @keyframes subtle-glow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.1);
          }
        }

        .animate-subtle-glow {
          animation: subtle-glow 3s ease-in-out infinite;
        }
      `}</style>

      <section 
        className="bg-[#F4EFFA]"
        style={{
          width: "100%",
          height: "518px",
          marginBottom: "200px",
        }}
      >
        <div 
          className="relative mx-auto"
          style={{
            width: "1441px",
            height: "518px",
          }}
        >
          {/* Left Container */}
          <div 
            className="absolute"
            style={{
              width: "667px",
              height: "325px",
              top: "150px",
              left: "80px",
            }}
          >
            {/* H1 and P Tag Container */}
            <div 
              style={{
                width: "667px",
                height: "148px",
                gap: "24px",
                marginBottom: "24px",
              }}
            >
              <h2
                className="text-[#1A1A1A]"
                style={{
                  fontFamily: "Monument Extended",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "left",
                  width: "667px",
                  height: "43px",
                  marginBottom: "24px",
                }}
              >
                Powered by AI technology
              </h2>
              
              <p
                className="text-[#6E6E6EB2]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  width: "625px",
                  height: "81px",
                }}
              >
                Our intelligent system uses computer vision and machine learning to detect shapes, estimate proportions, and deliver measurements with remarkable accuracy, all from the images uploaded.
              </p>
            </div>

            {/* Upload Image Text Container */}
            <div 
              className="flex items-center"
              style={{
                background: "#E4D8F380",
                width: "502px",
                height: "37px",
                borderRadius: "20px",
                padding: "6px 20px",
                gap: "8px",
              }}
            >
              <p 
                className="text-[#6E6E6EB2]"
                style={{
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                }}
              >
                Image upload → AI analysis → Accurate measurements
              </p>
            </div>
          </div>

          {/* Left Decorative Icon */}
          <div 
            className="absolute"
            style={{
              top: "50%",
              left: "780px",
              transform: "translateY(-50%)",
              zIndex: 5,
            }}
          >
            <Image
              src='/Rss Feed Streamline Ultimate Regular - Free (4).png'
              alt="AI Icon"
              width={70}
              height={70}
              className="opacity-80"
            />
          </div>

          {/* Right Side - Image Container */}
          <div 
            className="absolute"
            style={{
              width: "401.25px",
              height: "405.19px",
              top: "50%",
              left: "816.08px",
              transform: "translateY(-50%) rotate(34.72deg)",
            }}
          >
            {/* Center Frame with Subtle Animation */}
            <div className="relative w-full h-full">
              <Image
                src='/Frame.png'
                alt="AI Technology Visualization"
                width={401}
                height={405}
                className="w-full h-full object-contain animate-subtle-glow"
              />
            </div>
          </div>

          {/* Right Decorative Icon */}
          <div 
            className="absolute"
            style={{
              top: "50%",
              right: "200px",
              transform: "translateY(-50%)",
              zIndex: 5,
            }}
          >
            <Image
              src='/Rss Feed Streamline Ultimate Regular - Free (5).png'
              alt="AI Icon"
              width={70}
              height={70}
              className="opacity-80"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedAISection;